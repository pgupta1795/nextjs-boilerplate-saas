'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { removeUserFeedbackMutation } from '@/server/actions/feedback/mutations';
import { type feedbackSelectSchema } from '@/server/db/schema';
import { useMutation } from '@tanstack/react-query';
import { MoreVerticalIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import type { z } from 'zod';

export const content = {
  dropdown: {
    openMenu: 'Open menu',
    actions: 'Actions',
    remove: 'Remove'
  },
  toast: {
    loading: 'Removing feedback...',
    success: 'Feedback removed successfully',
    error: 'Failed to remove feedback'
  }
};

type FeedbackDropdownProps = z.infer<typeof feedbackSelectSchema>;

export function FeedbackDropdown(props: FeedbackDropdownProps) {
  const router = useRouter();
  const {
    mutateAsync: removeFeedbackMutate,
    isPending: isRemoveFeedbackPending
  } = useMutation({
    mutationFn: () => removeUserFeedbackMutation({ id: props.id }),
    onSettled: () => {
      router.refresh();
    }
  });

  const handleRemoveFeedback = async () => {
    toast.promise(async () => removeFeedbackMutate(), {
      loading: content.toast.loading,
      success: content.toast.success,
      error: content.toast.error
    });
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='absolute right-3 top-3 h-8 w-8 p-0'>
          <span className='sr-only'>{content.dropdown.openMenu}</span>
          <MoreVerticalIcon className='h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='w-screen max-w-[12rem]'>
        <DropdownMenuLabel>{content.dropdown.actions}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          disabled={isRemoveFeedbackPending}
          onClick={handleRemoveFeedback}
          className='text-red-600'
        >
          {content.dropdown.remove}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
