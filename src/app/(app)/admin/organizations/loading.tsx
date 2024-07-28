import { AppPageLoading } from '@/app/(app)/_components/page-loading';
import { content } from '@/app/(app)/admin/organizations/page';
import { Skeleton } from '@/components/ui/skeleton';

export default function OrganizationsPageLoading() {
  return (
    <AppPageLoading title={content.title} description={content.description}>
      <Skeleton className='h-96 w-full' />
    </AppPageLoading>
  );
}
