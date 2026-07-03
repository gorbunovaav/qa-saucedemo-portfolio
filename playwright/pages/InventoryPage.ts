import { Locator, Page } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;

    readonly backpackAddButton: Locator;
    readonly cartBadge: Locator;
    readonly cartButton: Locator;
    readonly backpackRemoveButton: Locator;
    readonly bikeLightAddButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.backpackAddButton = page.locator('#add-to-cart-sauce-labs-backpack');
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.cartButton = page.locator('.shopping_cart_link');
        this.backpackRemoveButton = page.locator('#remove-sauce-labs-backpack');
        this.bikeLightAddButton = page.locator('#add-to-cart-sauce-labs-bike-light');
    }

    async addBackpack() {
        await this.backpackAddButton.click();
    }

    async openCart() {
        await this.cartButton.click();
    }

    async removeBackpack() {
        await this.backpackRemoveButton.click();
    }

    async addBikeLight() {
        await this.bikeLightAddButton.click();
    }
}