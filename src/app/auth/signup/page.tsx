import AuthForm from '@/components/landing-pages/forms/auth-form-template';
import { siteConfig } from '@/lib/config/site';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Signup',
  description: `Signup to ${siteConfig.name} to get started.`
};

export default function Signup() {
  return <AuthForm type='signup' />;
}
