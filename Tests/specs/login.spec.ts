import { expect } from '@playwright/test';

users.forEach((user) => {
  test(`login as ${user.username}`, async ({ loginPage, page }) => {
    await loginPage.login(user.username, user.password);

    await expect(page).toHaveURL('/dashboard');
  });
});