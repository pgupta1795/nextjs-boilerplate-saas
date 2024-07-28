import { env } from '@/lib/env';
import { ourFileRouter } from '@/server/uploadthing/core';
import { createRouteHandler } from 'uploadthing/next';

export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
  config: {
    uploadthingSecret: env.UPLOADTHING_SECRET,
    uploadthingId: env.UPLOADTHING_ID
  }
});
