import { Sidebar, SidebarLoading } from '@/app/(app)/_components/sidebar';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';
import { Suspense } from 'react';

type AppLayoutProps = {
  children: React.ReactNode;
  sideNavRemoveIds?: string[];
  sideNavIncludedIds?: string[];
  showOrgSwitcher?: boolean;
};

/**
 * @purpose The app shell component contain sidebar nav info and the main content of the app
 * to add a new component in app shell and use it in the `AppShell` component it will apply to all the app pages
 *
 * @param children the main content of the app
 * @param sideNavIncludedIds the ids of the sidebar nav items to include in the sidebar specifically @get ids from the sidebar config
 * @param sideNavRemoveIds the ids of the sidebar nav items to remove from the sidebar specifically @get ids from the sidebar config
 *
 */
export function AppLayoutShell({
  children,
  sideNavIncludedIds,
  sideNavRemoveIds,
  showOrgSwitcher
}: AppLayoutProps) {
  return (
    <div className='container flex items-start gap-8'>
      <div className='sticky left-0 top-0 hidden h-screen w-52 flex-shrink-0 lg:block xl:w-60 '>
        <Suspense fallback={<SidebarLoading />}>
          <Sidebar
            sidebarNavIncludeIds={sideNavIncludedIds}
            sidebarNavRemoveIds={sideNavRemoveIds}
            showOrgSwitcher={showOrgSwitcher}
          />
        </Suspense>
      </div>
      <section className='min-h-screen w-full flex-grow'>
        <div className='sticky left-0 right-0 top-0 z-50 block border-b border-border bg-background lg:hidden'>
          <header className='flex h-14 items-center gap-4'>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant='outline' size='icon'>
                  <MenuIcon className='h-4 w-4' />
                  <p className='sr-only'>Open menu</p>
                </Button>
              </SheetTrigger>
              <SheetContent side='left' className='px-3 pb-20 pt-10'>
                <Sidebar
                  showLogo={false}
                  showOrgSwitcher={showOrgSwitcher}
                  sidebarNavIncludeIds={sideNavIncludedIds}
                  sidebarNavRemoveIds={sideNavRemoveIds}
                />
              </SheetContent>
            </Sheet>
            <Icons.logo hideTextOnMobile={false} />
          </header>
        </div>
        {children}
      </section>
    </div>
  );
}
