import { Locator, Page, expect } from '@playwright/test';


export class CartPage {
    readonly page: Page;

    readonly checkoutButton: Locator;
    readonly continueShoppingButton: Locator;
    readonly cartItems: Locator;
    readonly title: Locator;

    constructor(page: Page) {
        this.page = page;

        this.checkoutButton = page.locator('#checkout');
        this.continueShoppingButton = page.locator('#continue-shopping');
        this.cartItems = page.locator('.cart_item');
        this.title = page.locator('.title');
    }

    async checkout() {
        await this.checkoutButton.click();
    }

    async continueShopping() {
        await this.continueShoppingButton.click();
    }

     async isOpened() {
        await expect(this.page).toHaveURL(/cart.html/);
        await expect(this.title).toHaveText('Your Cart');
    }

}