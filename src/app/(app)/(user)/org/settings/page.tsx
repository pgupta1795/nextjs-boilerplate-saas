import DeleteYourOrgForm from '@/app/(app)/(user)/org/settings/_components/org-delete-form';
import OrgImageForm from '@/app/(app)/(user)/org/settings/_components/org-image-form';
import OrgNameForm from '@/app/(app)/(user)/org/settings/_components/org-name-form';
import { AppPageShell } from '@/app/(app)/_components/page-shell';
import { getOrganizations } from '@/server/actions/organization/queries';

export const content = {
  title: 'Organization Settings',
  description:
    'Manage your organization settings here, such as organization name, logo, and more!'
};

export default async function OrgSettingsPage() {
  const { currentOrg, userOrgs } = await getOrganizations();

  return (
    <AppPageShell title={content.title} description={content.description}>
      <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2'>
        <OrgImageForm currentOrg={currentOrg} />
        <OrgNameForm currentOrg={currentOrg} key={currentOrg.id} />
        <DeleteYourOrgForm fallbackOrgId={userOrgs[0]!.id} />
      </div>
    </AppPageShell>
  );
}
