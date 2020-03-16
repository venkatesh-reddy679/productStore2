package com.testCases;

import java.io.IOException;

import org.junit.AfterClass;
import org.junit.BeforeClass;

import com.data.Excel_Login_Data;
import com.pages.Login_Page;
import com.utilities.WrapperClass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login_TestCase extends WrapperClass {
	Login_Page login_Page;
	Excel_Login_Data data = new Excel_Login_Data();
	@Given("^the user launch the chrome application$")
	public void beforeEach() {
		launchBrowser("chrome", "https://www.demoblaze.com");
		login_Page = new Login_Page(driver);
	}
	/////////valid login.......................................................................

	@When("^the user open the ProductStore Home page$")
	public void login() {
		login_Page.click_LogIn();
	}

	@Then("^the user login using username and password$")
	public void enter_Details() throws IOException, InterruptedException {
		Excel_Login_Data data = new Excel_Login_Data();
		login_Page.userid("naveen");
		
		login_Page.pass("naveen");
		

	}

	@Then("^click on the login button user nagivate to the next page$")
	public void click_LogIn() throws InterruptedException {
		login_Page.log_in();
		login_Page.verify_Account("Welcome naveen");
		Thread.sleep(3000);
		click_logOut();
		quit();
		
	}

//////// Invalid login.....................................................................

	@Given("^if user launch the chrome application and$")
	public void beforeEach1() {
		launchBrowser("chrome", "https://www.demoblaze.com");
		login_Page = new Login_Page(driver);
	}

	@When("^if user open the ProductStore Home page and$")
	public void login1() {
		login_Page.click_LogIn();
	}

	@Then("^if user login using  Invalid username and password and$")
	public void enter_Details1() throws IOException, InterruptedException {

		Excel_Login_Data data = new Excel_Login_Data();

		login_Page.userid("venky7");
		// read the username from excelsheet // lpage.next();
		login_Page.pass("venky1234");
		// read the password from excelsheet }
	}

	@Then("^click on the login button, user  should not nagivate to the next page$")
	public void click_LogIn1() throws InterruptedException {
		login_Page.log_in();
		login_Page.invalid_verify("User does not exist.");
		quit();

	}
	
	
	///////////////////////login without details..................................

	@Given("^when user launches the chrome application and$")
	public void beforeEach2() {
		launchBrowser("chrome", "https://www.demoblaze.com");
		login_Page = new Login_Page(driver);
	} 
	@When("^when user opens the ProductStore Home page and$")
	public void login2() throws InterruptedException{
		login_Page.click_LogIn();
		Thread.sleep(2000);
		login_Page.log_in();
	}

	
	@Then("^by clicking on the login button user  should not nagivate to the next page$")
	public void click_LogIn2() throws InterruptedException {
		
		Thread.sleep(2000);
		login_Page.invalid_verify("Please fill out Username and Password.");
		quit();
		
	}
	//////////////////////login with username.........................................

	@Given("^when user launches the chrome application then$")
	public void beforeEach3() {
		launchBrowser("chrome", "https://www.demoblaze.com");
		login_Page = new Login_Page(driver);
	}

	@When("^when user opens the ProductStore Home page then$")
	public void login3() {
		login_Page.click_LogIn();
	}

	@Then("^by entering only username and clicking login button$")
	public void enter_Details3() throws IOException, InterruptedException {

		Excel_Login_Data data = new Excel_Login_Data();

		login_Page.userid("naveen");
		
		login_Page.pass("");
		
		login_Page.log_in();
	}

	@Then("^user  should not nagivate to the next page$")
	public void click_LogIn3() throws InterruptedException {
		
		login_Page.invalid_verify("Please fill out Username and Password.");
		quit();

	}
	/////// login with password .....................................................
	
	@Given("^if user launches the chrome application then$")
	public void beforeEach4() {
		launchBrowser("chrome", "https://www.demoblaze.com");
		login_Page = new Login_Page(driver);
	}

	@When("^if user opens the ProductStore Home page then$")
	public void login4() {
		login_Page.click_LogIn();
	}

	@Then("^by entering only password and clicking login button$")
	public void enter_Details4() throws IOException, InterruptedException {

		Excel_Login_Data data = new Excel_Login_Data();

		login_Page.userid("");
		
		login_Page.pass("naveen");
		
		login_Page.log_in();
	}

	@Then("^user  should not nagivate to the next page,should remain in same page$")
	public void click_LogIn4() throws InterruptedException {
		
		login_Page.invalid_verify("Please fill out Username and Password.");
		quit();
	}
}
