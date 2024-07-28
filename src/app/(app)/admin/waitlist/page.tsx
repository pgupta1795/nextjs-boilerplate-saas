import { AppPageShell } from '@/app/(app)/_components/page-shell';
import { DownloadCsvBtn } from '@/app/(app)/admin/waitlist/_components/download-csv-btn';
import { WaitlistTable } from '@/app/(app)/admin/waitlist/_components/waitlist-table';
import type { SearchParams } from '@/lib/types/data-table';
import {
  getAllWaitlistUsersQuery,
  getPaginatedWaitlistQuery
} from '@/server/actions/waitlist/query';
import json2csv from 'json2csv';
import { z } from 'zod';

type WaitlistProps = {
  searchParams: SearchParams;
};

export const content = {
  title: 'Waitlist',
  description: 'A list of users who are waiting to be approved for the service.'
};

const searchParamsSchema = z.object({
  page: z.coerce.number().default(1),
  per_page: z.coerce.number().default(10),
  sort: z.string().optional(),
  email: z.string().optional(),
  operator: z.string().optional()
});

export default async function Waitlist({ searchParams }: WaitlistProps) {
  const search = searchParamsSchema.parse(searchParams);
  const waitlistPromise = getPaginatedWaitlistQuery(search);
  const waitlistData = await getAllWaitlistUsersQuery();
  const csvData = await json2csv.parseAsync(waitlistData);

  return (
    <AppPageShell title={content.title} description={content.description}>
      <div className='w-full space-y-6'>
        <div className='flex items-center justify-end'>
          <DownloadCsvBtn data={csvData} />
        </div>
        <WaitlistTable waitlistPromise={waitlistPromise} />
      </div>
    </AppPageShell>
  );
}
