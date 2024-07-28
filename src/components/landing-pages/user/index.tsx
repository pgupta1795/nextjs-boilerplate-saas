import { UserAppearanceForm } from '@/components/landing-pages/user/user-appearance-form';
import { UserImageForm } from '@/components/landing-pages/user/user-image-form';
import { UserNameForm } from '@/components/landing-pages/user/user-name-form';
import { UserVerifyForm } from '@/components/landing-pages/user/user-verify-form';
import { getUser } from '@/server/auth';
import { type User } from 'next-auth';

const UserSettings = async () => {
  const user = await getUser();
  return (
    <div className='mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-2'>
      <UserImageForm user={user as User} />
      <UserNameForm user={user as User} />
      {user && !user.emailVerified && <UserVerifyForm user={user as User} />}
      <UserAppearanceForm />
    </div>
  );
};

export default UserSettings;
