import { test, expect } from '@playwright/test';

test.describe('SauceDemo API / HTTP checks', () => {
    test('API-001: Главная страница возвращает статус 200', async ({ request }) => {
        const response = await request.get('/');

        expect(response.status()).toBe(200);
        expect(response.ok()).toBeTruthy();
    });

    test('API-002: Главная страница возвращает HTML-контент', async ({ request }) => {
        const response = await request.get('/');
        const contentType = response.headers()['content-type'];

        expect(response.status()).toBe(200);
        expect(contentType).toContain('text/html');
    });

    test('API-003: HTML главной страницы содержит название приложения', async ({ request }) => {
        const response = await request.get('/');
        const body = await response.text();

        expect(response.status()).toBe(200);
        expect(body).toContain('Swag Labs');
    });

    test('API-004: Несуществующий маршрут не возвращает успешный ответ', async ({ request }) => {
        const response = await request.get('/non-existing-page.html');

        expect(response.ok()).toBeFalsy();
        expect(response.status()).toBe(404);
    });
});