const {test: base, expect} = require('@playwright/test')
const { UsersApi } = require('../api/users.js');



const myFixures = base.extend({
  newUser: async ({ page }, use) => {
    const usersApi = new UsersApi(page);
    const createUser = await usersApi.registerUser();

    await use(createUser);
  },

});
module.exports ={test: myFixures, expect}