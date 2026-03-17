import { defineConfig } from '@playwright/test';
import { ENV } from './config/env';

export default defineConfig({
  use: {
    baseURL: ENV.baseURL,
    headless: true,
    screenshot: 'only-on-failure',
    storageState: 'storageState.json',
    trace: 'on-first-retry',
  },
  retries: 1,
});