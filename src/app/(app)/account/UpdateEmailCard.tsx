'use client';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

export default function UpdateEmailCard({ email }: { email: string }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const form = new FormData(target);
    const { email } = Object.fromEntries(form.entries()) as { email: string };

    startTransition(async () => {
      const res = await fetch('/api/account', {
        method: 'PUT',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' }
      });
      if (res.status === 200) alert('Successfully updated email!');
      router.refresh();
    });
  };

  return (
    <div>
      <h1 className='prose prose-2xl'>
        Please enter the email address you want to use with your account.
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          defaultValue={email ?? ''}
          name='email'
          disabled={true}
          className='block w-full rounded-md border border-neutral-200 px-3 py-2 text-sm focus:outline-neutral-700'
        />
        <button
          disabled={true}
          className={`rounded-md bg-neutral-900 px-3.5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50`}
        >
          Update Email
        </button>
      </form>
    </div>
  );
}
