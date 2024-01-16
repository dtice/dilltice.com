import { expect, test } from '@playwright/test';

test.describe('test theme', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('default theme is dark', async ({ page }) => {
    await expect(page.getByTestId('theme-dark')).toBeVisible();
  });

  test('changing theme select changes the theme', async ({ page }) => {
    await page.getByTestId('sidebar-toggle').click();
    await page.getByTestId('theme-switch').click();
    await page.getByTestId('theme-switch-spooky').click();

    await expect(page.getByTestId('theme-spooky')).toBeVisible();
  });
});
