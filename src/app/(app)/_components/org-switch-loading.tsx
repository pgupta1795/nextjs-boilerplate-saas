'use client';
import { Icons } from '@/components/ui/icons';
import { switchOrgPendingState } from '@/lib/store';

export function SwtichOrgLoading() {
  const { isPending } = switchOrgPendingState();
  if (!isPending) return null;

  return (
    <div
      aria-label='Org Switching Loading'
      className='fixed inset-0 z-[20000] flex h-screen w-screen flex-col items-center justify-center gap-2 bg-background'
    >
      <Icons.loader className='h-7 w-7' />
      <p className='text-lg font-semibold'>Switching Org...</p>
    </div>
  );
}
