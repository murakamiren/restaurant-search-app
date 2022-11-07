import test, { expect } from "@playwright/test";

test.beforeEach(async ({ page, context }) => {
  context.grantPermissions(["geolocation"]);
  context.setGeolocation({ latitude: 34.5722652, longitude: 135.5599692 });
  await page.goto("/");
});

test("search shop 焼肉", async ({ page }) => {
  await expect(page).toHaveURL("http://localhost:3000/");

  // 検索
  await page.getByLabel("店舗名").fill("焼肉");
  await page.getByRole("combobox", { name: "検索範囲" }).selectOption("4");

  await expect(page.getByLabel("店舗名")).toHaveValue("焼肉");
  await expect(page.getByRole("combobox", { name: "検索範囲" })).toHaveValue("4");

  await page.getByRole("button", { name: "検索する" }).click();

  const card = await page.locator("data-test-id=card");
  const cardCount = await card.count();
  for (let i = 0; i < cardCount; i++) {
    const cardComponent = card.nth(i);
    expect(cardComponent).toBeVisible();
  }
});
