import { AppPageShell } from '@/app/(app)/_components/page-shell';
import ReusableChart from '@/app/(app)/admin/dashboard/_components/analytics-chart';
import { StatsCard } from '@/app/(app)/admin/dashboard/_components/stats-card';
import { buttonVariants } from '@/components/ui/button';
import { siteUrls } from '@/lib/config/site';
import { cn } from '@/lib/utils';
import {
  getRevenueCount,
  getSubscriptionsCount
} from '@/server/actions/subscription/query';
import { getUsersCount } from '@/server/actions/user/queries';
import {
  DollarSignIcon,
  type LucideProps,
  UserRoundCheckIcon,
  UserRoundPlusIcon,
  Users2Icon
} from 'lucide-react';
import Link from 'next/link';
import { type ForwardRefExoticComponent, type RefAttributes } from 'react';

export const content = {
  title: 'Admin Dashboard',
  description:
    "View insights and analytics to monitor your app's performance and user behavior.",
  pageContent:
    'This a simple dashboard with Analytics, to see detailed Analytics go to ',
  postHogDashboard: 'PostHog Dashboard'
};

interface StatData {
  title: string;
  value: string | number;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
  description: string;
}

interface ChartData {
  title: string;
  description: string;
  data: unknown[];
  xAxisDataKey: string;
  yAxisDataKey: string;
}

export default async function AdminDashPage() {
  const usersCountData = await getUsersCount();
  const usersChartData = usersCountData.usersCountByMonth;
  const subscriptionsCountData = await getSubscriptionsCount({});
  const activeSubscriptionsCountData = await getSubscriptionsCount({
    status: 'active'
  });
  const subsChartData = subscriptionsCountData.subscriptionsCountByMonth;
  const revenueCountData = await getRevenueCount();
  const revenueChartData = revenueCountData.revenueCountByMonth;

  const statsContent: StatData[] = [
    {
      title: 'Users',
      value: String(usersCountData.totalCount),
      description: 'Total number of users',
      icon: Users2Icon
    },
    {
      title: 'Subscriptions',
      value: String(subscriptionsCountData.totalCount),
      description: 'Total number of subscriptions',
      icon: UserRoundPlusIcon
    },
    {
      title: 'Revenue',
      value: revenueCountData.totalRevenue,
      description: 'Total revenue',
      icon: DollarSignIcon
    },
    {
      title: 'Active Subscriptions',
      value: String(activeSubscriptionsCountData.totalCount),
      description: 'Total number of active subscriptions',
      icon: UserRoundCheckIcon
    }
  ];

  const chartContent: ChartData[] = [
    {
      title: 'Users Analytics',
      description: 'Count of users each month for last 6 months',
      data: usersChartData,
      xAxisDataKey: 'Date',
      yAxisDataKey: 'UsersCount'
    },
    {
      title: 'Subscription Analytics',
      description: 'Count of subscriptions each month for last 6 months',
      data: subsChartData,
      xAxisDataKey: 'Date',
      yAxisDataKey: 'SubsCount'
    },
    {
      title: 'Revenue Analytics',
      description: 'Count of revenue each month for last 6 months',
      data: revenueChartData,
      xAxisDataKey: 'Date',
      yAxisDataKey: 'RevenueCount'
    }
  ];

  return (
    <AppPageShell title={content.title} description={content.description}>
      <div className='grid w-full gap-8'>
        <p className='text-sm'>
          {content.pageContent}
          <Link
            href={siteUrls.admin.analytics}
            className={cn(
              buttonVariants({
                variant: 'link',
                size: 'default',
                className: 'px-0 underline'
              })
            )}
          >
            {content.postHogDashboard}
          </Link>
        </p>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          {statsContent.map((stat, index) => (
            <StatsCard
              title={stat.title}
              value={stat.value}
              Icon={stat.icon}
              subText={stat.description}
              key={index}
            />
          ))}
        </div>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          {chartContent.map((chart, index) => (
            <ReusableChart
              key={index}
              title={chart.title}
              description={chart.description}
              data={chart.data as Record<string, unknown>[]}
              xAxisDataKey={chart.xAxisDataKey}
              yAxisDataKey={chart.yAxisDataKey}
              lineDataKeys={[chart.yAxisDataKey]}
            />
          ))}
        </div>
      </div>
    </AppPageShell>
  );
}
