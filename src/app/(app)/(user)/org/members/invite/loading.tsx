import { content } from '@/app/(app)/(user)/org/members/invite/page';
import { AppPageLoading } from '@/app/(app)/_components/page-loading';
import { Skeleton } from '@/components/ui/skeleton';

export default function InviteMembersLoading() {
  return (
    <AppPageLoading title={content.title} description={content.description}>
      <div className='space-y-4'>
        <Skeleton className='h-64 w-full' />
        <Skeleton className='h-36 w-full' />
      </div>
    </AppPageLoading>
  );
}
