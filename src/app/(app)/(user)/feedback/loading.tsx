import { content } from '@/app/(app)/(user)/feedback/page';
import { AppPageLoading } from '@/app/(app)/_components/page-loading';
import { Skeleton } from '@/components/ui/skeleton';

export default function UserFeedbackPageLoading() {
  return (
    <AppPageLoading title={content.title} description={content.description}>
      <Skeleton className='h-96 w-full' />
    </AppPageLoading>
  );
}
