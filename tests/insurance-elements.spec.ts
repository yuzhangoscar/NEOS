import { expect, test } from '@playwright/test';

const requiredSelectors =
  process.env.REQUIRED_SELECTORS?.split(';').map((selector) => selector.trim()).filter(Boolean) ?? [
    'header, [role="banner"]',
    'main, [role="main"]',
    'footer, [role="contentinfo"]',
  ];

test('insurance page key elements are present @smoke', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('domcontentloaded');

  for (const selector of requiredSelectors) {
    await expect(
      page.locator(selector).first(),
      `Expected selector "${selector}" to be visible on the insurance page.`,
    ).toBeVisible();
  }
});
