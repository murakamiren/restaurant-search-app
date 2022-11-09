import { PlaywrightTestConfig, devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testMatch: "/e2e/**/*.spec.ts",
  use: {
    baseURL: "http://localhost:3000",
    headless: true,
    ignoreHTTPSErrors: true,
    actionTimeout: 10_000,
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
      },
    },
    {
      name: "webkit",
      use: {
        ...devices["Desktop Safari"],
      },
    },
    {
      name: "iphone12",
      use: { ...devices["iPhone 12"] },
    },
    {
      name: "iphone13",
      use: { ...devices["iPhone 13"] },
    },
    {
      name: "android(Pixel 5)",
      use: { ...devices["Pixel 5"] },
    },
  ],
};

export default config;
