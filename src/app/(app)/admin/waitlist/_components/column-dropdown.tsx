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
import { MoreHorizontalIcon } from 'lucide-react';
import { toast } from 'sonner';

import { type WaitlistData } from '@/app/(app)/admin/waitlist/_components/columns';
import { deleteWaitlistUserMutation } from '@/server/actions/waitlist/mutations';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

const content = {
  openMenu: 'Open menu',
  actionsLabel: 'Actions',
  copyEmailItem: 'Copy email',
  deleteItem: 'Delete',
  deletingUserLoading: 'Deleting user...',
  deletingUserSuccess: 'User deleted!',
  deletingUserError: 'Failed to delete user.',
  copySuccess: 'User email copied to clipboard'
};

export function ColumnDropdown({ email, id }: WaitlistData) {
  const router = useRouter();

  const { mutateAsync: deleteUserMutate, isPending: deleteUserIsPending } =
    useMutation({
      mutationFn: () => deleteWaitlistUserMutation({ id }),
      onSettled: () => {
        router.refresh();
      }
    });

  const deleteUser = () => {
    toast.promise(async () => await deleteUserMutate(), {
      loading: content.deletingUserLoading,
      success: content.deletingUserSuccess,
      error: (e) => {
        console.log(e);
        return 'Failed to delete user.';
      }
    });
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='h-8 w-8 p-0'>
          <span className='sr-only'>{content.openMenu}</span>
          <MoreHorizontalIcon className='h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='w-screen max-w-[12rem]'>
        <DropdownMenuLabel>{content.actionsLabel}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={async () => {
            await navigator.clipboard.writeText(email);
            toast(content.copySuccess);
          }}
        >
          {content.copyEmailItem}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          disabled={deleteUserIsPending}
          onClick={deleteUser}
          className='text-red-600'
        >
          {content.deleteItem}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
