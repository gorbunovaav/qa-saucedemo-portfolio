import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { users } from '../fixtures/users';
import { checkoutData } from '../fixtures/checkoutData';

test.describe('Checkout', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;
  let checkoutPage: CheckoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);

    await loginPage.open();
    await loginPage.login(users.standard.username, users.standard.password);
    await inventoryPage.addBackpack();
    await inventoryPage.openCart();
    await cartPage.checkout();
  });

  test('CHECKOUT-001: Страница checkout открывается из корзины', async () => {
    await checkoutPage.isCheckoutInfoPageOpened();
  });

  test('CHECKOUT-002: Ошибка при пустом First Name', async () => {
    await checkoutPage.continue();

    await expect(checkoutPage.getErrorMessage()).toBeVisible();
    await expect(checkoutPage.getErrorMessage()).toContainText(
      'Error: First Name is required'
    );
  });

  test('CHECKOUT-003: Ошибка при пустом Last Name', async () => {
    await checkoutPage.fillCheckoutForm(
      checkoutData.validCustomer.firstName,
      '',
      checkoutData.validCustomer.postalCode
    );

    await checkoutPage.continue();

    await expect(checkoutPage.getErrorMessage()).toBeVisible();
    await expect(checkoutPage.getErrorMessage()).toContainText(
      'Error: Last Name is required'
    );
  });

  test('CHECKOUT-004: Ошибка при пустом Postal Code', async () => {
    await checkoutPage.fillCheckoutForm(
      checkoutData.validCustomer.firstName,
      checkoutData.validCustomer.lastName,
      ''
    );

    await checkoutPage.continue();

    await expect(checkoutPage.getErrorMessage()).toBeVisible();
    await expect(checkoutPage.getErrorMessage()).toContainText(
      'Error: Postal Code is required'
    );
  });

  test('CHECKOUT-005: Пользователь может заполнить форму checkout и перейти к overview', async () => {
    await checkoutPage.fillCheckoutForm(
      checkoutData.validCustomer.firstName,
      checkoutData.validCustomer.lastName,
      checkoutData.validCustomer.postalCode
    );

    await checkoutPage.continue();

    await checkoutPage.isCheckoutOverviewPageOpened();
  });

  test('CHECKOUT-006: На overview page отображается товар, цена и количество', async () => {
    await checkoutPage.fillCheckoutForm(
      checkoutData.validCustomer.firstName,
      checkoutData.validCustomer.lastName,
      checkoutData.validCustomer.postalCode
    );

    await checkoutPage.continue();

    await expect(checkoutPage.getCartItem()).toHaveCount(1);
    await expect(checkoutPage.getItemName()).toHaveText('Sauce Labs Backpack');
    await expect(checkoutPage.getItemPrice()).toHaveText('$29.99');
    await expect(checkoutPage.getItemQuantity()).toHaveText('1');
  });

  test('CHECKOUT-007: Пользователь может завершить покупку', async () => {
    await checkoutPage.fillCheckoutForm(
      checkoutData.validCustomer.firstName,
      checkoutData.validCustomer.lastName,
      checkoutData.validCustomer.postalCode
    );

    await checkoutPage.continue();
    await checkoutPage.finish();

    await checkoutPage.isCheckoutCompletePageOpened();

    await expect(checkoutPage.completeHeader).toHaveText(
      'Thank you for your order!'
    );
    await expect(checkoutPage.completeText).toBeVisible();
  });
});