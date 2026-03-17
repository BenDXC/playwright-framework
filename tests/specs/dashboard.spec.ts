import { test, expect } from '@playwright/test';
import users from '../../config/user.json';
import { getUserProfile } from '../../api/user.api';

users.forEach((user) => {
  test(`dashboard validation for ${user.username}`, async ({ page, request, dashboardPage }) => {
    await page.goto('/dashboard');

    const welcomeText = await dashboardPage.getWelcomeText();
    const apiData = await getUserProfile(request);

    await expect(welcomeText).toContain(apiData.name);
  });
});