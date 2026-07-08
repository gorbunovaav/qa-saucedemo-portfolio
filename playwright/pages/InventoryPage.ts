import { Locator, Page } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;

    readonly title: Locator;
    readonly inventoryItems: Locator;
    readonly itemNames: Locator;
    readonly itemPrices: Locator;
    readonly sortDropdown: Locator;
    readonly cartBadge: Locator;
    readonly cartButton: Locator;

    readonly backpackAddButton: Locator;
    readonly backpackRemoveButton: Locator;
    readonly bikeLightAddButton: Locator;

    constructor(page: Page) {
        this.page = page;

    this.title = page.locator('[data-test="title"]');
    this.inventoryItems = page.locator('[data-test="inventory-item"]');
    this.itemNames = page.locator('[data-test="inventory-item-name"]');
    this.itemPrices = page.locator('[data-test="inventory-item-price"]');
    this.sortDropdown = page.locator('[data-test="product-sort-container"]');

    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.cartButton = page.locator('[data-test="shopping-cart-link"]');

    this.backpackAddButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.backpackRemoveButton = page.locator('[data-test="remove-sauce-labs-backpack"]');
    this.bikeLightAddButton = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
    }

    async addItemToCart(itemTestId: string): Promise<void> {
        await this.page.locator(`[data-test="add-to-cart-${itemTestId}"]`).click();
    }

    async removeItemFromCart(itemTestId: string): Promise<void> {
        await this.page.locator(`[data-test="remove-${itemTestId}"]`).click();
    }

    async sortBy(optionValue: string): Promise<void> {
        await this.sortDropdown.selectOption(optionValue);
    }

    async openCart(): Promise<void> {
        await this.cartButton.click();
    }

    async addBackpack(): Promise<void> {
        await this.addItemToCart('sauce-labs-backpack');
    }

    async removeBackpack(): Promise<void> {
        await this.removeItemFromCart('sauce-labs-backpack');
    }

    async addBikeLight(): Promise<void> {
        await this.addItemToCart('sauce-labs-bike-light');
    }

    getInventoryItems(): Locator {
        return this.inventoryItems;
    }

    getItemNames(): Locator {
        return this.itemNames;
    }

    getItemPrices(): Locator {
        return this.itemPrices;
    }

    getCartBadge(): Locator {
        return this.cartBadge;
    }
}