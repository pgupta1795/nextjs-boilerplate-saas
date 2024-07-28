import { env } from '@/lib/env.js';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/server/db/schema.ts',
  // out: "./drizzle",
  dbCredentials: {
    url: env.DATABASE_URL
  },
  tablesFilter: ['somvarsha-saas-starterkit_*']
});
