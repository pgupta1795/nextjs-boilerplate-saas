import { CreateFirstOrgForm } from '@/app/(app)/_components/create-first-org-form';
import { NewUserSetup } from '@/app/(app)/_components/new-user-setup';
import { SwtichOrgLoading } from '@/app/(app)/_components/org-switch-loading';
import { Fragment, type ReactNode, Suspense } from 'react';

type Props = {
  children: ReactNode;
};

export default function AppLayout({ children }: Props) {
  return (
    <Fragment>
      <SwtichOrgLoading />
      {children}
      <Suspense fallback={null}>
        <NewUserSetup />
      </Suspense>
      <Suspense fallback={null}>
        <CreateFirstOrgForm />
      </Suspense>
    </Fragment>
  );
}
