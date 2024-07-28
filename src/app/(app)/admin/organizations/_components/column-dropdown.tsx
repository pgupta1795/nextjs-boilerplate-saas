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
import { deleteOrgAdminMutation } from '@/server/actions/organization/mutations';
import { useMutation } from '@tanstack/react-query';
import { MoreHorizontalIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { type OrganizationsData } from './columns';

const content = {
  actionsLabel: 'Actions',
  copyIdItem: 'Copy org ID',
  deleteItem: 'Delete',
  deleteUserLoading: 'Deleting user...',
  deleteUserSuccess: 'User deleted!',
  deleteUserError: 'Failed to delete user.',
  copySuccess: 'User ID copied to clipboard'
};

export function ColumnDropdown({ id }: OrganizationsData) {
  const router = useRouter();
  const { mutateAsync: deleteUserMutate, isPending: deleteUserIsPending } =
    useMutation({
      mutationFn: () => deleteOrgAdminMutation({ id }),
      onSettled: () => {
        router.refresh();
      }
    });

  const deleteUser = () => {
    toast.promise(async () => await deleteUserMutate(), {
      loading: content.deleteUserLoading,
      success: content.deleteUserSuccess,
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
          <span className='sr-only'>Open menu</span>
          <MoreHorizontalIcon className='h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='w-screen max-w-[12rem]'>
        <DropdownMenuLabel>{content.actionsLabel}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={async () => {
            await navigator.clipboard.writeText(id);
            toast(content.copySuccess);
          }}
        >
          {content.copyIdItem}
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
