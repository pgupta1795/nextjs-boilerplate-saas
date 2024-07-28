'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Icons } from '@/components/ui/icons';
import { sendOrgRequestMutation } from '@/server/actions/organization/mutations';
import type { getOrgByIdQuery } from '@/server/actions/organization/queries';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

const content = {
  requestToJoin: 'Request to join',
  sendJoiningRequest: 'You can send joining request to',
  sendRequest: 'Send Request',
  requestSuccess: 'Request sent successfully',
  requestFailure: 'Failed to send request'
};

type RequestCardProps = {
  org: Awaited<ReturnType<typeof getOrgByIdQuery>>;
  orgId: string;
};

export function RequestCard({ org, orgId }: RequestCardProps) {
  const { isPending, mutate } = useMutation({
    mutationFn: () => sendOrgRequestMutation({ orgId }),
    onSuccess: () => {
      toast.success(content.requestSuccess);
    },
    onError: (error) => {
      toast.error(error.message ?? content.requestFailure);
    }
  });

  return (
    <Card className='w-full max-w-sm'>
      <CardHeader className='flex flex-col items-center space-y-3'>
        <Avatar className='h-10 w-10'>
          <AvatarImage src={org?.image ?? ''} />
          <AvatarFallback>{org?.name[0]!.toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className='space-y-1'>
          <CardTitle className='text-center text-xl'>
            {content.requestToJoin} {org?.name}
          </CardTitle>
          <CardDescription className='text-center'>
            {content.sendJoiningRequest} {org?.name}.
          </CardDescription>
        </div>
      </CardHeader>
      <CardFooter>
        <div className='flex w-full justify-center space-x-4'>
          <Button
            className='gap-2'
            disabled={isPending}
            onClick={() => mutate()}
          >
            {isPending ? <Icons.loader className='h-4 w-4' /> : null}
            <span>{content.sendRequest}</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
