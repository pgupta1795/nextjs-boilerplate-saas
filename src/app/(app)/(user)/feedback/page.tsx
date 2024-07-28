import { CreateFeedbackForm } from '@/app/(app)/(user)/feedback/_components/create-feedback-form';
import { FeedbackDropdown } from '@/app/(app)/(user)/feedback/_components/feedback-dropdown';
import { AppPageShell } from '@/app/(app)/_components/page-shell';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle
} from '@/components/ui/card';
import { getUserFeedbacksQuery } from '@/server/actions/feedback/queries';
import { format } from 'date-fns';
import Balancer from 'react-wrap-balancer';

export const content = {
  title: 'Feedbacks',
  description:
    'Manage your feedbacks and suggestions, create new ones, and more.',
  feedbacksCreated: 'feedbacks you have created.',
  noFeedback: 'No feedbacks found.',
  createdFeedbackStatement:
    'Create a feedback using the form above, your feedback is important to us. 🚀'
};

export default async function UserFeedbackPage() {
  const feedbacks = await getUserFeedbacksQuery();

  return (
    <AppPageShell title={content.title} description={content.description}>
      <div className='flex w-full items-start justify-between'>
        <h2 className='text-base font-medium sm:text-lg'>
          {feedbacks.length} {content.feedbacksCreated}
        </h2>
        <CreateFeedbackForm />
      </div>

      <div className='grid gap-4'>
        {feedbacks.length > 0 ? (
          feedbacks.map((feedback) => (
            <Card key={feedback.id} className='relative'>
              <FeedbackDropdown {...feedback} />
              <CardContent className='grid gap-3 p-6'>
                <CardTitle>{feedback.title}</CardTitle>
                <CardDescription>{feedback.message}</CardDescription>
                <p className='flex items-center gap-2 text-xs text-muted-foreground'>
                  {format(new Date(feedback.createdAt), 'PPP')}
                </p>
                <Badge variant='background' className='w-fit'>
                  {feedback.label}
                </Badge>
                <Badge
                  variant={
                    feedback.status === 'Open'
                      ? 'success'
                      : feedback.status === 'In Progress'
                        ? 'info'
                        : 'secondary'
                  }
                  className='w-fit'
                >
                  {feedback.status}
                </Badge>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className='flex w-full flex-col items-center justify-center gap-4 py-10'>
            <p className='font-medium text-muted-foreground'>
              {content.noFeedback}
            </p>
            <Balancer as='p' className='text-center text-muted-foreground'>
              {content.createdFeedbackStatement}
            </Balancer>
          </div>
        )}
      </div>
    </AppPageShell>
  );
}
