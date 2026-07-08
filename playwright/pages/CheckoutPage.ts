import { Locator, Page, expect } from '@playwright/test';

export class CheckoutPage {
    readonly page: Page;

    readonly title: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly postalCodeInput: Locator;
    readonly continueButton: Locator;
    readonly cancelButton: Locator;
    readonly finishButton: Locator;
    readonly errorMessage: Locator;

    readonly cartItem: Locator;
    readonly itemName: Locator;
    readonly itemPrice: Locator;
    readonly itemQuantity: Locator;
    readonly paymentInfo: Locator;
    readonly shippingInfo: Locator;
    readonly itemTotal: Locator;
    readonly tax: Locator;
    readonly total: Locator;

    readonly completeHeader: Locator;
    readonly completeText: Locator;
    readonly backHomeButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.title = page.locator('[data-test="title"]');
        this.firstNameInput = page.locator('[data-test="firstName"]');
        this.lastNameInput = page.locator('[data-test="lastName"]');
        this.postalCodeInput = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');
        this.cancelButton = page.locator('[data-test="cancel"]');
        this.finishButton = page.locator('[data-test="finish"]');
        this.errorMessage = page.locator('[data-test="error"]');

        this.cartItem = page.locator('[data-test="inventory-item"]');
        this.itemName = page.locator('[data-test="inventory-item-name"]');
        this.itemPrice = page.locator('[data-test="inventory-item-price"]');
        this.itemQuantity = page.locator('[data-test="item-quantity"]');
        this.paymentInfo = page.locator('[data-test="payment-info-value"]');
        this.shippingInfo = page.locator('[data-test="shipping-info-value"]');
        this.itemTotal = page.locator('[data-test="subtotal-label"]');
        this.tax = page.locator('[data-test="tax-label"]');
        this.total = page.locator('[data-test="total-label"]');

        this.completeHeader = page.locator('[data-test="complete-header"]');
        this.completeText = page.locator('[data-test="complete-text"]');
        this.backHomeButton = page.locator('[data-test="back-to-products"]');
    }

    async isCheckoutInfoPageOpened(): Promise<void> {
        await expect(this.page).toHaveURL(/checkout-step-one\.html/);
        await expect(this.title).toHaveText('Checkout: Your Information');
    }

    async isCheckoutOverviewPageOpened(): Promise<void> {
        await expect(this.page).toHaveURL(/checkout-step-two\.html/);
        await expect(this.title).toHaveText('Checkout: Overview');
    }

    async isCheckoutCompletePageOpened(): Promise<void> {
        await expect(this.page).toHaveURL(/checkout-complete\.html/);
        await expect(this.title).toHaveText('Checkout: Complete!');
    }

    async fillCheckoutForm(
        firstName: string,
        lastName: string,
        postalCode: string
    ): Promise<void> {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
    }

    async continue(): Promise<void> {
        await this.continueButton.click();
    }

    async finish(): Promise<void> {
        await this.finishButton.click();
    }

    async backHome(): Promise<void> {
        await this.backHomeButton.click();
    }

    getErrorMessage(): Locator {
        return this.errorMessage;
    }

    getCartItem(): Locator {
        return this.cartItem;
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