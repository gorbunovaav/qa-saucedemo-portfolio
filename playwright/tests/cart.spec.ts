import { InventoryPage } from './../pages/InventoryPage';
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../fixtures/users';

let loginPage: LoginPage;
let inventoryPage: InventoryPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    await loginPage.open();
    await loginPage.login(
        users.standard.username,
        users.standard.password
    );
});

test('Добавление товара в корзину', async () => {
    await inventoryPage.addBackpack();
    await expect(inventoryPage.cartBadge).toHaveText('1');
});

test('Удаление товара из корзины', async () => {
    await inventoryPage.addBackpack();
    await inventoryPage.removeBackpack();
    await expect(inventoryPage.cartBadge).toHaveCount(0);
});

test('Добавление нескольких товаров', async () => {
    await inventoryPage.addBackpack();
    await inventoryPage.addBikeLight();
    await expect(inventoryPage.cartBadge).toHaveText('2');
});

test('Переход в корзину', async () => {
    await inventoryPage.openCart();
    await expect(loginPage.page).toHaveURL(/cart.html/);
});