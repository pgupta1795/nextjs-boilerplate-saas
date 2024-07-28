import {AppPageLoading} from '@/app/(app)/_components/page-loading';
import {Skeleton} from '@/components/ui/skeleton';
import {content} from './page';

export default function WaitlistPageLoading() {
  return (
    <AppPageLoading title={content.title} description={content.description}>
      <Skeleton className='h-96 w-full' />
    </AppPageLoading>
  );
}
