// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // The FarmIQ Thrive case study's slug changed to match the URL scheme
  // used for the other 3 go-live case studies (Sarah's call, 2026-08-10,
  // see src/data/case-studies/farmiq-thrive.ts) — this keeps the old URL
  // working for anyone who already has it saved/shared/indexed instead of
  // it just 404ing.
  redirects: {
    '/case-studies/farmiq-thrive': '/case-studies/helping-farmers-thrive',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});