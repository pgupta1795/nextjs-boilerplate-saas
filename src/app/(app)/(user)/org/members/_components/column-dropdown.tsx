'use client';

import { type MembersData } from '@/app/(app)/(user)/org/members/_components/columns';
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
import { useAwaitableTransition } from '@/lib/hooks/use-awaitable-transition';
import {
  removeUserMutation,
  updateMemberRoleMutation
} from '@/server/actions/organization/mutations';
import { membersToOrganizationsRoleEnum } from '@/server/db/schema';
import { useMutation } from '@tanstack/react-query';
import { MoreHorizontalIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const content = {
  openMenu: 'Open menu',
  actionsLabel: 'Actions',
  editRole: 'Edit role',
  removeButtonText: 'Remove',
  updatingUserRole: 'Updating user role...',
  userRoleUpdated: 'User role updated!',
  failedToUpdateUserRole: 'Failed to update user role, Check your permissions.',
  removingUser: 'Removing user...',
  userRemoved: 'User removed',
  failedToRemoveUser: 'Failed to remove user.'
};

type Role = (typeof membersToOrganizationsRoleEnum.enumValues)[number];

export function ColumnDropdown({ role, memberId }: MembersData) {
  const router = useRouter();
  const { mutateAsync: changeRoleMutate, isPending: changeRoleIsPending } =
    useMutation({
      mutationFn: ({ role }: { role: Role }) =>
        updateMemberRoleMutation({ memberId, role }),
      onSettled: () => {
        router.refresh();
      }
    });

  const [roleChangeIsTransitionPending, startAwaitableRoleChangeTransition] =
    useAwaitableTransition();

  const onRoleChange = (role: Role) => {
    toast.promise(
      async () => {
        await changeRoleMutate({ role });
        await startAwaitableRoleChangeTransition(() => {
          router.refresh();
        });
      },
      {
        loading: content.updatingUserRole,
        success: content.userRoleUpdated,
        error: content.failedToUpdateUserRole
      }
    );
  };

  const { mutateAsync: removeMemberMutate, isPending: removeMemberIsPending } =
    useMutation({
      mutationFn: ({ memberId }: { memberId: string }) =>
        removeUserMutation({ memberId })
    });

  const [
    removeMemberIsTransitionPending,
    startAwaitableRemoveMemberTransition
  ] = useAwaitableTransition();

  const onRemoveMember = async () => {
    toast.promise(
      async () => {
        await removeMemberMutate({ memberId });
        await startAwaitableRemoveMemberTransition(() => router.refresh());
      },
      {
        loading: content.removingUser,
        success: content.userRemoved,
        error: content.failedToRemoveUser
      }
    );
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

        <DropdownMenuSub>
          <DropdownMenuSubTrigger>{content.editRole}</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuRadioGroup
              value={role}
              onValueChange={(r) => onRoleChange(r as Role)}
            >
              {membersToOrganizationsRoleEnum.enumValues.map((currentRole) => (
                <DropdownMenuRadioItem
                  key={currentRole}
                  value={currentRole}
                  disabled={
                    changeRoleIsPending || roleChangeIsTransitionPending
                  }
                >
                  {currentRole}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          disabled={removeMemberIsPending || removeMemberIsTransitionPending}
          onClick={onRemoveMember}
          className='text-red-600'
        >
          {content.removeButtonText}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
