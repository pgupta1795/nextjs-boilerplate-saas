'use client';

import { type UsersData } from '@/app/(app)/admin/users/_components/columns';
import { Button } from '@/components/ui/button';
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
import { siteUrls } from '@/lib/config/site';
import {
  deleteUserMutation,
  updateRoleMutation
} from '@/server/actions/user/mutations';
import { usersRoleEnum } from '@/server/db/schema';
import { useMutation } from '@tanstack/react-query';
import { MoreHorizontalIcon } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

type Role = (typeof usersRoleEnum.enumValues)[number];

const content = {
  openMenu: 'Open menu',
  actionsLabel: 'Actions',
  copyIdItem: 'Copy user ID',
  sendLinkItem: 'Send verification link',
  editRoleItem: 'Edit role',
  deleteItem: 'Delete',
  updatingRoleLoading: 'Updating user role...',
  updatingRoleSuccess: 'User role updated!',
  updatingRoleError: 'Failed to update user role, Check your permissions.',
  sendingLinkLoading: 'Sending verification link...',
  sendingLinkSuccess: "Verification link sent to user's email!",
  sendingLinkError: 'Failed to send verification link.',
  deletingUserLoading: 'Deleting user...',
  deletingUserSuccess: 'User deleted!',
  deletingUserError: 'Failed to delete user.',
  copySuccess: 'User ID copied to clipboard'
};

export function ColumnDropdown({ email, id, role }: UsersData) {
  const router = useRouter();

  const { mutateAsync: changeRoleMutate, isPending: changeRoleIsPending } =
    useMutation({
      mutationFn: ({ role }: { role: Role }) =>
        updateRoleMutation({ id, role }),
      onSettled: () => {
        router.refresh();
      }
    });

  const onRoleChange = (role: Role) => {
    toast.promise(async () => await changeRoleMutate({ role }), {
      loading: content.updatingRoleLoading,
      success: content.updatingRoleSuccess,
      error: content.updatingRoleError
    });
  };

  const sendLoginLink = () => {
    toast.promise(
      async () => {
        await signIn('email', {
          email,
          callbackUrl: siteUrls.dashboard.home,
          redirect: false
        });
      },
      {
        loading: content.sendingLinkLoading,
        success: content.sendingLinkSuccess,
        error: content.sendingLinkError
      }
    );
  };

  const { mutateAsync: deleteUserMutate, isPending: deleteUserIsPending } =
    useMutation({
      mutationFn: () => deleteUserMutation({ id }),
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
            await navigator.clipboard.writeText(id);
            toast(content.copySuccess);
          }}
        >
          {content.copyIdItem}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={sendLoginLink}>
          {content.sendLinkItem}
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            {content.editRoleItem}
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuRadioGroup
              value={role}
              onValueChange={(r) => onRoleChange(r as Role)}
            >
              {usersRoleEnum.enumValues.map((currentRole) => (
                <DropdownMenuRadioItem
                  key={currentRole}
                  value={currentRole}
                  disabled={changeRoleIsPending}
                >
                  {currentRole}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
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
