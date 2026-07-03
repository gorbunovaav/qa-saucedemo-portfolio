import { CheckoutPage } from './../pages/CheckoutPage';
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from './../pages/InventoryPage';
import { users } from '../fixtures/users';
import { CartPage } from './../pages/CartPage';

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
    await loginPage.login(
        users.standard.username,
        users.standard.password
    );
    await inventoryPage.addBackpack();
    await inventoryPage.openCart();
    await cartPage.checkout();
    await checkoutPage.isOpened();
});
test('Успешное оформление заказа', async () => {

    await checkoutPage.checkoutAs('Anna', 'Kireeva', '123456');
    await checkoutPage.isOverviewOpened();
    await checkoutPage.finish();
    await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');
});

test('Ошибка при пустом имени', async () => {
    await checkoutPage.checkoutAs('', 'Kireeva', '123456');
    await checkoutPage.continue();
    await expect(checkoutPage.errorMessage).toBeVisible();
    await expect(checkoutPage.errorMessage).toHaveText('Error: First Name is required');

});

test('Ошибка при пустой фамилии', async () => {
    await checkoutPage.checkoutAs('Anna', '', '123456');
    await checkoutPage.continue();
    await expect(checkoutPage.errorMessage).toBeVisible();
    await expect(checkoutPage.errorMessage).toHaveText('Error: Last Name is required');
});

test('Ошибка при пустом Zip Code', async () => {
    await checkoutPage.checkoutAs('Anna', 'Kireeva', '');
    await checkoutPage.continue();
    await expect(checkoutPage.errorMessage).toBeVisible();
    await expect(checkoutPage.errorMessage).toHaveText('Error: Postal Code is required');
});

