import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('insurance page has no WCAG A/AA axe violations @a11y', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('domcontentloaded');

  const accessibilityScanResults = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22a', 'wcag22aa'])
    .analyze();

  const violationSummary = accessibilityScanResults.violations
    .map((violation) => `${violation.id}: ${violation.help} (${violation.nodes.length} nodes)`)
    .join('\n');

  expect(
    accessibilityScanResults.violations,
    violationSummary ? `Accessibility violations found:\n${violationSummary}` : undefined,
  ).toEqual([]);
});
