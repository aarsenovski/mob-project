import { test } from '@playwright/test'

test('Google page', async ({ page }) => {
  await page.goto('https://google.com')
  await page.screenshot({ path: 'screenshot.png', fullPage: true })
  await page.locator('button', { hasText: 'Alles accepteren' }).click()
})
