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
import { updateNameMutation } from '@/server/actions/user/mutations';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import type { User } from 'next-auth';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

const content = {
  cardTitle: 'Name',
  cardDescription:
    'Please enter your full name, or a display name you are comfortable with.',
  inputPlaceholder: 'alidotm',
  saveChanges: 'Save Changes',
  nameAlreadySet: 'Name is already set to this name',
  nameUpdateSuccess: 'Name updated successfully',
  nameUpdateError: 'Failed to update name, please try again later',
  minLengthError: 'Name must be at least 3 characters long',
  maxLengthError: 'Name must be at most 50 characters long'
};

const userNameFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, content.minLengthError)
    .max(50, content.maxLengthError)
});

export type UserNameFormSchema = z.infer<typeof userNameFormSchema>;

export function UserNameForm({ user }: { user: User }) {
  const router = useRouter();
  const form = useForm<UserNameFormSchema>({
    resolver: zodResolver(userNameFormSchema),
    defaultValues: { name: user.name ?? '' }
  });

  const { isPending, mutateAsync } = useMutation({
    mutationFn: () => updateNameMutation({ name: form.getValues().name }),
    onSuccess: () => {
      router.refresh();
      toast.success(content.nameUpdateSuccess);
    },
    onError: (error: { message?: string } = {}) =>
      toast.error(error.message ?? content.nameUpdateError)
  });

  const onSubmit = async (values: UserNameFormSchema) => {
    if (values.name === user.name) return toast(content.nameAlreadySet);
    await mutateAsync();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className='flex h-full w-full flex-col justify-between'>
          <div>
            <CardHeader>
              <CardTitle>{content.cardTitle}</CardTitle>
              <CardDescription>{content.cardDescription}</CardDescription>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder={content.inputPlaceholder}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </div>
          <CardFooter>
            <Button disabled={isPending} type='submit' className='gap-2'>
              {isPending && <Icons.loader className='h-4 w-4' />}
              <span>{content.saveChanges}</span>
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
