const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');

test('Login page check', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.openApplication();
 // await loginPage.openLoginPopup();
  //await loginPage.login('7094143929', 'Meena@2022');
  //await loginPage.navigateToStudentManagement();
  
  
});