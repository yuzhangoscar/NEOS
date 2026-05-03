# NEOS

![Docker Visual Suite](https://github.com/yuzhangoscar/NEOS/actions/workflows/docker-visual-suite.yml/badge.svg)
![Docker Elements Suite](https://github.com/yuzhangoscar/NEOS/actions/workflows/docker-elements-suite.yml/badge.svg)
![Docker Accessibility Suite](https://github.com/yuzhangoscar/NEOS/actions/workflows/docker-accessibility-suite.yml/badge.svg)
![Docker Sequential Suites](https://github.com/yuzhangoscar/NEOS/actions/workflows/docker-sequential-suites.yml/badge.svg)

### Core

![Playwright](https://img.shields.io/npm/v/@playwright/test?label=Playwright&color=2EAD33)
![TypeScript](https://img.shields.io/npm/v/typescript?label=TypeScript&color=3178C6)
![Node.js](https://img.shields.io/badge/Node.js-≥20_LTS-339933)

### Testing & Quality

![axe-core](https://img.shields.io/npm/v/@axe-core/playwright?label=axe-core%2Fplaywright&color=663399)
![Allure](https://img.shields.io/npm/v/allure-playwright?label=Allure%20Playwright&color=FF6600)
![ESLint](https://img.shields.io/npm/v/eslint?label=ESLint&color=4B32C3)
![Commitlint](https://img.shields.io/npm/v/@commitlint/cli?label=Commitlint&color=000000)
![Husky](https://img.shields.io/npm/v/husky?label=Husky&color=42B983)

### Performance

![Gatling Core](https://img.shields.io/npm/v/@gatling.io/core?label=Gatling%20Core&color=FF6600)
![Gatling HTTP](https://img.shields.io/npm/v/@gatling.io/http?label=Gatling%20HTTP&color=FF6600)
![Gatling CLI](https://img.shields.io/npm/v/@gatling.io/cli?label=Gatling%20CLI&color=FF6600)

Playwright-based frontend testing setup for insurance pages, including:
- Headless and headed local execution
- GitHub Actions headless execution
- Element presence checks
- Visual screenshot regression checks
- Accessibility scanning with axe against WCAG A/AA tags
- ESLint for test code review quality
- Commit message validation with Commitlint + Husky
- Dockerized test execution
- Performance load testing with Gatling

## 1) Prerequisites
- Node.js ≥20 (LTS recommended)
- npm ≥10
- Docker (for containerized execution)

## 2) Install dependencies
```bash
npm install
npx playwright install chromium
```

## 3) Configure target insurance page
Copy `.env.example` to `.env` and update as needed:
```bash
cp .env.example .env
```

Defaults:
- `BASE_URL=https://www.neosprotect.com.au/`

## 4) Run tests locally
Headless:
```bash
npm run test:e2e
```

Headed (local browser visible):
```bash
npm run test:e2e:headed
```

Debug mode:
```bash
npm run test:e2e:debug
```

Playwright UI mode:
```bash
npm run test:e2e:ui
```

## 5) Visual screenshot testing
Create or refresh baseline screenshots:
```bash
npm run test:visual:update
```

Run visual regression checks:
```bash
npm run test:visual
```

## 6) Accessibility testing (axe + WCAG tags)
Run accessibility-only tests:
```bash
npm run test:a11y
```

WCAG tags enforced in tests:
- `wcag2a`
- `wcag2aa`
- `wcag21a`
- `wcag21aa`
- `wcag22a`
- `wcag22aa`

## 7) Reports
Open Playwright HTML report:
```bash
npm run report
```

## 8) Linting and commit message checks
Run lint:
```bash
npm run lint
```

Commit messages are validated against Conventional Commits via Husky + Commitlint.
Examples:
- `feat: add homepage smoke checks`
- `test: add axe wcag2aa coverage`

## 9) Run in Docker (headless)
```bash
npm run docker:test
```

You can override target URL:
```bash
BASE_URL=https://your-insurance-site.example npm run docker:test
```

## 10) GitHub Actions
Workflow: `.github/workflows/playwright.yml`

It runs tests headlessly on push/PR and uploads:
- `playwright-report`
- `test-results`
- `allure-results`

Set repository variable `BASE_URL` in GitHub if you want to test a specific target URL in CI.
