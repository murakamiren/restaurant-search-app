import test, { expect } from "@playwright/test";

test("should select value 3(3 means 1000m)", async ({ page }) => {
  await page.goto("/");
  const selectElement = await page.locator("select");
  await selectElement.selectOption({ label: "1000m" });
  await expect(selectElement).toHaveValue("3");
});
