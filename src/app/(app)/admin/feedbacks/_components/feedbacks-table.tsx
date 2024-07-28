'use client';

import { DataTable } from '@/app/(app)/_components/data-table';
import { useDataTable } from '@/lib/hooks/use-data-table';
import type {
  DataTableFilterableColumn,
  DataTableSearchableColumn
} from '@/lib/types/data-table';
import { type getAllPaginatedFeedbacksQuery } from '@/server/actions/feedback/queries';
import { feedbackLabelEnum, feedbackStatusEnum } from '@/server/db/schema';
import { type ColumnDef } from '@tanstack/react-table';
import React, { useMemo } from 'react';
import { type FeedbackData, getColumns } from './columns';

const filterableColumns: DataTableFilterableColumn<FeedbackData>[] = [
  {
    id: 'status',
    title: 'Status',
    options: feedbackStatusEnum.enumValues.map((v) => ({
      label: v,
      value: v
    }))
  },
  {
    id: 'label',
    title: 'Label',
    options: feedbackLabelEnum.enumValues.map((v) => ({
      label: v,
      value: v
    }))
  }
];

type FeedbacksTableProps = {
  feedbacksPromise: ReturnType<typeof getAllPaginatedFeedbacksQuery>;
};

const searchableColumns: DataTableSearchableColumn<FeedbackData>[] = [
  { id: 'title', placeholder: 'Search title...' }
];

export function FeedbacksTable({ feedbacksPromise }: FeedbacksTableProps) {
  const { data, pageCount, total } = React.use(feedbacksPromise);
  const columns = useMemo<ColumnDef<FeedbackData, unknown>[]>(
    () => getColumns(),
    []
  );
  const { table } = useDataTable({
    data,
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
