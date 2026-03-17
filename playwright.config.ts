import { defineConfig } from '@playwright/test';
import { ENV } from './config/env';

export default defineConfig({
  use: {
    baseURL: ENV.baseURL,
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },
  retries: 1,
});