import { test } from '../fixtures/base.fixtures.ts';
import { expect } from '@playwright/test';
import users from '../../config/user.json';

users.forEach((user) => {
  test(`login as ${user.username}`, async ({ loginPage, page }) => {
    await loginPage.login(user.username, user.password);
    await expect(page).toHaveURL('/dashboard');
  });
});