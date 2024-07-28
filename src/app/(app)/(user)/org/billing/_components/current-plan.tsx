import { CancelPauseResumeBtns } from '@/app/(app)/(user)/org/billing/_components/cancel-pause-resume-btns';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import type { OrgSubscription } from '@/lib/types/org-subscription';
import { format } from 'date-fns';
import { redirect } from 'next/navigation';

type CurrentPlanProps = {
  subscription: OrgSubscription;
};

const content = {
  planLabel: 'Plan:',
  renewsAt: (date: string) => `Renews at ${date}`,
  pausedSubscription: 'Your subscription is paused',
  endedOn: (date: string) => `Ended on ${date}`,
  endsAt: (date: string) => `Ends at ${date}`,
  noExpiration: 'No expiration',
  manageBillingButton: 'Manage your billing settings',
  currentPlan: 'Current Plan',
  manageCurrentPlan: 'Manage and view your current plan'
};

export function CurrentPlan({ subscription }: CurrentPlanProps) {
  async function manageBilling() {
    'use server';
    if (subscription?.customerPortalUrl) {
      redirect(subscription?.customerPortalUrl);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{content.currentPlan}</CardTitle>
        <CardDescription>{content.manageCurrentPlan}</CardDescription>
      </CardHeader>
      <CardContent className='space-y-3'>
        <div className='space-y-1'>
          <div className='flex items-center gap-2'>
            <p>
              <span className='font-semibold'>{content.planLabel}</span>{' '}
              {subscription ? subscription.plan?.title : 'Free'}
            </p>
            {subscription?.status_formatted && (
              <Badge variant='secondary'>{subscription.status_formatted}</Badge>
            )}
          </div>
          <p className='text-sm text-muted-foreground'>
            {subscription ? (
              <>
                {subscription.status === 'active' &&
                  content.renewsAt(format(subscription.renews_at, 'PP'))}
                {subscription.status === 'paused' && content.pausedSubscription}
                {subscription.status === 'cancelled' &&
                  subscription.ends_at &&
                  (new Date(subscription.ends_at) > new Date()
                    ? content.endsAt(format(subscription.ends_at, 'PP'))
                    : content.endedOn(format(subscription.ends_at, 'PP')))}
              </>
            ) : (
              content.noExpiration
            )}
          </p>
        </div>

        <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
          <form action={manageBilling}>
            <Button disabled={!subscription} variant='outline'>
              {content.manageBillingButton}
            </Button>
          </form>
          <CancelPauseResumeBtns subscription={subscription} />
        </div>
      </CardContent>
    </Card>
  );
}
