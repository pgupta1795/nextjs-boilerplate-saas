import { content } from '@/app/(app)/(user)/org/billing/page';
import { AppPageLoading } from '@/app/(app)/_components/page-loading';
import { Skeleton } from '@/components/ui/skeleton';

export default function OrgBillingLoading() {
  return (
    <AppPageLoading title={content.title} description={content.description}>
      <div className='grid gap-5'>
        <Skeleton className='h-48 w-full' />
        <Skeleton className='h-96 w-full' />
      </div>
    </AppPageLoading>
  );
}
