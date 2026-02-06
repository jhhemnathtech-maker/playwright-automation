import { expect } from "@playwright/test";

class LoginPage {
  constructor(page) {
    this.page = page;

    // Locators for login elements
    this.usernameInput = page.getByPlaceholder("Enter username");
    this.passwordInput = page.getByPlaceholder('Password');
    this.signupbt = page.getByRole('button',{name: "Sign In"});
    this.odbut = page.locator('xpath=//a[contains(text(),"OD Claim")]');
    this.unassig = page.locator("//span[contains(text(),'Unassigned')]");
    this.allocateText = page.getByText('Allocate Claims to Investigator', { exact: false });
    this.stateDropdown = page.locator('h6').filter({ hasText: 'Allocate Claims to Investigator' }).locator('xpath=following::select').first();
    this.investigatordropdown = page.locator("//select[@formcontrolname='investigator']");
    this.enterclaim = page.locator("//input[@placeholder='Claim Number']");
    this.clksearch = page.locator("//img[@alt='filter-icon']");
    this.checkbox = page.locator("//input[@value='-1']");
    this.allocatetoinv = page.locator("//button[normalize-space()='Allocate to Investigator']");
    this.clkokbut = page.locator("//button[normalize-space()='OK']");
    this.grid1 = page.locator("//p[contains(text(),'PARISH BUTANI-8005')]").first();
    this.clklogout = page.locator("//a[normalize-space()='Logout']");
    this.allocateClaimText = page.locator("//nav[@class='navbar navbar-expand-lg top-navbar navbar-dark navbar-custom']//div[@class='container-fluid']");
    this.acceptancepending = page.locator("//span[contains(text(),'Acceptance Pending')]");
    this.eyeicon = page.locator("//img[@alt='view-icon']");  ////table[@id='dataTableTrigger']/tbody/tr[1]/td[8]/a/img
    this.clksearchinvti = page.locator("//span[contains(text(),'Search Investigation')]");
    this.finalabsorv = page.locator("//a[contains(text(),'Final Observation')]");
    this.comments = page.locator("//textarea[@name='comment']");
    this.clkaccept = page.locator("//button[normalize-space()='Accept']");
    this.clkinvinprogress =page.locator("//span[contains(text(),'Investigation In Progress')]");
    this.clkaction = page.locator("//img[@src='./assets/images/icon/edit.png']");
    this.clkInteractionManagement = page.locator("//a[normalize-space()='Interaction Management']");
    this.InteractionManagementcomt =page.locator("//textarea[@formcontrolname='interactionManagementSectionRemarks']");
    this.clksubmit = page.locator("//button[@type='button'][normalize-space()='Submit']");
    this.clksavebut = page.locator("//button[normalize-space()='Save']");
    this.clkinsuredvisit =page.locator("//a[normalize-space()='Insured Details']");
    this.clkyes =page.locator("//label[normalize-space()='Insured Visit']/following::input[@type='radio' and @value='Yes'][1]");
    this.Profession = page.locator("//textarea[contains(@formcontrolname,'profession')]");
    this.placeDuringAccident =page.locator("//textarea[@formcontrolname='placeDuringAccident']");
    this.informerAboutAccident =page.locator("//textarea[@formcontrolname='informerAboutAccident']");
    this.callReceivedMobileNumber =page.locator("//input[@formcontrolname='callReceivedMobileNumber']");
    this.vehicleType = page.locator("select[formcontrolname='vehicleType']");
    //this.previousOwnerName =page.locator("//textarea[@formcontrolname='previousOwnerName']");
    this.purchaseValue =page.locator("//input[@formcontrolname='purchaseValue']");
    this.clkyes2 =page.locator("//label[normalize-space()='Original RC Check']/following::input[@type='radio' and @value='Yes'][1]");
    this.neighbourWorkPlaceEnquires =page.locator("//textarea[@formcontrolname='neighbourWorkPlaceEnquires']");
  this.accidentInsuredVersion =page.locator("//textarea[@formcontrolname='accidentInsuredVersion']");
  this.insuredRemarks =page.locator("//textarea[@formcontrolname='insuredRemarks']");
  this.AccidentDetails =page.locator("//a[normalize-space()='Accident Details']");
  this.dateofloss =page.locator("//input[@placement='left']");
  this.date4.locator(".bs-datepicker-body td span:not(.is-other-month)", { hasText: '4' }).first();
  this.lossTime =page.locator("//input[@id='lossTime']");
  this.lossPlace =page.locator("//textarea[@formcontrolname='lossPlace']");
  this.travelPurpose =page.locator("//textarea[@formcontrolname='travelPurpose']");
  this.numberOfPersonTravelled =page.locator("//input[@formcontrolname='numberOfPersonTravelled']");
  this.gvw =page.locator("//textarea[contains(@formcontrolname,'gvw')]");
  
  
  
  
  }

