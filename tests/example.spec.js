// @ts-check
import { test, expect} from "../fixtures/users";
import { LoginPage } from "../pom/login.js";


let loginPage;

test("should login",{tag: '@smoke',}, async ({ page, newUser }) => {
  loginPage = new LoginPage(page);
  await page.goto("/auth/login");
  await loginPage.login(newUser.userData.email, newUser.userData.password);

  await expect(page).toHaveTitle("User: Profile | Delek Homes");
});

test("should login2",{tag: '@smoke',}, async ({ page, newUser }) => {
  loginPage = new LoginPage(page);
  await page.goto("/auth/login");
  await loginPage.login(newUser.userData.email, newUser.userData.password);

  await expect(page).toHaveTitle("User: Profile | Delek Homes");
});

test("should login3", async ({ page, newUser }) => {
  loginPage = new LoginPage(page);
  await page.goto("/auth/login");
  await loginPage.login(newUser.userData.email, newUser.userData.password);

  await expect(page).toHaveTitle("User: Profile | Delek Homes");
});

test("should login4", async ({ page, newUser }) => {
  loginPage = new LoginPage(page);
  await page.goto("/auth/login");
  await loginPage.login(newUser.userData.email, newUser.userData.password);

  await expect(page).toHaveTitle("User: Profile | Delek Homes");
});
