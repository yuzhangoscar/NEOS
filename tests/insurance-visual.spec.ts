import { expect, test } from '@playwright/test';

test('insurance landing page visual snapshot @visual', async ({ page }) => {
  const viewport = page.viewportSize() ?? { width: 1440, height: 900 };
  await page.goto('/');
  await page.waitForLoadState('domcontentloaded');

  await expect(page).toHaveScreenshot('insurance-landing-page.png', {
    fullPage: true,
    animations: 'disabled',
    clip: {
      x: 0,
      y: 0,
      width: viewport.width,
      height: viewport.height,
    }
  });
});
