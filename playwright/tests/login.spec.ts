import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { users } from "../fixtures/users";

test.describe("Login", () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.open();
  });

  test("LOGIN-001: Успешная авторизация standard_user", async ({ page }) => {
    await loginPage.login(users.standard.username, users.standard.password);

    await expect(page).toHaveURL(/inventory\.html/);
  });

  test("LOGIN-002: Ошибка при пустом username", async ({ page }) => {
    await loginPage.login("", users.standard.password);

    await expect(loginPage.getErrorMessage()).toBeVisible();
    await expect(loginPage.getErrorMessage()).toContainText(
      "Epic sadface: Username is required",
    );
    await expect(page).toHaveURL(/saucedemo\.com/);
  });

  test("LOGIN-003: Ошибка при пустом password", async ({ page }) => {
    await loginPage.login(users.standard.username, "");

    await expect(loginPage.getErrorMessage()).toBeVisible();
    await expect(loginPage.getErrorMessage()).toContainText(
      "Epic sadface: Password is required",
    );
    await expect(page).toHaveURL(/saucedemo\.com/);
  });

  test("LOGIN-004: Ошибка при пустых username и password", async ({ page }) => {
    await loginPage.login("", "");

    await expect(loginPage.getErrorMessage()).toBeVisible();
    await expect(loginPage.getErrorMessage()).toContainText(
      "Epic sadface: Username is required",
    );
    await expect(page).toHaveURL(/saucedemo\.com/);
  });

  test("LOGIN-005: Ошибка при неверном username", async ({ page }) => {
    await loginPage.login(users.invalid.username, users.standard.password);

    await expect(loginPage.getErrorMessage()).toBeVisible();
    await expect(loginPage.getErrorMessage()).toContainText(
      "Epic sadface: Username and password do not match any user in this service",
    );
    await expect(page).toHaveURL(/saucedemo\.com/);
  });

  test("LOGIN-006: Ошибка при неверном password", async ({ page }) => {
    await loginPage.login(users.standard.username, users.invalid.password);

    await expect(loginPage.getErrorMessage()).toBeVisible();
    await expect(loginPage.getErrorMessage()).toContainText(
      "Epic sadface: Username and password do not match any user in this service",
    );
    await expect(page).toHaveURL(/saucedemo\.com/);
  });

  test("LOGIN-007: Авторизация locked_out_user невозможна", async ({
    page,
  }) => {
    await loginPage.login(users.locked.username, users.locked.password);

    await expect(loginPage.getErrorMessage()).toBeVisible();
    await expect(loginPage.getErrorMessage()).toContainText(
      "Epic sadface: Sorry, this user has been locked out.",
    );
    await expect(page).toHaveURL(/saucedemo\.com/);
  });

  test('LOGIN-008: Сообщение об ошибке можно закрыть', async () => {
    await loginPage.login('', '');
    await expect(loginPage.getErrorMessage()).toBeVisible();
    await loginPage.closeErrorMessage();
    await expect(loginPage.getErrorMessage()).not.toBeVisible();
    });
});
