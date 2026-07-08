import { Locator, Page, expect } from '@playwright/test';

export class CartPage {
    readonly page: Page;

    readonly title: Locator;
    readonly cartItems: Locator;
    readonly itemName: Locator;
    readonly itemPrice: Locator;
    readonly itemQuantity: Locator;
    readonly removeBackpackButton: Locator;
    readonly checkoutButton: Locator;
    readonly continueShoppingButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.title = page.locator('[data-test="title"]');
        this.cartItems = page.locator('[data-test="inventory-item"]');
        this.itemName = page.locator('[data-test="inventory-item-name"]');
        this.itemPrice = page.locator('[data-test="inventory-item-price"]');
        this.itemQuantity = page.locator('[data-test="item-quantity"]');
        this.removeBackpackButton = page.locator('[data-test="remove-sauce-labs-backpack"]');
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
    }

    async checkout(): Promise<void> {
        await this.checkoutButton.click();
    }

    async continueShopping(): Promise<void> {
        await this.continueShoppingButton.click();
    }

    async removeBackpack(): Promise<void> {
        await this.removeBackpackButton.click();
    }

    async isOpened(): Promise<void> {
        await expect(this.page).toHaveURL(/cart\.html/);
        await expect(this.title).toHaveText('Your Cart');
    }

    getCartItems(): Locator {
        return this.cartItems;
    }

    getItemName(): Locator {
        return this.itemName;
    }

    getItemPrice(): Locator {
        return this.itemPrice;
    }

    getItemQuantity(): Locator {
        return this.itemQuantity;
    }
}