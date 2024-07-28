import { OrgRequests } from '@/app/(app)/(user)/org/members/invite/_components/org-requests';
import { ShareInviteLink } from '@/app/(app)/(user)/org/members/invite/_components/share-invite-link';
import { AppPageShell } from '@/app/(app)/_components/page-shell';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { env } from '@/lib/env';
import {
  getOrgRequestsQuery,
  getOrganizations
} from '@/server/actions/organization/queries';
import { SendInviteLink } from './_components/send-invite-link';

const content = {
  title: 'Invite Members',
  description:
    'Invite members to your organization here! Manage requests and more!',
  shareLinkTitle: 'Share the link to invite',
  shareLinkDescription:
    'Invite a new member to your organization by sharing the link below.',
  sendInviteTitle: 'Send invite link',
  sendInviteDescription: 'Send an invite link to a new member.'
};

export default async function OrgMemberInvite() {
  const { currentOrg } = await getOrganizations();
  const inviteLink = `${env.NEXTAUTH_URL}/invite/org/${currentOrg.id}`;
  const requests = await getOrgRequestsQuery();

  return (
    <AppPageShell title={content.title} description={content.description}>
      <div className='w-full space-y-5'>
        <Card>
          <CardHeader>
            <CardTitle>{content.shareLinkTitle}</CardTitle>
            <CardDescription>{content.shareLinkDescription}</CardDescription>
          </CardHeader>
          <CardContent>
            <ShareInviteLink inviteLink={inviteLink} />
            <Separator className='my-4' />
            <OrgRequests requests={requests} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>{content.sendInviteTitle}</CardTitle>
            <CardDescription>{content.sendInviteDescription}</CardDescription>
          </CardHeader>
          <CardContent>
            <SendInviteLink inviteLink={inviteLink} orgName={currentOrg.name} />
          </CardContent>
        </Card>
      </div>
    </AppPageShell>
  );
}
