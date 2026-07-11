![Playwright](https://img.shields.io/badge/Playwright-2EAD33?logo=playwright\&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript\&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js\&logoColor=white)
![GitHub Actions](https://github.com/gorbunovaav/qa-saucedemo-portfolio/actions/workflows/playwright.yml/badge.svg)
![QA](https://img.shields.io/badge/QA-Portfolio-blue)

# SauceDemo QA Portfolio

🇷🇺 Русская версия
🇺🇸 English version below

---

## RU

## О проекте

**SauceDemo QA Portfolio** — портфолио-проект по ручному и автоматизированному тестированию интернет-магазина SauceDemo.

Проект демонстрирует практические навыки **Manual QA** и **QA Automation**: тест-дизайн, написание тестовой документации, оформление bug reports, автоматизация UI-тестов, использование Page Object Model, API/HTTP-проверки, кроссбраузерный запуск, настройка CI/CD через GitHub Actions, Allure Report и debug artifacts для анализа падений.

## Объект тестирования

https://www.saucedemo.com/

## Цель проекта

Цель проекта — показать полный QA-подход к тестированию веб-приложения:

* анализ функциональности;
* составление чеклистов;
* разработка тест-кейсов;
* позитивное и негативное тестирование;
* validation testing;
* smoke testing;
* regression testing;
* оформление bug reports;
* автоматизация UI-тестов;
* API/HTTP checks;
* настройка CI/CD;
* настройка тестовой отчетности;
* анализ падений через Trace Viewer;
* запуск тестов в разных браузерах.

---

## Реализовано

### Manual Testing

В проекте подготовлена тестовая документация:

* smoke checklist;
* login checklist;
* inventory checklist;
* cart checklist;
* checkout checklist;
* regression checklist;
* test cases по функциональным разделам;
* bug reports.

Чеклисты содержат статусы выполнения проверок, комментарии и ID связанных bug reports для найденных дефектов.

В ходе ручного тестирования оформлено **4 bug reports**, связанных с найденными дефектами в Login и Checkout flow.

Тестовая документация разбита по функциональным зонам приложения:

* Login;
* Inventory;
* Cart;
* Checkout.

### Тестовая документация

#### Checklists

* [Smoke Checklist](manual-testing/docs/checklists/smoke-checklist.md)
* [Login Checklist](manual-testing/docs/checklists/login-checklist.md)
* [Inventory Checklist](manual-testing//docs/checklists/inventory-checklist.md)
* [Cart Checklist](manual-testing//docs/checklists/cart-checklist.md)
* [Checkout Checklist](manual-testing//docs/checklists/checkout-checklist.md)

#### Test Cases

* [Login Test Cases](manual-testing/docs/test-cases/login-test-cases.md)
* [Inventory Test Cases](manual-testing/docs/test-cases/inventory-test-cases.md)
* [Cart Test Cases](manual-testing/docs/test-cases/cart-test-cases.md)
* [Checkout Test Cases](manual-testing/docs/test-cases/checkout-test-cases.md)

#### Bug Reports

* [Bug Reports](manual-testing/docs/bug-reports/)

---

## Automation Testing

Автоматизированные тесты реализованы на **Playwright + TypeScript** с использованием паттерна **Page Object Model**.

### UI-тесты

UI-тесты покрывают основные пользовательские сценарии интернет-магазина:

* успешная авторизация;
* негативные проверки формы логина;
* проверка заблокированного пользователя;
* проверка отображения списка товаров;
* проверка сортировки товаров;
* добавление товаров в корзину;
* удаление товаров из корзины;
* проверка счетчика корзины;
* проверка содержимого корзины;
* переход к checkout;
* валидация checkout-формы;
* проверка checkout overview;
* завершение покупки.

### API / HTTP checks

В проект добавлены базовые API/HTTP-проверки с использованием Playwright `request` fixture.

Проверки покрывают:

* доступность главной страницы;
* HTTP status code;
* content-type ответа;
* наличие ожидаемого контента в HTML;
* обработку несуществующего маршрута.

Так как SauceDemo не предоставляет полноценный публичный backend API для заказов, данный блок оформлен как **API / HTTP checks**, а не как полноценное API-тестирование бизнес-логики.

---

## Покрытие автотестами

| Раздел            | Количество тестов |
| ----------------- | ----------------: |
| Login UI          |                 8 |
| Inventory UI      |                 9 |
| Cart UI           |                 6 |
| Checkout UI       |                 7 |
| API / HTTP checks |                 4 |
| **Всего**         |            **34** |

---

## CI/CD

В проекте настроен автоматический запуск автотестов с помощью **GitHub Actions**.

Тесты запускаются автоматически при каждом:

* `push` в ветку `main` или `master`;
* создании или обновлении `pull request` в ветку `main` или `master`.

CI-пайплайн выполняет следующие шаги:

* скачивает репозиторий;
* устанавливает Node.js;
* устанавливает Java для генерации Allure Report;
* устанавливает зависимости проекта;
* устанавливает браузеры Playwright;
* запускает автоматизированные тесты;
* генерирует Allure Report;
* сохраняет Playwright HTML Report как artifact;
* сохраняет Allure Report как artifact;
* сохраняет Allure Results как artifact;
* сохраняет Playwright debug artifacts при падениях тестов.

---

## Test Reports

В проекте настроены два вида отчетов:

* **Playwright HTML Report** — стандартный отчет Playwright для анализа результатов тестов;
* **Allure Report** — расширенный отчет с удобной структурой test suites, статусов и деталей выполнения.

После запуска тестов в GitHub Actions отчеты сохраняются как artifacts:

* `playwright-report`;
* `allure-report`;
* `allure-results`.

Это позволяет анализировать результаты автотестов после каждого CI-запуска.

---

### Live Allure Report

Актуальный Allure Report опубликован через GitHub Pages:

[Open Allure Report](https://gorbunovaav.github.io/qa-saucedemo-portfolio/)

---

### Примеры отчетов

#### GitHub Actions

Успешный запуск CI pipeline:

![GitHub Actions Success](docs/screenshots/github-actions-success.jpg)

#### Allure Report

Пример Allure Report после выполнения автотестов:

![Allure Report Overview](docs/screenshots/allure-report-overview.jpg)

#### Playwright HTML Report

Пример стандартного HTML-отчета Playwright:

![Playwright HTML Report](docs/screenshots/playwright-report.jpg)

---

## Debugging Artifacts

Для анализа падений автотестов в проекте настроены debug artifacts:

* trace on failure;
* screenshot on failure;
* video on failure.

Trace Viewer позволяет пошагово анализировать выполнение теста: действия пользователя, DOM-состояние страницы, screenshots и network-запросы.

Debug artifacts сохраняются только для упавших тестов. Это позволяет не засорять успешные прогоны, но сохранять достаточно данных для анализа падений.

В GitHub Actions debug artifacts сохраняются как `playwright-test-results`.

---

## Поддерживаемые браузеры

UI-тесты могут запускаться в нескольких браузерах:

* Chromium;
* Firefox;
* WebKit.

Для быстрой локальной разработки используется запуск в Chromium. Полный кроссбраузерный прогон можно использовать перед push или в CI.

API/HTTP checks вынесены в отдельный Playwright project `api`, чтобы они не дублировались в браузерных проектах.

---

## Структура проекта

```text
qa-saucedemo-portfolio/

├── manual-testing/
│   └── docs/
│       ├── bug-reports/
│       │   ├── BUG-001.md
│       │   ├── BUG-002.md
│       │   ├── BUG-003.md
│       │   └── BUG-004.md
│       │
│       ├── checklists/
│       │   ├── smoke-checklist.md
│       │   ├── login-checklist.md
│       │   ├── inventory-checklist.md
│       │   ├── cart-checklist.md
│       │   └── checkout-checklist.md
│       │
│       ├── screenshots/
│       │   ├── github-actions-success.jpg
│       │   ├── allure-report-overview.jpg
│       │   ├── playwright-report.jpg
│       │   ├── BUG-001.png
│       │   ├── BUG-002.gif
│       │   ├── BUG-003.png
│       │   └── BUG-004.gif
│       │
│       ├── test-cases/
│       │   ├── login-test-cases.md
│       │   ├── inventory-test-cases.md
│       │   ├── cart-test-cases.md
│       │   └── checkout-test-cases.md
│       │
│       └── test-report.md
│
├── playwright/
│   ├── fixtures/
│   ├── pages/
│   ├── tests/
│   │   ├── api/
│   │   │   └── saucedemo-api.spec.ts
│   │   ├── login.spec.ts
│   │   ├── inventory.spec.ts
│   │   ├── cart.spec.ts
│   │   └── checkout.spec.ts
│   │
│   ├── playwright.config.ts
│   ├── package.json
│   ├── package-lock.json
│   └── tsconfig.json
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── .gitignore
└── README.md
```

---

## Установка и запуск

Перейти в папку с автотестами:

```bash
cd playwright
```

Установить зависимости:

```bash
npm install
```

Запустить все тесты:

```bash
npm run test
```

Запустить все UI-тесты только в Chromium:

```bash
npm run test:chromium
```

Запустить только Login-тесты:

```bash
npm run test:login
```

Запустить только Inventory-тесты:

```bash
npm run test:inventory
```

Запустить только Cart-тесты:

```bash
npm run test:cart
```

Запустить только Checkout-тесты:

```bash
npm run test:checkout
```

Запустить только API/HTTP checks:

```bash
npm run test:api
```

Запустить тесты в headed-режиме:

```bash
npm run test:headed
```

Открыть Playwright UI mode:

```bash
npm run test:ui
```

Открыть Playwright HTML Report:

```bash
npm run report
```

Сгенерировать Allure Report:

```bash
npm run allure:generate
```

Открыть Allure Report:

```bash
npm run allure:open
```

Сгенерировать и сразу открыть Allure Report:

```bash
npm run allure:serve
```

Открыть Playwright trace:

```bash
npm run trace:open -- path/to/trace.zip
```

---

## Используемые технологии

* Playwright;
* TypeScript;
* Node.js;
* Git;
* GitHub;
* GitHub Actions;
* Allure Report;
* Playwright HTML Report;
* Trace Viewer;
* Page Object Model;
* APIRequestContext / request fixture.

---

## Приобретённые и продемонстрированные навыки

### Manual QA

* составление чеклистов;
* написание тест-кейсов;
* smoke testing;
* functional testing;
* regression testing;
* validation testing;
* negative testing;
* оформление bug reports;
* тест-дизайн;
* анализ пользовательских сценариев.

### Automation QA

* UI automation;
* API/HTTP checks;
* Playwright;
* TypeScript;
* Page Object Model;
* работа с локаторами;
* assertions;
* fixtures;
* test data;
* кроссбраузерное тестирование;
* настройка npm scripts;
* настройка GitHub Actions;
* настройка Allure Report;
* настройка Playwright HTML Report;
* работа с CI artifacts;
* анализ HTML-отчета;
* анализ падений через Trace Viewer;
* работа с trace, screenshots и video on failure.

---

## Дальнейшее развитие проекта

Планируемые улучшения:

* добавить Docker для запуска тестов в контейнере;
* добавить историю Allure Report / trend-графики;
* расширить API/HTTP checks при наличии подходящих backend endpoints;
* расширить набор bug reports при дальнейшем exploratory testing;
* добавить больше негативных и edge-case сценариев;
* добавить визуальные проверки для отдельных UI-состояний;
* добавить дополнительные примеры Trace Viewer при падениях тестов.

---

## EN

## About the Project

**SauceDemo QA Portfolio** is a QA portfolio project focused on manual and automated testing of the SauceDemo e-commerce web application.

The project demonstrates practical **Manual QA** and **QA Automation** skills: test design, test documentation, bug reporting, UI test automation, Page Object Model, API/HTTP checks, cross-browser testing, CI/CD setup with GitHub Actions, Allure Report, and debugging artifacts for failure analysis.

## Application Under Test

https://www.saucedemo.com/

## Project Goal

The goal of this project is to demonstrate a complete QA approach to testing a web application:

* functionality analysis;
* checklist creation;
* test case design;
* positive and negative testing;
* validation testing;
* smoke testing;
* regression testing;
* bug reporting;
* UI test automation;
* API/HTTP checks;
* CI/CD setup;
* test reporting setup;
* failure analysis with Trace Viewer;
* cross-browser test execution.

---

## Implemented

### Manual Testing

The project includes manual testing documentation:

* smoke checklist;
* login checklist;
* inventory checklist;
* cart checklist;
* checkout checklist;
* regression checklist;
* test cases by functional area;
* bug reports.

Manual checklists include execution status, comments, and related bug report IDs where defects were found.

Manual testing resulted in **4 bug reports** related to defects found in the Login and Checkout flows.

The documentation is organized by the main functional areas of the application:

* Login;
* Inventory;
* Cart;
* Checkout.

### Test Documentation

#### Checklists

* [Smoke Checklist](manual-testing/docs/checklists/smoke-checklist.md)
* [Login Checklist](manual-testing/docs/checklists/login-checklist.md)
* [Inventory Checklist](manual-testing//docs/checklists/inventory-checklist.md)
* [Cart Checklist](manual-testing//docs/checklists/cart-checklist.md)
* [Checkout Checklist](manual-testing//docs/checklists/checkout-checklist.md)

#### Test Cases

* [Login Test Cases](manual-testing/docs/test-cases/login-test-cases.md)
* [Inventory Test Cases](manual-testing/docs/test-cases/inventory-test-cases.md)
* [Cart Test Cases](manual-testing/docs/test-cases/cart-test-cases.md)
* [Checkout Test Cases](manual-testing/docs/test-cases/checkout-test-cases.md)

#### Bug Reports

* [Bug Reports](manual-testing/docs/bug-reports/)

---

## Automation Testing

Automated tests are implemented with **Playwright + TypeScript** using the **Page Object Model** pattern.

### UI Tests

The UI tests cover the main user scenarios of the e-commerce application:

* successful login;
* negative login validation;
* locked user login restriction;
* product list display;
* product sorting;
* adding products to the cart;
* removing products from the cart;
* cart badge validation;
* cart content validation;
* checkout navigation;
* checkout form validation;
* checkout overview validation;
* order completion.

### API / HTTP Checks

The project includes basic API/HTTP checks using the Playwright `request` fixture.

The checks cover:

* main page availability;
* HTTP status code;
* response content-type;
* expected content in HTML;
* handling of a non-existing route.

Since SauceDemo does not provide a full public backend API for order management, this section is intentionally described as **API / HTTP checks**, not full business API testing.

---

## Automated Test Coverage

| Area              | Number of Tests |
| ----------------- | --------------: |
| Login UI          |               8 |
| Inventory UI      |               9 |
| Cart UI           |               6 |
| Checkout UI       |               7 |
| API / HTTP checks |               4 |
| **Total**         |          **34** |

---

## CI/CD

The project uses **GitHub Actions** to run automated tests.

The tests are triggered automatically on:

* `push` to the `main` or `master` branch;
* creating or updating a `pull request` to the `main` or `master` branch.

The CI pipeline performs the following steps:

* checks out the repository;
* sets up Node.js;
* sets up Java for Allure Report generation;
* installs project dependencies;
* installs Playwright browsers;
* runs automated tests;
* generates Allure Report;
* uploads Playwright HTML Report as an artifact;
* uploads Allure Report as an artifact;
* uploads Allure Results as an artifact;
* uploads Playwright debugging artifacts for failed tests.

---

## Test Reports

The project uses two types of test reports:

* **Playwright HTML Report** — the default Playwright report for test result analysis;
* **Allure Report** — an extended report with structured test suites, statuses, and execution details.

After each GitHub Actions run, the reports are saved as artifacts:

* `playwright-report`;
* `allure-report`;
* `allure-results`.

This allows test results to be analyzed after every CI execution.

---

### Live Allure Report

The latest Allure Report is published via GitHub Pages:

[Open Allure Report](https://gorbunovaav.github.io/qa-saucedemo-portfolio/)

---

### Report Examples

#### GitHub Actions

Successful CI pipeline run:

![GitHub Actions Success](docs/screenshots/github-actions-success.jpg)

#### Allure Report

Example of the Allure Report after automated test execution:

![Allure Report Overview](docs/screenshots/allure-report-overview.jpg)

#### Playwright HTML Report

Example of the default Playwright HTML report:

![Playwright HTML Report](docs/screenshots/playwright-report.jpg)

---

## Debugging Artifacts

The project is configured to collect debugging artifacts for failed tests:

* trace on failure;
* screenshot on failure;
* video on failure.

Trace Viewer helps analyze test execution step by step, including user actions, page DOM snapshots, screenshots, and network requests.

Debugging artifacts are collected only for failed tests. This keeps successful test runs clean while preserving enough information for failure analysis.

In GitHub Actions, debugging artifacts are saved as `playwright-test-results`.

---

## Supported Browsers

The UI tests can be executed in multiple browsers:

* Chromium;
* Firefox;
* WebKit.

Chromium is used for fast local development. Full cross-browser execution can be used before push or in CI.

API/HTTP checks are placed in a separate Playwright project named `api`, so they are not duplicated across browser projects.

---

## Project Structure

```text
qa-saucedemo-portfolio/

├── manual-testing/
│   └── docs/
│       ├── bug-reports/
│       │   ├── BUG-001.md
│       │   ├── BUG-002.md
│       │   ├── BUG-003.md
│       │   └── BUG-004.md
│       │
│       ├── checklists/
│       │   ├── smoke-checklist.md
│       │   ├── login-checklist.md
│       │   ├── inventory-checklist.md
│       │   ├── cart-checklist.md
│       │   └── checkout-checklist.md
│       │
│       ├── screenshots/
│       │   ├── github-actions-success.jpg
│       │   ├── allure-report-overview.jpg
│       │   ├── playwright-report.jpg
│       │   ├── BUG-001.png
│       │   ├── BUG-002.gif
│       │   ├── BUG-003.png
│       │   └── BUG-004.gif
│       │
│       ├── test-cases/
│       │   ├── login-test-cases.md
│       │   ├── inventory-test-cases.md
│       │   ├── cart-test-cases.md
│       │   └── checkout-test-cases.md
│       │
│       └── test-report.md
│
├── playwright/
│   ├── fixtures/
│   ├── pages/
│   ├── tests/
│   │   ├── api/
│   │   │   └── saucedemo-api.spec.ts
│   │   ├── login.spec.ts
│   │   ├── inventory.spec.ts
│   │   ├── cart.spec.ts
│   │   └── checkout.spec.ts
│   │
│   ├── playwright.config.ts
│   ├── package.json
│   ├── package-lock.json
│   └── tsconfig.json
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── .gitignore
└── README.md
```

---

## Installation and Running Tests

Go to the Playwright project folder:

```bash
cd playwright
```

Install dependencies:

```bash
npm install
```

Run all tests:

```bash
npm run test
```

Run all UI tests in Chromium only:

```bash
npm run test:chromium
```

Run Login tests only:

```bash
npm run test:login
```

Run Inventory tests only:

```bash
npm run test:inventory
```

Run Cart tests only:

```bash
npm run test:cart
```

Run Checkout tests only:

```bash
npm run test:checkout
```

Run API/HTTP checks only:

```bash
npm run test:api
```

Run tests in headed mode:

```bash
npm run test:headed
```

Open Playwright UI mode:

```bash
npm run test:ui
```

Open Playwright HTML Report:

```bash
npm run report
```

Generate Allure Report:

```bash
npm run allure:generate
```

Open Allure Report:

```bash
npm run allure:open
```

Generate and open Allure Report:

```bash
npm run allure:serve
```

Open Playwright trace:

```bash
npm run trace:open -- path/to/trace.zip
```

---

## Tech Stack

* Playwright;
* TypeScript;
* Node.js;
* Git;
* GitHub;
* GitHub Actions;
* Allure Report;
* Playwright HTML Report;
* Trace Viewer;
* Page Object Model;
* APIRequestContext / request fixture.

---

## Skills Demonstrated

### Manual QA

* checklist creation;
* test case writing;
* smoke testing;
* functional testing;
* regression testing;
* validation testing;
* negative testing;
* bug reporting;
* test design;
* user flow analysis.

### Automation QA

* UI automation;
* API/HTTP checks;
* Playwright;
* TypeScript;
* Page Object Model;
* locators;
* assertions;
* fixtures;
* test data;
* cross-browser testing;
* npm scripts setup;
* GitHub Actions setup;
* Allure Report setup;
* Playwright HTML Report setup;
* working with CI artifacts;
* HTML report analysis;
* failure analysis with Trace Viewer;
* working with trace, screenshots, and video on failure.

---

## Roadmap

Planned improvements:

* add Docker for running tests in a container;
* add Allure Report history / trend charts;
* expand API/HTTP checks if suitable backend endpoints are available;
* expand bug reports during further exploratory testing;
* add more negative and edge-case scenarios;
* add visual checks for selected UI states;
* add additional Trace Viewer examples for failed tests.