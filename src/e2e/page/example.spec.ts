import test, { expect } from "@playwright/test";

test("should navigate to the test page", async ({ page }) => {
  await page.goto("./");
  await page.click("text=go to test");
  await expect(page).toHaveURL("/test");
  await expect(page.locator("h1")).toContainText("テスト");
});
