'use client';

import { DataTable } from '@/app/(app)/_components/data-table';
import { useDataTable } from '@/lib/hooks/use-data-table';
import type {
  DataTableFilterableColumn,
  DataTableSearchableColumn
} from '@/lib/types/data-table';
import { type getPaginatedUsersQuery } from '@/server/actions/user/queries';
import { usersRoleEnum } from '@/server/db/schema';
import { type ColumnDef } from '@tanstack/react-table';
import React, { useMemo } from 'react';
import { getColumns, type UsersData } from './columns';

const filterableColumns: DataTableFilterableColumn<UsersData>[] = [
  {
    id: 'role',
    title: 'Role',
    options: usersRoleEnum.enumValues.map((v) => ({
      label: v,
      value: v
    }))
  }
];

type UsersTableProps = {
  usersPromise: ReturnType<typeof getPaginatedUsersQuery>;
};

const searchableColumns: DataTableSearchableColumn<UsersData>[] = [
  { id: 'email', placeholder: 'Search email...' }
];

export function UsersTable({ usersPromise }: UsersTableProps) {
  const { data, pageCount, total } = React.use(usersPromise);
  const columns = useMemo<ColumnDef<UsersData, unknown>[]>(
    () => getColumns(),
    []
  );

  const usersData: UsersData[] = data.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    status: user.emailVerified ? 'verified' : 'unverified',
    createdAt: user.createdAt
  }));

  const { table } = useDataTable({
    data: usersData,
    columns,
    pageCount,
    searchableColumns,
    filterableColumns
  });

  return (
    <DataTable
      table={table}
      columns={columns}
      filterableColumns={filterableColumns}
      searchableColumns={searchableColumns}
      totalRows={total}
    />
  );
}
