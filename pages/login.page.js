class LoginPage {
  constructor(page) {
    this.page = page;

    this.loginIconBtn = page.locator("//button[@type='button']").first();
    this.loginModalBtn = page.locator("//button[@class='modal-btn']");
    this.mobileInput = page.locator("//input[@placeholder='10-digit Mobile Number']");
    this.passwordInput = page.locator("//input[@id='passwordInput']");
    this.goButton = page.locator("//button[normalize-space()='Go!']");
    this.sidebar = page.locator("//div[@class='sidebar']").nth(1);
    this.studentManagement = page.locator("//span[normalize-space()='Student Management']");
    this.subMenu = page.locator("//a[@class='submenu-link ng-star-inserted active']");
    this.tab = page.locator("//input[@id='search-student-type-head']");

  }

  async openApplication() {
    await this.page.goto('https://scorecard.superkingsacademy.com:88/home');
    await this.page.waitForTimeout(3000);
     await page.goto('https://scorecard.superkingsacademy.com:88/home');
  await page.getByRole('button', { name: 'Login / Sign Up' }).click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: '-digit Mobile Number' }).click();
  await page.getByRole('textbox', { name: '-digit Mobile Number' }).fill('1234');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('56789');
  await page.getByRole('button', { name: 'Go!' }).click();
  await page.getByRole('button', { name: 'Signup' }).click();

    
  }

  async openLoginPopup() {
   // await this.loginIconBtn.click();
   // await this.page.waitForTimeout(3000); 
    //await this.loginModalBtn.click();
  //   await this.page.waitForTimeout(3000);
  // }

  // async login(mobile, password) {
  //   await this.mobileInput.fill(mobile);
  //   await this.passwordInput.fill(password);
  //   await this.goButton.click();
  //   await this.page.waitForTimeout(3000);
 // }

  // async navigateToStudentManagement() {
  //   await this.sidebar.click();
  //   await this.studentManagement.click();
  //   await this.subMenu.click();
  //   await this.tab.waitFor({ state: 'visible' });
  //   await this.tab.click();
  }
   
}

module.exports = { LoginPage };
