const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../Pages/login.page');

test('has title', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.Openapplication();
  await loginPage.LoginPagee('8005', 'Royal@1cms');
  await loginPage.ODflow('DV0000006');
  await loginPage.Investigatorflow('DM217006','Royal@1cms','PV00912137','test','9551553255','1200');

 
});
