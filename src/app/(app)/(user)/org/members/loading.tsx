import { content } from '@/app/(app)/(user)/org/members/page';
import { AppPageLoading } from '@/app/(app)/_components/page-loading';
import { Skeleton } from '@/components/ui/skeleton';

export default function OrgMembersLoading() {
  return (
    <AppPageLoading title={content.title} description={content.description}>
      <Skeleton className='h-96 w-full' />
    </AppPageLoading>
  );
}
