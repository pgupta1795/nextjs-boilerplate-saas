'use client';

import { signIn } from 'next-auth/react';

const Page = () => {
  return (
    <main className='mx-auto my-4 max-w-lg rounded-lg bg-popover p-10'>
      <h1 className='text-center text-2xl font-bold'>
        Sign in to your account
      </h1>
      <div className='mt-4'>
        <button
          onClick={() => signIn(undefined, { callbackUrl: '/dashboard' })}
          className='block w-full rounded-lg bg-primary px-4 py-2 text-center font-medium text-primary-foreground hover:opacity-90'
        >
          Sign In
        </button>
      </div>
    </main>
  );
};

export default Page;
