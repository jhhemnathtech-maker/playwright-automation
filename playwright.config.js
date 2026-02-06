const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  use: {
    headless: false,
    viewport: null,        // disables Playwright viewport
    trace: 'on-first-retry',

    launchOptions: {
      args: [
        '--start-maximized',
        '--disable-infobars',
        '--disable-notifications',
      ],
    },
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});
