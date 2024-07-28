/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
'use client';

import { ColumnDropdown } from '@/app/(app)/(user)/org/members/_components/column-dropdown';
import { Badge } from '@/components/ui/badge';
import { type membersToOrganizations } from '@/server/db/schema';
import { type ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';

export type MembersData = {
  id: string;
  name: string | null;
  email: string;
  memberId: string;
  role: typeof membersToOrganizations.$inferSelect.role;
  createdAt: Date;
};

export function getColumns(): ColumnDef<MembersData>[] {
  return columns;
}

export const columns: ColumnDef<MembersData>[] = [
  {
    accessorKey: 'name',
    header: () => <span className='pl-2'>Name</span>,
    cell: ({ row }) => {
      console.log(row.original);
      if (row.original.name)
        return <span className='pl-2 font-medium'>{row.original.name}</span>;
      return <span className='pl-2 text-muted-foreground'>No name</span>;
    }
  },
  {
    accessorKey: 'email',
    header: 'Email'
  },
  {
    accessorKey: 'role',
    header: 'Role',
    cell: ({ row }) => (
      <Badge variant='secondary' className='capitalize'>
        {row.original.role}
      </Badge>
    ),
    filterFn: (row, id, value) => !!value.includes(row.getValue(id))
  },
  {
    accessorKey: 'createdAt',
    header: 'Created At',
    cell: ({ row }) => (
      <span className='text-muted-foreground'>
        {format(new Date(row.original.createdAt), 'PP')}
      </span>
    )
  },
  {
    id: 'actions',
    cell: ({ row }) => <ColumnDropdown {...row.original} />
  }
];
