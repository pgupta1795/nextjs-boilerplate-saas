import { content } from '@/app/(app)/(user)/org/settings/page';
import { AppPageLoading } from '@/app/(app)/_components/page-loading';
import { Skeleton } from '@/components/ui/skeleton';

export default function OrgSettingsLoading() {
  return (
    <AppPageLoading title={content.title} description={content.description}>
      <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2'>
        <Skeleton className='h-60 w-full' />
        <Skeleton className='h-60 w-full' />
        <Skeleton className='h-60 w-full' />
      </div>
    </AppPageLoading>
  );
}
