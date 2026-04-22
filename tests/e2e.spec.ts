import { test, expect } from '@playwright/test';

// 1. Successful Login
test('successful login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
  await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Products')).toBeVisible();
});


// 2. Failed Login
test('failed login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByRole('textbox', { name: 'Username' }).fill('wrong_user');
  await page.getByRole('textbox', { name: 'Password' }).fill('wrong_pass');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Epic sadface')).toBeVisible();
});


// 3. Add to Cart
test('add to cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
  await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByText('Sauce Labs Backpack').click();
  await page.getByRole('button', { name: 'Add to cart' }).click();

  await expect(page.getByRole('link', { name: '1' })).toBeVisible();
});


// 4. Checkout Flow
test('checkout flow', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
  await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('button', { name: 'Add to cart' }).first().click();
  await page.getByRole('link', { name: 'Shopping Cart' }).click();
  await page.getByRole('button', { name: 'Checkout' }).click();

  await page.getByRole('textbox', { name: 'First Name' }).fill('John');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Doe');
  await page.getByRole('textbox', { name: 'Zip/Postal Code' }).fill('12345');

  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Finish' }).click();

  await expect(page.getByText('Thank you for your order')).toBeVisible();
});


// 5. Form Validation
test('checkout form validation', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
  await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('link', { name: 'Shopping Cart' }).click();
  await page.getByRole('button', { name: 'Checkout' }).click();

  await page.getByRole('button', { name: 'Continue' }).click();

  await expect(page.getByText('Error')).toBeVisible();
});