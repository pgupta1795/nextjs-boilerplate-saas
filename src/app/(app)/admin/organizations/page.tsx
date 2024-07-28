import { AppPageShell } from '@/app/(app)/_components/page-shell';
import { OrgsTable } from '@/app/(app)/admin/organizations/_components/orgs-table';
import type { SearchParams } from '@/lib/types/data-table';
import { getPaginatedOrgsQuery } from '@/server/actions/organization/queries';
import { z } from 'zod';

export const content = {
  title: 'Organizations',
  description: 'View all organizations in your app.'
};

type UsersPageProps = {
  searchParams: SearchParams;
};

const searchParamsSchema = z.object({
  page: z.coerce.number().default(1),
  per_page: z.coerce.number().default(10),
  sort: z.string().optional(),
  email: z.string().optional(),
  name: z.string().optional(),
  operator: z.string().optional()
});

const AdminOrganizationsPage = async ({ searchParams }: UsersPageProps) => {
  const search = searchParamsSchema.parse(searchParams);
  const orgsPromise = getPaginatedOrgsQuery(search);

  return (
    <AppPageShell title={content.title} description={content.description}>
      <div className='w-full'>
        <OrgsTable orgsPromise={orgsPromise} />
      </div>
    </AppPageShell>
  );
};

export default AdminOrganizationsPage;
