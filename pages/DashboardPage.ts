import { Page } from '@playwright/test';

export class DashboardPage {
  constructor(private page: Page) {}

  async getWelcomeText() {
    return this.page.textContent('#welcome');
  }
}