package com.testCases;

import com.pages.Contact_Page;
import com.pages.Login_Page;
import com.pages.OrderItem_Page;
import com.utilities.WrapperClass;

import cucumber.api.java.en.Given;

public class Contact_TestCase  extends WrapperClass{
	
	Contact_Page contact_Page;
	@Given("^the user launch the application and login into the application$")
	public void beforeEach() throws InterruptedException {
		launchBrowser("chrome", "https://www.demoblaze.com");
		contact_Page = new Contact_Page(driver);
		Login_Page login_Page = new Login_Page(driver);
		login_Page.click_LogIn();
		login_Page.userid("naveen");
		Thread.sleep(2000);
		login_Page.pass("naveen");
		login_Page.log_in();
		Thread.sleep(2000);
	}
	
	@When("the user clicks the contact link")
	public void contact() {
		
	}

}
