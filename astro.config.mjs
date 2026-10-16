// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import { basePathIntegration, deploymentBase } from './scripts/base-path.mjs';

const base = deploymentBase;

// https://astro.build/config
export default defineConfig({
  output: 'static',
  base,
  integrations: [basePathIntegration(base)],
  vite: {
    plugins: [tailwindcss()]
  }
});