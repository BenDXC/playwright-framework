import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async login(username: string, password: string) {
    await this.page.goto('/login', { waitUntil: 'networkidle' });
    await this.page.waitForSelector('#username', { state: 'visible' });
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('#loginBtn');
    await this.page.waitForURL('/dashboard');
  }
}