'use client';

import { LineChart } from '@/components/charts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { thousandToK } from '@/lib/utils';

type ReusableChartProps = {
  title: string;
  description: string;
  data: Record<string, unknown>[];
  xAxisDataKey: string;
  yAxisDataKey: string;
  lineDataKeys: string[];
};

export default function ReusableChart({
  title,
  description,
  data,
  xAxisDataKey,
  yAxisDataKey,
  lineDataKeys
}: ReusableChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <LineChart
          data={data}
          xAxisDataKey={xAxisDataKey}
          yAxisDataKey={yAxisDataKey}
          lineDataKeys={lineDataKeys}
          lineProps={[{ stroke: 'hsl(var(--primary))' }]}
          yAxisProps={{
            tickFormatter: (value) => {
              if (value < 10000) return `${value}`;
              return `${thousandToK(Number(value)).toFixed(1)}k`;
            }
          }}
        />
      </CardContent>
    </Card>
  );
}
