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
    this.previousOwnerName =page.locator("//textarea[@formcontrolname='previousOwnerName']");
    this.purchaseValue =page.locator("//input[@formcontrolname='purchaseValue']");
    this.clkyes2 =page.locator("//label[normalize-space()='Original RC Check']/following::input[@type='radio' and @value='Yes'][1]");
    this.neighbourWorkPlaceEnquires =page.locator("//textarea[@formcontrolname='neighbourWorkPlaceEnquires']");
  this.accidentInsuredVersion =page.locator("//textarea[@formcontrolname='accidentInsuredVersion']");
  this.insuredRemarks =page.locator("//textarea[@formcontrolname='insuredRemarks']");
  this.AccidentDetails =page.locator("//a[normalize-space()='Accident Details']");
  this.dateofloss =page.locator("//input[@placement='left']");
  this.datee = page.locator(".bs-datepicker-body td span:not(.is-other-month)", { hasText: '4' }).first();
  this.lossTime =page.locator("//input[@id='lossTime']");
  this.lossPlace =page.locator("//textarea[@formcontrolname='lossPlace']");
  this.travelPurpose =page.locator("//textarea[@formcontrolname='travelPurpose']");
  this.numberOfPersonTravelled =page.locator("//input[@formcontrolname='numberOfPersonTravelled']");
  this.gvw =page.locator("//textarea[contains(@formcontrolname,'gvw')]");
  this.loadDetails =page.locator("//textarea[contains(@formcontrolname,'loadDetails')]");
  this.lossCause =page.locator("//textarea[contains(@formcontrolname,'lossCause')]");
  this.closeProximityCase =page.locator("//textarea[contains(@formcontrolname,'closeProximityCase')]");
  this.insurableInterest =page.locator("//textarea[contains(@formcontrolname,'insurableInterest')]");
  this.checkDetails =page.locator("//textarea[contains(@formcontrolname,'checkDetails')]");
  this.previousPolicyGenuiness =page.locator("//textarea[contains(@formcontrolname,'previousPolicyGenuiness')]");
  this.previousPolicyClaimDetails =page.locator("//textarea[contains(@formcontrolname,'previousPolicyClaimDetails')]");
  this.verificationDetails =page.locator("//textarea[contains(@formcontrolname,'verificationDetails')]");
  this.claimReportedPreviously =page.locator("//input[contains(@formcontrolname,'claimReportedPreviously') and contains(@value,'Yes')]");
  this.tollGateCrossed =page.locator("//input[contains(@formcontrolname,'tollGateCrossed') and contains(@value,'Yes')]");
  this.tollGateVisited =page.locator("//input[contains(@formcontrolname,'tollGateVisited') and contains(@value,'Yes')]");
  this.ifNotVisitedReason =page.locator("//textarea[contains(@formcontrolname,'ifNotVisitedReason')]");
  this.driverDlnumber =page.locator("//input[contains(@formcontrolname,'driverDlnumber')]");
  this.driverName =page.locator("//textarea[contains(@formcontrolname,'driverName')]");
  this.driverAddress1 =page.locator("//textarea[contains(@formcontrolname,'driverAddress1')]");
  this.cleanerName =page.locator("//textarea[contains(@formcontrolname,'cleanerName')]");
  this.cleanerMobileNumber =page.locator("//input[contains(@formcontrolname,'cleanerMobileNumber')]");
  this.cleanerAccidentVersion =page.locator("//textarea[contains(@formcontrolname,'cleanerAccidentVersion')]");
  this.driverRemarks =page.locator("//textarea[contains(@formcontrolname,'driverRemarks')]");
  this.driverVisit =page.locator("//input[contains(@formcontrolname,'driverVisit') and contains(@value,'No')]");
  this.authorizedToDrive =page.locator("//input[contains(@formcontrolname,'authorizedToDrive') and contains(@value,'No')]");
  this.issuingAuthority =page.locator("//input[contains(@formcontrolname,'issuingAuthority') and contains(@value,'No')]");
  this.driverDlAvailable =page.locator("//input[contains(@formcontrolname,'driverDlAvailable') and contains(@value,'Yes')]");
  this.driverDlValid =page.locator("//input[contains(@formcontrolname,'driverDlValid') and contains(@value,'Yes')]");
  this.originalDlChecked =page.locator("//select[contains(@formcontrolname,'originalDlChecked')]");
  this.driverAccidentVersion =page.locator("//textarea[contains(@formcontrolname,'driverAccidentVersion')]");
  this.hireReward =page.locator("//textarea[contains(@formcontrolname,'hireReward')]");
  this.spotVisit =page.locator("//input[contains(@formcontrolname,'spotVisit') and contains(@value,'No')]");
  this.cctvAvailable =page.locator("//input[contains(@formcontrolname,'cctvAvailable') and contains(@value,'No')]");
  this.footageChecked =page.locator("//input[contains(@formcontrolname,'footageChecked') and contains(@value,'No')]");
  this.cctvFootageCollected =page.locator("//input[contains(@formcontrolname,'cctvFootageCollected') and contains(@value,'No')]");
  this.checkedNearByShops =page.locator("//input[contains(@formcontrolname,'checkedNearByShops') and contains(@value,'No')]");
  this.spotPhotosWithLatLong =page.locator("//input[contains(@formcontrolname,'spotPhotosWithLatLong') and contains(@value,'No')]");
  this.garageVisited =page.locator("//input[contains(@formcontrolname,'garageVisited') and contains(@value,'No')]");
  this.towingPrefixSufix =page.locator("//input[contains(@formcontrolname,'towingPrefixSufix') and contains(@value,'No')]");
  this.jobCardGenerated =page.locator("//input[contains(@formcontrolname,'jobCardGenerated') and contains(@value,'Yes')]");
  this.vehicleHistoryCheck =page.locator("//input[contains(@formcontrolname,'vehicleHistoryCheck') and contains(@value,'Yes')]");
  this.vehicleTowed =page.locator("//input[contains(@formcontrolname,'vehicleTowed') and contains(@value,'Yes')]");
  this.gateEntryCheck =page.locator("//input[contains(@formcontrolname,'gateEntryCheck') and contains(@value,'Yes')]");
  this.InsuredDetails =page.locator("//a[contains(text(),'Insured Details')]");
  this.DriverDetails =page.locator("//a[contains(text(),'Driver Details')]");
  this.SpotVisitDetails =page.locator("//a[contains(text(),'Spot Visit Details')]");
  this.GarageVisitDetails =page.locator("//a[contains(text(),'Garage Visit Details')]");
  this.NextBut =page.locator("//button[@id='btnNext' and contains(text(),'Next')]");
  this.policeStationVisit =page.locator("//input[contains(@formcontrolname,'policeStationVisit') and contains(@value,'No')]");
  this.policeRemarks = page.locator("//textarea[contains(@formcontrolname,'policeRemarks')]")
  this.hospitalVisit =page.locator("//input[contains(@formcontrolname,'hospitalVisit') and contains(@value,'No')]");
  this.mlcArDone =page.locator("//input[contains(@formcontrolname,'mlcArDone') and contains(@value,'No')]");
  this.mlcArCollected =page.locator("//input[contains(@formcontrolname,'mlcArCollected') and contains(@value,'No')]");
  this.inCaseOfDeath =page.locator("//input[contains(@formcontrolname,'inCaseOfDeath') and contains(@value,'No')]");
  this.pmCollected =page.locator("//input[contains(@formcontrolname,'pmCollected') and contains(@value,'No')]");
  this.notVisitedReason =page.locator("//textarea[contains(@formcontrolname,'notVisitedReason')]");
  this.otherFindings =page.locator("//textarea[contains(@formcontrolname,'otherFindings')]");
  this.hospitalRemarks =page.locator("//textarea[contains(@formcontrolname,'hospitalRemarks')]");
  this.modeOfConveyance =page.locator("//select[contains(@formcontrolname,'modeOfConveyance')]");
  this.insuredStatement =page.locator("//input[contains(@formcontrolname,'insuredStatement') and contains(@value,'No')]");
  this.rcCopy =page.locator("//input[contains(@formcontrolname,'rcCopy') and contains(@value,'No')]");
  this.dlCopy =page.locator("//input[contains(@formcontrolname,'dlCopy') and contains(@value,'No')]");
  this.permitCopy =page.locator("//input[contains(@formcontrolname,'permitCopy') and contains(@value,'No')]");
  this.fitnessCopy =page.locator("//input[contains(@formcontrolname,'fitnessCopy') and contains(@value,'No')]");
  this.previousInsuranceCopy =page.locator("//input[contains(@formcontrolname,'previousInsuranceCopy') and contains(@value,'No')]");
  this.mlcArCopy =page.locator("//input[contains(@formcontrolname,'mlcArCopy') and contains(@value,'No')]");
  this.pmCopy =page.locator("//input[contains(@formcontrolname,'pmCopy') and contains(@value,'No')]");
  this.ddrCsrFirCopy =page.locator("//input[contains(@formcontrolname,'ddrCsrFirCopy') and contains(@value,'No')]");
  this.towingBillCopy =page.locator("//input[contains(@formcontrolname,'towingBillCopy') and contains(@value,'No')]");
  this.gateEntryRegisterCopy =page.locator("//input[contains(@formcontrolname,'gateEntryRegisterCopy') and contains(@value,'No')]");
  this.jobCardCopy =page.locator("//input[contains(@formcontrolname,'jobCardCopy') and contains(@value,'No')]");
  this.tollReceipt =page.locator("//input[contains(@formcontrolname,'tollReceipt') and contains(@value,'No')]");
  this.loadChallan =page.locator("//input[contains(@formcontrolname,'loadChallan') and contains(@value,'No')]");
  this.driverStatement =page.locator("//input[contains(@formcontrolname,'driverStatement') and contains(@value,'No')]");
  this.cleanerStatement =page.locator("//input[contains(@formcontrolname,'cleanerStatement') and contains(@value,'No')]");
  this.spotPhotos =page.locator("//input[contains(@formcontrolname,'spotPhotos') and contains(@value,'No')]");
  this.vehicleHistory =page.locator("//input[contains(@formcontrolname,'vehicleHistory') and contains(@value,'No')]");
  this.onlineCheckFir =page.locator("//input[contains(@formcontrolname,'onlineCheckFir') and contains(@value,'No')]");
  this.numberOfVisits =page.locator("//input[contains(@formcontrolname,'numberOfVisits')]");
  this.findings =page.locator("//textarea[contains(@formcontrolname,'findings')]");
  this.evidenceCollected =page.locator("//textarea[contains(@formcontrolname,'evidenceCollected')]");
  this.caseComments =page.locator("//textarea[contains(@formcontrolname,'caseComments')]");
  this.senttoio =page.locator("//button[contains(text(),'Sent to IO')]");
  this.logoutinv = page.locator("//p[contains(text(),' NIVRTEE-DM217006 ')]");



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
    await this.InsuredDetails.click();
    await this.clkinsuredvisit.click();
    await this.clkyes.click();
    await this.Profession.fill(cmt);
    await this.placeDuringAccident.fill(cmt);
    await this.informerAboutAccident.fill(cmt);
   // date
    await this.callReceivedMobileNumber.fill(mobilenumber);
    await this.vehicleType.selectOption({ label: 'New' });
    await this.previousOwnerName.fill();/
    await this.purchaseValue.fill(cmt);
    await this.clkyes2.click();
    await this.neighbourWorkPlaceEnquires.fill(cmt);
    await this.accidentInsuredVersion.fill(cmt);
    await this.insuredRemarks.fill(cmt);
    await this.clksavebut.click();
    await this.AccidentDetails.click();
    await this.dateofloss.click();
    await this.datee.click();
     await this.lossTime.fill(time);
     await this.lossPlace.fill(cmt);
     await this.travelPurpose.fill(cmt);
     await this.numberOfPersonTravelled.fill(mobilenumber);
     await this.gvw.fill(cmt);
      date
    date
     await this.loadDetails.fill(cmt);
     await this.lossCause.fill(cmt);
     await this.closeProximityCase.fill(cmt);
     await this.insurableInterest.fill(cmt);
     await this.checkDetails.fill(cmt);
     await this.previousPolicyGenuiness.fill(cmt);
     date
     date
     await this.claimReportedPreviously.click();
     await this.previousPolicyClaimDetails.fill(cmt);
     await this.tollGateCrossed.click();
     await this.tollGateVisited.click();
     await this.verificationDetails.fill(cmt);
     await this.clksavebut.click();
     await this.DriverDetails.click();
     await this.driverVisit.click();
     await this.ifNotVisitedReason.fill(cmt);
     await this.driverDlAvailable.click();
     await this.driverDlnumber.fill(cmt);
     date
     await this.driverName.fill(cmt);
     await this.driverAddress1.fill(cmt);
     date
     date
     await this.driverDlValid.click();
     await this.authorizedToDrive.click();
     await this.originalDlChecked.selectOption({ label: "No" });
     await this.issuingAuthority.click();
     await this.cleanerName.fill(cmt);
     await this.cleanerMobileNumber.fill(cmt);
     await this.cleanerAccidentVersion.fill(cmt);
     await this.driverAccidentVersion.fill(cmt);
     await this.driverRemarks.fill(cmt);
     await this.clksavebut.click();
     await this.SpotVisitDetails.click();
     await this.spotVisit.click();
     await this.hireReward.fill(cmt);
     await this.cctvAvailable.click();
     await this.footageChecked.click();
     await this.cctvFootageCollected.click();
     await this.checkedNearByShops.click();
     await this.spotPhotosWithLatLong.click();
     await this.clksavebut.click();
     await this.GarageVisitDetails.click();
     await this.garageVisited.click();
     await this.jobCardGenerated.click();
     date
     await this.gateEntryCheck.click();
     date
     await this.vehicleHistoryCheck.click();
     await this.vehicleTowed.click();
     date
     await this.towingPrefixSufix.click();
     await this.clksavebut.click();
     await this.NextBut.click();
     await this.policeStationVisit.click();
     await this.policeRemarks.fill(cmt);
     await this.clksavebut.click();
     await this.NextBut.click();

     await this.hospitalVisit.click();
     await this.notVisitedReason.fill(cmt);
     await this.modeOfConveyance.selectOption({ label: "Others" });
     await this.mlcArDone.click();
    await this.mlcArCollected.click();
    await this.inCaseOfDeath.click();
    await this.pmCollected.click();
    await this.otherFindings.fill(cmt);
    await this.hospitalRemarks.fill(cmt);
    await this.clksavebut.click();
    await this.NextBut.click();
    await this.NextBut.click();

    await this.insuredStatement.click();
    await this.rcCopy.click();
    await this.dlCopy.click();
    await this.permitCopy.click();
    await this.fitnessCopy.click();
    await this.previousInsuranceCopy.click();
    await this.mlcArCopy.click();
    await this.pmCopy.click();
    await this.ddrCsrFirCopy.click();
    await this.towingBillCopy.click();
    await this.gateEntryRegisterCopy.click();
    await this.jobCardCopy.click();
    await this.tollReceipt.click();
    await this.loadChallan.click();
    await this.driverStatement.click();
    await this.cleanerStatement.click();
    await this.spotPhotos.click();
    await this.vehicleHistory.click();
    await this.onlineCheckFir.click();
    await this.clksavebut.click();
    await this.NextBut.click();
    await this.NextBut.click();
    await this.NextBut.click();

    await this.numberOfVisits.fill(time);
    date
    await this.findings.fill(cmt);
    await this.evidenceCollected.fill(cmt);
    await this.clksavebut.click();
    await this.NextBut.click();

    await this.caseComments.fill(cmt);
    await this.senttoio.click();
    await this.clkokbut.click();
    await this.page.waitForTimeout(3000);
    await this.allocateClaimText.waitFor();
    await this.allocateClaimText.scrollIntoViewIfNeeded();
    await this.logoutinv.click();
    await this.clklogout.click();

    }

   async IoAcceptance(username,password) {
  
    await this.usernameInput.fill(username);
    await this.signupbt.click();
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.signupbt.click();
    

   }



    }

module.exports = { LoginPage };
