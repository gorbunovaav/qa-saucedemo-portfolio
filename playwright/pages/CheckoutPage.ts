import { expect, Locator, Page } from '@playwright/test';

export class CheckoutPage {
    readonly page: Page;

    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly zipCode: Locator;

    readonly continueButton: Locator;
    readonly finishButton: Locator;
    readonly cancelButton: Locator;

    readonly completeHeader: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;

        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.zipCode = page.locator('#postal-code');

        this.continueButton = page.locator('#continue');
        this.finishButton = page.locator('#finish');
        this.cancelButton = page.locator('#cancel');

        this.completeHeader = page.locator('.complete-header');
        this.errorMessage = page.locator('[data-test="error"]');
    }

    async isOpened() {
        await expect(this.page).toHaveURL(/checkout-step-one.html/);
    }

    async fillInformation(
        firstName: string,
        lastName: string,
        zipCode: string
    ) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.zipCode.fill(zipCode);
    }

    async isOverviewOpened() {
        await expect(this.page).toHaveURL(/checkout-step-two.html/);
    }

    async checkoutAs(firstName: string, lastName: string, zipCode: string) {
        await this.fillInformation(firstName, lastName, zipCode);
        await this.continue();
    }

    async continue() {
        await this.continueButton.click();
    }

    async finish() {
        await this.finishButton.click();
    }

}