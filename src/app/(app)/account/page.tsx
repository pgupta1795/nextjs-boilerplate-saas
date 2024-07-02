import { checkAuth, getUserAuth } from '@/lib/auth/utils';
import { getUserSubscriptionPlan } from '@/lib/stripe/subscription';
import PlanSettings from './PlanSettings';
import UserSettings from './UserSettings';

export default async function Account() {
  await checkAuth();
  const { session } = await getUserAuth();
  const subscriptionPlan = await getUserSubscriptionPlan();

  return (
    <main>
      <h1 className='my-4 text-2xl'>Account</h1>
      <div className='space-y-4'>
        <PlanSettings
          subscriptionPlan={subscriptionPlan}
          user={session?.user || { id: '', email: '', name: '' }}
        />
        <UserSettings session={session} />
      </div>
    </main>
  );
}
