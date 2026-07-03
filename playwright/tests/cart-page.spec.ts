import { CartPage } from './../pages/CartPage';
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from './../pages/InventoryPage';
import { users } from '../fixtures/users';

let loginPage: LoginPage;
let inventoryPage: InventoryPage;
let cartPage: CartPage;
test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    await loginPage.open();
    await loginPage.login(
        users.standard.username,
        users.standard.password
    );
});

test('Открытие корзины', async () => {
    await inventoryPage.addBackpack();
    await inventoryPage.openCart();
    await cartPage.isOpened();
    await expect(cartPage.cartItems).toHaveCount(1);
});

test('Возврат к каталогу', async ({ page }) => {
    await inventoryPage.openCart();
    await cartPage.continueShopping();
    await expect(page).toHaveURL(/inventory.html/);
});

test('Переход к оформлению заказа', async ({ page }) => {
    await inventoryPage.addBackpack();
    await inventoryPage.openCart();
    await cartPage.checkout();
    await expect(page).toHaveURL(/checkout-step-one.html/);
});