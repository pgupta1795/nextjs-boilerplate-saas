import { ManageUserSubscriptionButton } from './ManageSubscription';
import { storeSubscriptionPlans } from '@/config/subscriptions';
import { checkAuth, getUserAuth } from '@/lib/auth/utils';
import { getUserSubscriptionPlan } from '@/lib/stripe/subscription';
import { CheckCircle2Icon } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function Billing() {
  await checkAuth();
  const { session } = await getUserAuth();
  const subscriptionPlan = await getUserSubscriptionPlan();

  if (!session) return redirect('/');

  return (
    <div className='min-h-[calc(100vh-57px)]'>
      <Link href='/account-no-shad'>
        <button className='focus-visible focus-visible mb-2 inline-flex items-center justify-center rounded-md px-0 text-sm font-medium underline-offset-2 outline-none ring-offset-background transition-colors hover:underline'>
          Back
        </button>
      </Link>
      <h1 className='mb-4 text-3xl font-semibold'>Billing</h1>
      <div className='mb-2 rounded-lg border bg-white p-6 shadow-sm'>
        <h3 className='text-xs font-bold uppercase text-neutral-500'>
          Subscription Details
        </h3>
        <p className='my-2 text-lg font-semibold leading-none'>
          {subscriptionPlan.name}
        </p>
        <p className='text-sm text-neutral-500'>
          {!subscriptionPlan.isSubscribed
            ? 'You are not subscribed to any plan.'
            : subscriptionPlan.isCanceled
              ? 'Your plan will be canceled on '
              : 'Your plan renews on '}
          {subscriptionPlan?.stripeCurrentPeriodEnd
            ? subscriptionPlan.stripeCurrentPeriodEnd.toLocaleDateString()
            : null}
        </p>
      </div>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
        {storeSubscriptionPlans.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-lg border bg-white text-neutral-900 shadow-sm ${
              plan.name === subscriptionPlan.name
                ? 'border-neutral-900'
                : 'border-neutral-300'
            }`}
          >
            {plan.name === subscriptionPlan.name ? (
              <div className='relative w-full'>
                <div className='absolute right-0 w-fit rounded-l-lg rounded-t-none bg-neutral-900 px-3 py-1 text-center text-xs font-semibold text-neutral-100'>
                  Current Plan
                </div>
              </div>
            ) : null}
            <div id='header' className='mt-2 flex flex-col space-y-1.5 p-6'>
              <div className='text-2xl font-semibold leading-none tracking-tight'>
                {plan.name}
              </div>
              <div id='description' className='text-sm text-neutral-500'>
                {plan.description}
              </div>
            </div>
            <div id='card-content' className='p-6 pt-0'>
              <div className='mb-8 mt-2'>
                <h3 className='font-bold'>
                  <span className='text-3xl'>${plan.price / 100}</span> / month
                </h3>
              </div>
              <ul className='space-y-2'>
                {plan.features.map((feature, i) => (
                  <li key={`feature_${i + 1}`} className='flex gap-x-2 text-sm'>
                    <CheckCircle2Icon className='h-5 w-5 text-green-400' />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              id='card-footer'
              className='flex items-end justify-center p-6 pt-0'
            >
              {session?.user.email ? (
                <ManageUserSubscriptionButton
                  userId={session.user.id}
                  email={session.user.email || ''}
                  stripePriceId={plan.stripePriceId}
                  stripeCustomerId={subscriptionPlan?.stripeCustomerId}
                  isSubscribed={!!subscriptionPlan.isSubscribed}
                  isCurrentPlan={subscriptionPlan?.name === plan.name}
                />
              ) : (
                <div>
                  <Link href='/account'>
                    <button className='w-full rounded-md px-3.5 py-2.5 text-center text-sm font-medium hover:bg-neutral-100'>
                      Add Email to Subscribe
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
