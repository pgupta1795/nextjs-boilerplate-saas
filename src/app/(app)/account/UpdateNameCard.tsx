'use client';
import { AccountCard, AccountCardFooter, AccountCardBody } from './AccountCard';
import { useTransition } from 'react';
import { useRouter } from 'next/navigation';

export default function UpdateNameCard({ name }: { name: string }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const form = new FormData(target);
    const { name } = Object.fromEntries(form.entries()) as { name: string };

    startTransition(async () => {
      const res = await fetch('/api/account', {
        method: 'PUT',
        body: JSON.stringify({ name }),
        headers: { 'Content-Type': 'application/json' }
      });
      if (res.status === 200) alert('Successfully updated name!');
      router.refresh();
    });
  };

  return (
    <AccountCard
      params={{
        header: 'Your Name',
        description:
          'Please enter your full name, or a display name you are comfortable with.'
      }}
    >
      <form onSubmit={handleSubmit}>
        <AccountCardBody>
          <input
            defaultValue={name ?? ''}
            name='name'
            disabled={true}
            className='block w-full rounded-md border border-neutral-200 px-3 py-2 text-sm focus:outline-neutral-700'
          />
        </AccountCardBody>
        <AccountCardFooter description='64 characters maximum'>
          <button
            className={`rounded-md bg-neutral-900 px-3.5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50`}
            disabled={true}
          >
            Update Name
          </button>
        </AccountCardFooter>
      </form>
    </AccountCard>
  );
}
