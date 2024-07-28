'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form';
import { Icons } from '@/components/ui/icons';
import { Input } from '@/components/ui/input';
import { siteUrls } from '@/lib/config/site';
import { useAwaitableTransition } from '@/lib/hooks/use-awaitable-transition';
import { setOrgCookie } from '@/lib/utils';
import { deleteOrgMutation } from '@/server/actions/organization/mutations';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

const content = {
  cardTitle: 'Delete Org',
  cardDescription: 'Type "DELETE MY ORG" to permanently delete your account.',
  confirmationPlaceholder: 'DELETE MY ORG',
  deleteButton: 'Delete My Org',
  successMessage: 'Org deleted successfully',
  errorMessage: 'Could not delete the org',
  confirmationError: 'Type "DELETE MY ORG" to confirms'
};

const schema = z.object({
  confirmation: z
    .string({ required_error: content.confirmationError })
    .min(1, content.confirmationError)
});

export type DeleteOrgFormSchema = z.infer<typeof schema>;

const DeleteYourOrgForm = ({ fallbackOrgId }: { fallbackOrgId: string }) => {
  const router = useRouter();
  const form = useForm<DeleteOrgFormSchema>({
    resolver: zodResolver(schema)
  });
  const { isPending: isMutatePending, mutateAsync } = useMutation({
    mutationFn: () => deleteOrgMutation()
  });
  const [isPending, startAwaitableTransition] = useAwaitableTransition();

  async function onSubmit(data: DeleteOrgFormSchema) {
    if (data.confirmation !== content.confirmationPlaceholder) {
      return form.setError('confirmation', {
        message: content.confirmationError
      });
    }

    try {
      await mutateAsync();
      await startAwaitableTransition(() => {
        setOrgCookie(fallbackOrgId);
        router.refresh();
        form.reset();
      });
      router.push(siteUrls.dashboard.home);
      toast.success(content.successMessage);
    } catch (error: unknown) {
      toast.error(
        (error as { message?: string })?.message ?? content.errorMessage
      );
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>{content.cardTitle}</CardTitle>
            <CardDescription>{content.cardDescription}</CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name='confirmation'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder={content.confirmationPlaceholder}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button
              disabled={isMutatePending || isPending}
              variant='destructive'
              type='submit'
              className='gap-2'
            >
              {isPending || isMutatePending ? (
                <Icons.loader className='h-4 w-4' />
              ) : null}
              <span>{content.deleteButton}</span>
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default DeleteYourOrgForm;
