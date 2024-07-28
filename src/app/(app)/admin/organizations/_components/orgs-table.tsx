'use client';

import { DataTable } from '@/app/(app)/_components/data-table';
import { useDataTable } from '@/lib/hooks/use-data-table';
import type { DataTableSearchableColumn } from '@/lib/types/data-table';
import { type getPaginatedOrgsQuery } from '@/server/actions/organization/queries';
import { type ColumnDef } from '@tanstack/react-table';
import React, { useMemo } from 'react';
import { getColumns, type OrganizationsData } from './columns';

type Props = {
  orgsPromise: ReturnType<typeof getPaginatedOrgsQuery>;
};

const searchableColumns: DataTableSearchableColumn<OrganizationsData>[] = [
  { id: 'email', placeholder: 'Search email...' }
];

export const OrgsTable = ({ orgsPromise }: Props) => {
  const { data, pageCount, total } = React.use(orgsPromise);
  const columns = useMemo<ColumnDef<OrganizationsData, unknown>[]>(
    () => getColumns(),
    []
  );

  const organizationsData: OrganizationsData[] = data.map((org) => ({
    id: org.id,
    name: org.name,
    email: org.email,
    createdAt: org.createdAt,
    image: org.image,
    members: org.members.map((mto) => ({
      id: mto.id,
      name: mto.name,
      email: mto.email,
      image: mto.image,
      role: mto.role
    })),
    owner: {
      id: org.ownerId,
      name: org.owner.name,
      email: org.owner.email,
      image: org.owner.image
    },
    subscribed: org.subscriptions?.id ? true : false
  }));

  const { table } = useDataTable({
    data: organizationsData,
    columns,
    pageCount,
    searchableColumns
  });

  return (
    <DataTable
      table={table}
      columns={columns}
      searchableColumns={searchableColumns}
      totalRows={total}
    />
  );
};
