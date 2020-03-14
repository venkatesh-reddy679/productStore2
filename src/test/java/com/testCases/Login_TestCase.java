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

	@Given("^the user launch the chrome application$")
	public void beforeEach() {
		launchBrowser("chrome", "https://www.demoblaze.com");
		login_Page = new Login_Page(driver);
	}

	// valid login

	@When("^the user open the ProductStore Home page$")
	public void login() {
		login_Page.click_LogIn();
	}

	@Then("^the user login using username and password$")
	public void enter_Details() throws IOException, InterruptedException {
		Excel_Login_Data data = new Excel_Login_Data();
		login_Page.userid("naveen");
		// read the username from excelsheet
		login_Page.pass("naveen");
		// read the password from excelsheet

	}

	@Then("^click on the login button user nagivate to the next page$")
	public void click_LogIn() throws InterruptedException {
		login_Page.log_in();
		login_Page.verify_Account("Welcome naveen");
		
	}

	// Invalid login

	@Given("^if user launch the chrome application and$")
	public void beforeEach1() {
		launchBrowser("chrome", "https://www.demoblaze.com");
		login_Page = new Login_Page(driver);
	}

	@When("^if user open the ProductStore Home page  and$")
	public void login2() {
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

}
