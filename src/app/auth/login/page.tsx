import AuthForm from '@/components/landing-pages/forms/auth-form-template';
import { siteConfig } from '@/lib/config/site';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
  description: `Login to ${siteConfig.name} to get started building your next project.`
};

export default function Login() {
  return <AuthForm type='login' />;
}
