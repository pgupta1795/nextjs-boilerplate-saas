'use client';
import Link from 'next/link';
import { AccountCard, AccountCardBody, AccountCardFooter } from './AccountCard';

interface PlanSettingsProps {
  stripeSubscriptionId: string | null;
  stripeCurrentPeriodEnd: Date | null;
  stripeCustomerId: string | null;
  isSubscribed: boolean | '' | null;
  isCanceled: boolean;
  id?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  stripePriceId?: string | undefined;
  price?: number | undefined;
}
export default function PlanSettings({
  subscriptionPlan,
  user
}: {
  subscriptionPlan: PlanSettingsProps;
  user: { name?: string; id: string; email?: string };
}) {
  return (
    <AccountCard
      params={{
        header: 'Your Plan',
        description: subscriptionPlan.isSubscribed
          ? `You are currently on the ${subscriptionPlan.name} plan.`
          : `You are not subscribed to any plan.`.concat(
              !user?.email || user?.email?.length < 5
                ? ' Please add your email to upgrade your account.'
                : ''
            )
      }}
    >
      <AccountCardBody>
        {subscriptionPlan.isSubscribed ? (
          <h3 className='text-lg font-semibold'>
            ${subscriptionPlan.price ? subscriptionPlan.price / 100 : 0} / month
          </h3>
        ) : null}
        {subscriptionPlan.stripeCurrentPeriodEnd ? (
          <p className='mb-4 text-sm text-neutral-500'>
            Your plan will{' '}
            {!subscriptionPlan.isSubscribed
              ? null
              : subscriptionPlan.isCanceled
                ? 'cancel'
                : 'renew'}
            {' on '}
            <span className='font-semibold'>
              {subscriptionPlan.stripeCurrentPeriodEnd.toLocaleDateString(
                'en-us'
              )}
            </span>
          </p>
        ) : null}
      </AccountCardBody>
      <AccountCardFooter description='Manage your subscription on Stripe.'>
        <Link href='/account/billing'>
          <button className='rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 text-sm font-medium hover:bg-neutral-100'>
            Go to billing
          </button>
        </Link>
      </AccountCardFooter>
    </AccountCard>
  );
}
