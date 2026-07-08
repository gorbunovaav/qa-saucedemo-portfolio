import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { users } from '../fixtures/users';

test.describe('Cart', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);

    await loginPage.open();
    await loginPage.login(users.standard.username, users.standard.password);
    await inventoryPage.addBackpack();
    await inventoryPage.openCart();
  });

  test('CART-001: Пользователь может перейти в корзину после добавления товара', async () => {
    await cartPage.isOpened();
  });

  test('CART-002: В корзине отображается добавленный товар', async () => {
    await expect(cartPage.getCartItems()).toHaveCount(1);
    await expect(cartPage.getItemName()).toHaveText('Sauce Labs Backpack');
  });

  test('CART-003: В корзине отображаются название, цена и количество товара', async () => {
    await expect(cartPage.getItemName()).toHaveText('Sauce Labs Backpack');
    await expect(cartPage.getItemPrice()).toHaveText('$29.99');
    await expect(cartPage.getItemQuantity()).toHaveText('1');
  });

  test('CART-004: Пользователь может удалить товар из корзины', async () => {
    await cartPage.removeBackpack();

    await expect(cartPage.getCartItems()).toHaveCount(0);
  });

  test('CART-005: Continue Shopping возвращает пользователя на страницу товаров', async ({ page }) => {
    await cartPage.continueShopping();

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(inventoryPage.title).toHaveText('Products');
  });

  test('CART-006: Checkout открывает страницу оформления заказа', async ({ page }) => {
    await cartPage.checkout();

    await expect(page).toHaveURL(/checkout-step-one\.html/);
  });
});