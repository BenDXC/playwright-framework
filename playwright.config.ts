import { defineConfig } from '@playwright/test';
import { ENV } from './config/env';

export default defineConfig({
  use: {
    baseURL: ENV.baseURL,
    headless: true,
    screenshot: 'only-on-failure',
    storageState: 'config/storageState.json', 
    trace: 'retain-on-failure', 
  },
  retries: 1,
  fullyParallel: true,        
  forbidOnly: !!process.env.CI,
});