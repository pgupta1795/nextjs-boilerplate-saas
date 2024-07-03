import { checkAuth, getUserAuth } from '@/lib/auth/utils';
import UpdateEmailCard from './UpdateEmailCard';
import UpdateNameCard from './UpdateNameCard';

export default async function Account() {
  await checkAuth();
  const { session } = await getUserAuth();

  return (
    <main>
      <h1 className='my-4 text-2xl'>Account</h1>
      <div className='space-y-4'>
        {/* Place holder for setting up billing info */}
        <UpdateNameCard name={session?.user.name ?? ''} />
        <UpdateEmailCard email={session?.user.email ?? ''} />
      </div>
    </main>
  );
}
