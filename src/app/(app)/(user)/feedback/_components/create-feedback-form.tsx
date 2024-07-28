'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Icons } from '@/components/ui/icons';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useAwaitableTransition } from '@/lib/hooks/use-awaitable-transition';
import { createFeedbackMutation } from '@/server/actions/feedback/mutations';
import { feedback, feedbackInsertSchema } from '@/server/db/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import type { z } from 'zod';

export const content = {
  dialog: {
    title: 'Give your feedback',
    description:
      'We appreciate your feedback and suggestions. Please provide your feedback below.'
  },
  form: {
    title: 'Title',
    titlePlaceholder: 'Title of your feedback',
    titleDescription: 'Give a title to your feedback.',
    label: 'Label',
    labelPlaceholder: 'What type of feedback is this?',
    labelDescription: 'Select the type of feedback you are providing.',
    message: 'Message',
    messagePlaceholder: 'Your feedback message',
    messageDescription: 'Type your feedback message here.',
    submit: 'Submit Feedback',
    cancel: 'Cancel',
    success: 'Feedback submitted successfully',
    error: 'Failed to submit feedback'
  }
};

const schema = feedbackInsertSchema.pick({
  title: true,
  message: true,
  label: true
});
type CreateFeedbackFormSchema = z.infer<typeof schema>;

export function CreateFeedbackForm() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm<CreateFeedbackFormSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: '',
      message: '',
      label: 'Feature Request'
    }
  });

  const { isPending: isMutatePending, mutateAsync } = useMutation({
    mutationFn: () => createFeedbackMutation(form.getValues())
  });
  const [isPending, startAwaitableTransition] = useAwaitableTransition();

  const onSubmit = async () => {
    try {
      await mutateAsync();
      await startAwaitableTransition(() => {
        router.refresh();
      });
      form.reset();
      setIsOpen(false);
      toast.success(content.form.success);
    } catch (error) {
      toast.error(
        (error as { message?: string })?.message ?? content.form.error
      );
    }
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(o) => {
        form.reset();
        setIsOpen(o);
      }}
    >
      <DialogTrigger asChild>
        <Button type='button'>{content.form.submit}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{content.dialog.title}</DialogTitle>
          <DialogDescription>{content.dialog.description}</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='grid w-full gap-4'
          >
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{content.form.title}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={content.form.titlePlaceholder}
                      {...field}
                      value={field.value ?? ''}
                    />
                  </FormControl>
                  <FormDescription>
                    {content.form.titleDescription}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='label'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{content.form.label}</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          placeholder={content.form.labelPlaceholder}
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {feedback.label.enumValues.map((label) => (
                        <SelectItem key={label} value={label}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    {content.form.labelDescription}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='message'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{content.form.message}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={content.form.messagePlaceholder}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    {content.form.messageDescription}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <DialogFooter>
          <DialogClose asChild>
            <Button type='button' variant='outline'>
              {content.form.cancel}
            </Button>
          </DialogClose>
          <Button
            type='submit'
            disabled={isPending || isMutatePending}
            onClick={form.handleSubmit(onSubmit)}
            className='gap-2'
          >
            {isPending || isMutatePending ? (
              <Icons.loader className='h-4 w-4' />
            ) : null}
            <span>{content.form.submit}</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
