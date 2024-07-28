'use client';

import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { useAwaitableTransition } from '@/lib/hooks/use-awaitable-transition';
import type { OrgSubscription } from '@/lib/types/org-subscription';
import {
  cancelPlan,
  pausePlan,
  resumePlan
} from '@/server/actions/subscription/mutations';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export const content = {
  pause: {
    default: 'Pause Plan',
    loading: 'Pausing Plan...',
    success: 'Plan paused successfully',
    error: 'Failed to pause plan'
  },
  cancel: {
    default: 'Cancel Plan',
    loading: 'Cancelling Plan...',
    success: 'Plan cancelled successfully',
    error: 'Failed to cancel plan'
  },
  resume: {
    default: 'Resume Plan',
    loading: 'Resuming Plan...',
    success: 'Plan resumed successfully',
    error: 'Failed to resume plan'
  }
};

type CancelAndPauseBtnProps = {
  subscription: OrgSubscription;
};

export function CancelPauseResumeBtns({
  subscription
}: CancelAndPauseBtnProps) {
  const router = useRouter();
  const [, startAwaitableTransition] = useAwaitableTransition();

  const { isPending: isCancelling, mutate: cancelMutate } = useMutation({
    mutationFn: async () => {
      const response = await cancelPlan();
      await startAwaitableTransition(() => {
        router.refresh();
      });
      return response;
    },
    onError: () => {
      toast.error(content.cancel.error);
    },
    onSuccess: () => {
      toast.success(content.cancel.success);
    }
  });

  const { isPending: isResuming, mutate: resumeMutate } = useMutation({
    mutationFn: async () => {
      const response = await resumePlan();
      await startAwaitableTransition(() => {
        router.refresh();
      });
      return response;
    },
    onError: () => {
      toast.error(content.resume.error);
    },
    onSuccess: () => {
      toast.success(content.resume.success);
    }
  });

  const { isPending: isPausing, mutate: pauseMutate } = useMutation({
    mutationFn: async () => {
      const response = await pausePlan();
      await startAwaitableTransition(() => {
        router.refresh();
      });
      return response;
    },
    onError: () => {
      toast.error(content.pause.error);
    },
    onSuccess: () => {
      toast.success(content.pause.success);
    }
  });

  const isAllActionsPending = isCancelling || isResuming || isPausing;
  if (!subscription) return null;

  if (subscription.status === 'active') {
    return (
      <div className='flex items-center gap-2'>
        <Button
          disabled={isAllActionsPending}
          onClick={() => pauseMutate()}
          variant='outline'
        >
          {isPausing ? <Icons.loader className='mr-2 h-4 w-4' /> : null}
          {isPausing ? content.pause.loading : content.pause.default}
        </Button>
        <Button
          onClick={() => cancelMutate()}
          disabled={isAllActionsPending}
          variant='destructive'
        >
          {isCancelling ? <Icons.loader className='mr-2 h-4 w-4' /> : null}
          {isCancelling ? content.cancel.loading : content.cancel.default}
        </Button>
      </div>
    );
  }

  return (
    <Button
      disabled={isAllActionsPending}
      onClick={() => resumeMutate()}
      variant='outline'
    >
      {isResuming ? <Icons.loader className='mr-2 h-4 w-4' /> : null}
      {isResuming ? content.resume.loading : content.resume.default}
    </Button>
  );
}
