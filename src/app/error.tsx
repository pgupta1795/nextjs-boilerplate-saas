'use client'; // Error components must be Client Components

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Error({
  error
  // reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className='absolute left-1/2 top-1/2 mb-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center'>
      <span className='bg-gradient-to-b from-foreground to-transparent bg-clip-text text-[10rem] font-extrabold leading-none text-transparent'>
        500
      </span>
      <h2 className='font-heading my-2 text-2xl font-bold'>
        Something&apos;s wrong
      </h2>
      <p>{error.message}</p>
      <div className='mt-8 flex justify-center gap-2'>
        <Button onClick={() => router.back()} variant='default' size='lg'>
          Go back
        </Button>
        <Button
          onClick={() => router.push('/dashboard')}
          variant='ghost'
          size='lg'
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
}
