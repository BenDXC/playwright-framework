export class DashboardPage {
  constructor(private page) {}

  async getWelcomeText() {
    return this.page.textContent('#welcome');
  }
}