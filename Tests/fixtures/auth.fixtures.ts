import { test as base } from '@playwright/test';
import { LoginPage } from '../../Pages/LoginPage';
import { ENV } from '../../config/env';

export const test = base.extend({
  authToken: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(ENV.username, ENV.password);

    const token = await page.evaluate(() => localStorage.getItem('token'));

    await use(token);
  },
});