import { AppPageLoading } from '@/app/(app)/_components/page-loading';
import { content } from '@/app/(app)/admin/dashboard/page';
import { Skeleton } from '@/components/ui/skeleton';

export default function AdminFeedbackPageLoading() {
  return (
    <AppPageLoading title={content.title} description={content.description}>
      <Skeleton className='h-96 w-full' />
    </AppPageLoading>
  );
}
