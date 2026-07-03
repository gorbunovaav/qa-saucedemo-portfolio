import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../fixtures/users';

let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.open();
});

test('Успешная авторизация', async ({ page }) => {
    await loginPage.login(users.standard.username, users.standard.password);
    await expect(page).toHaveURL(/inventory.html/);
});

test('Авторизация с неверным паролем', async ({ page }) => {
    await loginPage.login(users.invalid.username, users.invalid.password);
    await expect(loginPage.getErrorMessage()).toBeVisible();
});

test('Авторизация заблокированного пользователя', async () => {
    await loginPage.login(
        users.locked.username,
        users.locked.password
    );
    await expect(loginPage.getErrorMessage()).toContainText(
        'Sorry, this user has been locked out.'
    );
});

test('Авторизация с пустыми полями', async () => {
    await loginPage.login('', '');

    await expect(loginPage.getErrorMessage()).toBeVisible();
});