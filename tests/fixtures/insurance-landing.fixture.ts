import { expect, test as base } from '@playwright/test';
import type { Page } from '@playwright/test';

type InsuranceLandingFixtures = {
  /**
   * Same as `page` after navigating to `/`, waiting for DOMContentLoaded,
   * and asserting the collapsed navbar toggler button is visible.
   */
  insuranceLanding: Page;
};

export const test = base.extend<InsuranceLandingFixtures>({
  insuranceLanding: async ({ page }, use) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    await use(page);
  },
});

export { expect };
