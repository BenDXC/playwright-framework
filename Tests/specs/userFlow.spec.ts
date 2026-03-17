import { test, expect } from '../fixtures/auth.fixtures';
import { DashboardPage } from '../../Pages/DashboardPage';
import { getUserProfile } from '../../api/user.api';

test('user dashboard matches API data', async ({ page, request, authToken }) => {
  const dashboard = new DashboardPage(page);

  // UI validation
  const welcomeText = await dashboard.getWelcomeText();
  await expect(welcomeText).toContain('Welcome');

  // API validation
  const userData = await getUserProfile(request, authToken);

  // Cross-check UI vs API
  expect(welcomeText).toContain(userData.name);
});