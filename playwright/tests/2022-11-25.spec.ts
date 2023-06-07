import { test } from '@playwright/test'

test('Google page', async ({ page }) => {
  await page.goto('https://www.google.com/?hl=fr')
  await page.screenshot({ path: 'screenshot.png', fullPage: true })
  await page.locator('button', { hasText: 'Tout accepter' }).click()
})
