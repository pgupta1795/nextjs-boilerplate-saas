import { AppPageShell } from '@/app/(app)/_components/page-shell';
import UserSettings from '@/components/landing-pages/user';

export const content = {
  title: 'Profile Settings',
  description:
    'Here you can manage all the settings related to your profile, such as your name, profile picture, and more!'
};

/**
 * This is the settings page for the user profile.
 * @add more settings related components here
 */
export default function SettingsPage() {
  return (
    <AppPageShell title={content.title} description={content.description}>
      <UserSettings />
    </AppPageShell>
  );
}
