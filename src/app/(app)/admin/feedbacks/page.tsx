import { AppPageShell } from '@/app/(app)/_components/page-shell';
import type { SearchParams } from '@/lib/types/data-table';
import { getAllPaginatedFeedbacksQuery } from '@/server/actions/feedback/queries';
import { z } from 'zod';
import { FeedbacksTable } from './_components/feedbacks-table';

export const content = {
  title: 'Feedback List',
  description: 'List of feedbacks from users, manage them here.'
};

const searchParamsSchema = z.object({
  page: z.coerce.number().default(1),
  per_page: z.coerce.number().default(10),
  sort: z.string().optional(),
  title: z.string().optional(),
  status: z.string().optional(),
  label: z.string().optional(),
  operator: z.string().optional()
});

type AdminFeedbackPageProps = {
  searchParams: SearchParams;
};

export default async function AdminFeedbackPage({
  searchParams
}: AdminFeedbackPageProps) {
  const search = searchParamsSchema.parse(searchParams);
  const feedbacksPromise = getAllPaginatedFeedbacksQuery(search);

  return (
    <AppPageShell title={content.title} description={content.description}>
      <div className='w-full'>
        <FeedbacksTable feedbacksPromise={feedbacksPromise} />
      </div>
    </AppPageShell>
  );
}
