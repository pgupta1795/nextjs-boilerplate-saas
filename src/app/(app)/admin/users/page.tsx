import { AppPageShell } from '@/app/(app)/_components/page-shell';
import type { SearchParams } from '@/lib/types/data-table';
import { getPaginatedUsersQuery } from '@/server/actions/user/queries';
import { z } from 'zod';
import { UsersTable } from './_components/users-table';

export const content = {
  title: 'Users',
  description:
    'View all users in your app. Perform actions such as creating new users, sending users login links, and more!'
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

export default async function UsersPage({ searchParams }: UsersPageProps) {
  const search = searchParamsSchema.parse(searchParams);
  const usersPromise = getPaginatedUsersQuery(search);

  return (
    <AppPageShell title={content.title} description={content.description}>
      <div className='w-full'>
        <UsersTable usersPromise={usersPromise} />
      </div>
    </AppPageShell>
  );
}
