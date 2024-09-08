import { request } from "@playwright/test";
import { faker } from "@faker-js/faker";

export class UsersApi {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    // this.page = page;
    // this.emailInput = page.locator('[name="email"]');
    // this.passwordInput = page.locator('[name="password"]');
    // this.submitButton = page.locator('[type="submit"]');
  }

  async registerUser(isRealtor = "false") {
    const userData = {
      username: faker.person.firstName(),
      user_surname: faker.person.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      isRealtor: isRealtor,
    };
    const apiContext = await request.newContext();
    const response = await apiContext.post("/api/users/registration", {
      data: userData,
    });
    return { userData, response };
  }
}