  async Openapplication() {
    await this.page.goto('https://rsinvestigation.royalsundaram.net/master_ui/#/');
    await this.page.waitForTimeout(3000);
    await this.usernameInput.waitFor();
  }

  async LoginPagee(username, password) {
    await this.usernameInput.fill(username);
    await this.signupbt.click();
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.signupbt.click();
   
    
  }
async ODflow(claimnumber) {

    await this.odbut.click();
    await this.page.waitForTimeout(7000);
    await this.unassig.click();
    await this.page.waitForTimeout(3000);
    await this.allocateText.waitFor();
    await this.allocateText.scrollIntoViewIfNeeded();
    await this.allocateText.click();
    await this.stateDropdown.waitFor();
    await this.stateDropdown.selectOption({ label: 'MAHARASHTRA' });
    await this.investigatordropdown.selectOption({label: 'Nivrtee-DM217006'});
    await this.enterclaim.fill(claimnumber);
    await this.clksearch.click();
    await this.checkbox.click();
    await this.allocatetoinv.click();
    await this.clkokbut.click();
    await this.page.waitForTimeout(3000);
    await this.allocateClaimText.waitFor();
    await this.allocateClaimText.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(2000);
    
    await this.grid1.click();
    await this.clklogout.click();
}
    async Investigatorflow(username, password,claimnumber,cmt,mobilenumber,time) {
    await this.usernameInput.fill(username);
    await this.signupbt.click();
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.signupbt.click();
    await this.page.waitForTimeout(3000);
    await this.clksearchinvti.click();      //await this.acceptancepending.click();
    await this.enterclaim.fill(claimnumber);
    await this.clksearch.click();
    await this.eyeicon.click();
    await this.finalabsorv.click();
    await this.comments.fill(cmt);
    await this.clkaccept.click();
    await this.clkokbut.click();
    await this.clkinvinprogress.click();
    await this.enterclaim.fill(claimnumber);
    await this.clksearch.click();
    await this.clkaction.click();
    await this.clkInteractionManagement.click(); 
    await this.InteractionManagementcomt.fill(cmt);
    await this.clksubmit.click();
    await this.clksavebut.click();
    await this.clkinsuredvisit.click();
    await this.clkyes.click();
    await this.Profession.fill(cmt);
    await this.placeDuringAccident.fill(cmt);
    await this.informerAboutAccident.fill(cmt);
    await this.callReceivedMobileNumber.fill(mobilenumber);
    await this.vehicleType.selectOption({ label: 'New' });
    await this.purchaseValue.fill(cmt);
    await this.clkyes2.click();
    await this.neighbourWorkPlaceEnquires.fill(cmt);
    await this.accidentInsuredVersion.fill(cmt);
    await this.insuredRemarks.fill(cmt);
    await this.AccidentDetails.click();
    await this.dateofloss.click();
    await this.date4.click();
     await this.lossTime.fill(time);
     await this.lossPlace.fill(cmt);
     await this.travelPurpose.fill(cmt);
     await this.numberOfPersonTravelled.fill(mobilenumber);
     await this.gvw.fill(cmt);

    


    }


}

module.exports = { LoginPage };
