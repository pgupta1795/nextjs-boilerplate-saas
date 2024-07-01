'use client';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function SignIn() {
  const { data: session, status } = useSession();

  if (status === 'loading') return <div>Loading...</div>;

  if (session) {
    return (
      <div className='space-y-3'>
        <p>
          Signed in as{' '}
          <span className='font-medium'>{session.user?.email}</span>
        </p>
        <button
          onClick={() => signOut({ callbackUrl: '/' })}
          className='rounded-md bg-red-500 px-3.5 py-2.5 text-sm text-white hover:opacity-80'
        >
          Sign out
        </button>
      </div>
    );
  }
  return (
    <div className='space-y-3'>
      <p>Not signed in </p>
      <button
        onClick={() => signIn()}
        className='rounded-md bg-neutral-900 px-3.5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90'
      >
        Sign in
      </button>
    </div>
  );
}
