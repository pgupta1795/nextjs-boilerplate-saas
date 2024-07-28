import { AppPageShell } from '@/app/(app)/_components/page-shell';
import type { SearchParams } from '@/lib/types/data-table';
import { getPaginatedOrgMembersQuery } from '@/server/actions/organization/queries';
import { z } from 'zod';
import { MembersTable } from './_components/members-table';

export const content = {
  title: 'Org Members',
  description:
    'Manage your organization members here, such as adding, removing, and more!'
};

type UsersPageProps = {
  searchParams: SearchParams;
};

const searchParamsSchema = z.object({
  page: z.coerce.number().default(1),
  per_page: z.coerce.number().default(10),
  sort: z.string().optional(),
  email: z.string().optional(),
  status: z.string().optional(),
  role: z.string().optional(),
  operator: z.string().optional()
});

const OrgMembersPage = async ({ searchParams }: UsersPageProps) => {
  const search = searchParamsSchema.parse(searchParams);
  const membersPromise = getPaginatedOrgMembersQuery(search);

  return (
    <AppPageShell title={content.title} description={content.description}>
      <div className='w-full space-y-5'>
        <MembersTable membersPromise={membersPromise} />
      </div>
    </AppPageShell>
  );
};

export default OrgMembersPage;
