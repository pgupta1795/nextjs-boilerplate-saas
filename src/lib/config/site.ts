export const siteConfig = {
  name: 'Somvarsha',
  description:
    'Get your startup off the ground quickly with RapidLaunch! This open source Next.js starter kit provides the foundation you need to build your MVP fast – pre-built components, optimized performance, and ready-to-go styling',
  orgImage: 'https://utfs.io/f/4ae0ddb1-4260-46f5-aa7c-70408cc192b9-aadavt.png',
  contactEmail: 'pgupta1795@gmail.com',
  noReplyEmail: 'noreply@support.pgupta1795.com',
  locale: 'en-US'
} as const;

export const siteUrls = {
  publicUrl: 'https://pgupta1795.in',
  github: 'https://github.com/pgupta1795/pgupta1795.in',
  home: '/',
  pricing: '/pricing',
  features: '/features',
  support: '/support',
  blogs: '/blogs',
  docs: '/docs',
  changelogs: '/changelogs',
  maintenance: '/maintenance',
  waitlist: '/waitlist',
  dashboard: {
    home: '/dashboard'
  },
  feedback: '/feedback',
  organization: {
    members: {
      home: '/org/members',
      invite: '/org/members/invite'
    },
    settings: '/org/settings',
    plansAndBilling: '/org/billing'
  },
  auth: {
    login: '/auth/login',
    signup: '/auth/signup'
  },
  admin: {
    dashboard: '/admin/dashboard',
    users: '/admin/users',
    organizations: '/admin/organizations',
    settings: '/admin/settings',
    waitlist: '/admin/waitlist',
    feedbacks: '/admin/feedbacks',
    analytics: 'https://us.posthog.com/project/12312/dashboard'
  },
  profile: {
    settings: '/profile/settings',
    billing: '/profile/billing'
  }
} as const;

export const publicRoutes: string[] = [
  siteUrls.publicUrl,
  siteUrls.home,
  siteUrls.pricing,
  siteUrls.features,
  siteUrls.support,
  siteUrls.blogs,
  siteUrls.docs,
  siteUrls.changelogs,
  siteUrls.maintenance,
  siteUrls.waitlist
];

export const protectedRoutes: string[] = [
  siteUrls.dashboard.home,
  siteUrls.feedback,
  siteUrls.organization.members.home,
  siteUrls.organization.members.invite,
  siteUrls.organization.settings,
  siteUrls.organization.plansAndBilling,
  siteUrls.auth.login,
  siteUrls.auth.signup,
  siteUrls.admin.dashboard,
  siteUrls.admin.users,
  siteUrls.admin.organizations,
  siteUrls.admin.settings,
  siteUrls.admin.waitlist,
  siteUrls.admin.feedbacks,
  siteUrls.admin.analytics,
  siteUrls.profile.settings,
  siteUrls.profile.billing
];
