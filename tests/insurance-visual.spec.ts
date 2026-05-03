import { expect, test } from '@playwright/test';

test('insurance landing page visual snapshot @visual', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('domcontentloaded');

  await expect(page).toHaveScreenshot('insurance-landing-page.png', {
    fullPage: true,
    animations: 'disabled',
  });
});
