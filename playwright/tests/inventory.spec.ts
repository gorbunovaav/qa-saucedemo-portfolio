import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { users } from '../fixtures/users';

test.describe('Inventory', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);

    await loginPage.open();
    await loginPage.login(users.standard.username, users.standard.password);
  });

  test('INVENTORY-001: Страница товаров открывается после успешной авторизации', async ({ page }) => {
    await expect(page).toHaveURL(/inventory\.html/);
    await expect(inventoryPage.title).toHaveText('Products');
  });

  test('INVENTORY-002: Список товаров отображается на странице', async () => {
    await expect(inventoryPage.getInventoryItems().first()).toBeVisible();
  });

  test('INVENTORY-003: На странице отображается 6 товаров', async () => {
    await expect(inventoryPage.getInventoryItems()).toHaveCount(6);
  });

  test('INVENTORY-004: У первого товара отображаются название и цена', async () => {
    await expect(inventoryPage.getItemNames().first()).toBeVisible();
    await expect(inventoryPage.getItemPrices().first()).toBeVisible();
  });

  test('INVENTORY-005: Товар можно добавить в корзину', async () => {
    await inventoryPage.addBackpack();

    await expect(inventoryPage.getCartBadge()).toHaveText('1');
  });

  test('INVENTORY-006: Товар можно удалить из корзины', async () => {
    await inventoryPage.addBackpack();
    await inventoryPage.removeBackpack();

    await expect(inventoryPage.getCartBadge()).not.toBeVisible();
  });

  test('INVENTORY-007: Счетчик корзины обновляется после добавления двух товаров', async () => {
    await inventoryPage.addBackpack();
    await inventoryPage.addBikeLight();

    await expect(inventoryPage.getCartBadge()).toHaveText('2');
  });

  test('INVENTORY-008: Сортировка товаров по имени A to Z работает корректно', async () => {
    await inventoryPage.sortBy('az');

    await expect(inventoryPage.getItemNames()).toHaveText([
      'Sauce Labs Backpack',
      'Sauce Labs Bike Light',
      'Sauce Labs Bolt T-Shirt',
      'Sauce Labs Fleece Jacket',
      'Sauce Labs Onesie',
      'Test.allTheThings() T-Shirt (Red)'
    ]);
  });

  test('INVENTORY-009: Сортировка товаров по имени Z to A работает корректно', async () => {
    await inventoryPage.sortBy('za');

    await expect(inventoryPage.getItemNames()).toHaveText([
      'Test.allTheThings() T-Shirt (Red)',
      'Sauce Labs Onesie',
      'Sauce Labs Fleece Jacket',
      'Sauce Labs Bolt T-Shirt',
      'Sauce Labs Bike Light',
      'Sauce Labs Backpack'
    ]);
  });
});