import { protectedRoutes, siteUrls } from '@/lib/config/site';
import { env } from '@/lib/env';
import { getAbsoluteUrl } from '@/lib/utils';
import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

/**
 * Middleware function that handles various routing and authentication logic for the application.
 *
 * - Checks if the application is in maintenance mode and redirects to the maintenance page if so, except for admin and auth paths.
 * - Checks if the application is in waitlist mode and redirects to the waitlist page if so, except for admin and auth paths.
 * - Checks if the requested path is a protected route and handles authentication:
 *   - If the user is authenticated, redirects to the dashboard if the path is an auth path.
 *   - If the user is not authenticated, redirects to the login page if the path is not an auth path.
 *   - If the path is an admin path and the user is not an admin or super admin, redirects to the dashboard.
 * - If the requested path is not a protected route, it is allowed to proceed.
 *
 * @param {NextRequest} request - The incoming Next.js request object.
 * @returns {NextResponse} - The Next.js response object, which may be a redirect or the next middleware.
 */
export async function middleware(request: NextRequest) {
  const isAdminPath = request.nextUrl.pathname.startsWith('/admin');
  const maintenanceMode = env.NEXT_PUBLIC_MAINTENANCE_MODE === 'on'; // check if application setting is on or off
  const waitlistMode = env.NEXT_PUBLIC_WAITLIST_MODE === 'on';
  const isMaintenancePath = request.nextUrl.pathname.startsWith('/maintenance');
  const isAuthPath = request.nextUrl.pathname.startsWith('/auth');
  const isWaitlistPath = request.nextUrl.pathname.startsWith('/waitlist');

  if (maintenanceMode && !isMaintenancePath && !isAdminPath && !isAuthPath) {
    return NextResponse.redirect(getAbsoluteUrl(siteUrls.maintenance));
  }

  if (waitlistMode && !isWaitlistPath && !isAdminPath && !isAuthPath) {
    return NextResponse.redirect(getAbsoluteUrl(siteUrls.waitlist));
  }

  if (!protectedRoutes.includes(request.nextUrl.pathname))
    return NextResponse.next();

  // if path is public route than do nothing
  const session = await getToken({ req: request });
  const isAdmin = session?.role === 'Admin' || session?.role === 'Super Admin'; // if path name start from admin, and session role is not admin or super admin redirect to dashboard
  // if path name starts from /auth, and session is there redirect to dashboard
  if (session && isAuthPath) {
    return NextResponse.redirect(getAbsoluteUrl(siteUrls.dashboard.home));
  }
  // if path name does not start from /auth, and session is not there redirect to login
  if (!session && !isAuthPath) {
    return NextResponse.redirect(getAbsoluteUrl(siteUrls.auth.login));
  }

  if (session && isAdminPath && !isAdmin) {
    return NextResponse.redirect(getAbsoluteUrl(siteUrls.dashboard.home));
  }
}

export const config = {
  matcher: [
    '/((?!api|assets|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'
  ]
};
