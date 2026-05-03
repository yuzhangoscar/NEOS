import { expect, test } from './fixtures/insurance-landing.fixture';

test('insurance page key elements are present @smoke', async ({ insuranceLanding }) => {
  const adviserLogin = insuranceLanding.getByRole('listitem')
  .filter({ hasText: /^Adviser login$/i });

  await expect(adviserLogin, 'Adviser login should be visible.').toBeVisible();
});
