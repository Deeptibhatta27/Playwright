import { test, expect } from '@playwright/test';

test('TalkTravel has title', async ({ page }) => {
  await page.goto('https://talktravel.com/');

  // check page loaded (title exists)
  await expect(page).toHaveTitle(/Talk/i);
});

test('TalkTravel homepage loads', async ({ page }) => {
  await page.goto('https://talktravel.com/');

  // example: check something visible (you can change later)
  await expect(page).toHaveURL('https://talktravel.com/');
});