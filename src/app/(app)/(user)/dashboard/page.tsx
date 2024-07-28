import { AppPageShell } from '@/app/(app)/_components/page-shell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ActivityIcon,
  CreditCardIcon,
  DollarSignIcon,
  Users2Icon
} from 'lucide-react';

export const content = {
  title: 'Dashboard',
  description: 'Manage your stats of your organization here!',
  cards: {
    totalRevenue: {
      title: 'Total Revenue',
      amount: '$45,231.89',
      change: '+20.1% from last month'
    },
    subscriptions: {
      title: 'Subscriptions',
      count: '+3402',
      change: '+20.1% from last month'
    },
    activeNow: {
      title: 'Active Now',
      count: '+304',
      change: '+20.1% from last month'
    },
    sales: {
      title: 'Sales',
      count: '+102304',
      change: '+20.1% from last month'
    }
  },
  placeholder: {
    content: 'Your Content here, Above is a dummy data'
  }
};

export default function DashboardPage() {
  return (
    <AppPageShell title={content.title} description={content.description}>
      <div className='grid gap-6'>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4'>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                {content.cards.totalRevenue.title}
              </CardTitle>
              <DollarSignIcon className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>
                {content.cards.totalRevenue.amount}
              </div>
              <p className='text-xs text-muted-foreground'>
                {content.cards.totalRevenue.change}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                {content.cards.subscriptions.title}
              </CardTitle>
              <Users2Icon className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>
                {content.cards.subscriptions.count}
              </div>
              <p className='text-xs text-muted-foreground'>
                {content.cards.subscriptions.change}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                {content.cards.activeNow.title}
              </CardTitle>
              <ActivityIcon className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>
                {content.cards.activeNow.count}
              </div>
              <p className='text-xs text-muted-foreground'>
                {content.cards.activeNow.change}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                {content.cards.sales.title}
              </CardTitle>
              <CreditCardIcon className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>
                {content.cards.sales.count}
              </div>
              <p className='text-xs text-muted-foreground'>
                {content.cards.sales.change}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className='flex min-h-44 w-full items-center justify-center rounded-md border-2 border-dashed border-border p-4'>
          <p className='text-sm text-muted-foreground'>
            {content.placeholder.content}
          </p>
        </div>
      </div>
    </AppPageShell>
  );
}
