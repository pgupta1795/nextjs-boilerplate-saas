'use client';

import {type FeedbackData} from '@/app/(app)/admin/feedbacks/_components/columns';
import {Button} from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {useAwaitableTransition} from '@/lib/hooks/use-awaitable-transition';
import {
  deleteFeedbackMutation,
  updateFeedbackMutation
} from '@/server/actions/feedback/mutations';
import {feedback,feedbackSelectSchema} from '@/server/db/schema';
import {useMutation} from '@tanstack/react-query';
import {MoreHorizontalIcon} from 'lucide-react';
import {useRouter} from 'next/navigation';
import {toast} from 'sonner';
import type {z} from 'zod';

const content = {
  updateStatus: (status: string) => ({
    loading: `Updating feedback status to ${status}...`,
    success: `Feedback status updated to ${status}`,
    error: 'Failed to update feedback status'
  }),
  updateLabel: (label: string) => ({
    loading: `Updating feedback label to ${label}...`,
    success: `Feedback label updated to ${label}`,
    error: 'Failed to update feedback label'
  }),
  deleteFeedback: {
    loading: 'Removing feedback...',
    success: 'Feedback removed successfully',
    error: 'Failed to remove feedback'
  },
  actions: 'Actions',
  status: 'Status',
  label: 'Label',
  delete: 'Delete'
};
const updateFeedbackProps = feedbackSelectSchema.pick({
  label: true,
  status: true
});

export function ColumnDropdown(props: FeedbackData) {
  const router = useRouter();
  const {
    isPending: updateFeedbackPending,
    mutateAsync: updateFeedbackMutate
  } = useMutation({
    mutationFn: ({ status, label }: z.infer<typeof updateFeedbackProps>) =>
      updateFeedbackMutation({ id: props.id, status, label })
  });

  const [isUpdatePending, startAwaitableUpdateTransition] =
    useAwaitableTransition();

  const onChangeStatus = async (
    status: typeof feedback.$inferSelect.status
  ) => {
    toast.promise(async () => {
      await updateFeedbackMutate({
        status,
        label: props.label
      });
      await startAwaitableUpdateTransition(() => {
        router.refresh();
      });
    }, content.updateStatus(status));
  };

  const onChangeLabel = async (label: typeof feedback.$inferSelect.label) => {
    toast.promise(async () => {
      await updateFeedbackMutate({
        status: props.status,
        label
      });
      await startAwaitableUpdateTransition(() => {
        router.refresh();
      });
    }, content.updateLabel(label));
  };

  const [isDeletePending, startAwaitableDeleteTransition] =
    useAwaitableTransition();

  const {
    isPending: deleteFeedbackPending,
    mutateAsync: deleteFeedbackMutate
  } = useMutation({
    mutationFn: () => deleteFeedbackMutation({ id: props.id })
  });

  const handleDeleteFeedback = async () => {
    toast.promise(async () => {
      await deleteFeedbackMutate();
      await startAwaitableDeleteTransition(() => {
        router.refresh();
      });
    }, content.deleteFeedback);
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='h-8 w-8 p-0'>
          <span className='sr-only'>Open menu</span>
          <MoreHorizontalIcon className='h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='w-screen max-w-[12rem]'>
        <DropdownMenuLabel>{content.actions}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>{content.status}</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuRadioGroup
              value={props.status}
              onValueChange={(s) =>
                onChangeStatus(s as typeof feedback.$inferSelect.status)
              }
            >
              {feedback.status.enumValues.map((currentStatus) => (
                <DropdownMenuRadioItem
                  key={currentStatus}
                  value={currentStatus}
                  disabled={updateFeedbackPending || isUpdatePending}
                >
                  {currentStatus}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>{content.label}</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuRadioGroup
              value={props.label}
              onValueChange={(l) =>
                onChangeLabel(l as typeof feedback.$inferSelect.label)
              }
            >
              {feedback.label.enumValues.map((currentLabel) => (
                <DropdownMenuRadioItem
                  key={currentLabel}
                  value={currentLabel}
                  disabled={updateFeedbackPending || isUpdatePending}
                >
                  {currentLabel}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          disabled={deleteFeedbackPending || isDeletePending}
          onClick={handleDeleteFeedback}
          className='text-red-600'
        >
          {content.delete}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
