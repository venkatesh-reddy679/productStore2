package com.testCases;

import com.pages.SignUp_Page;
import com.utilities.WrapperClass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SignUp_TestCase extends WrapperClass {

	SignUp_Page signUp_Page;

//// signp with valid details........................................................

	@Given("^when the user launch the chrome and application$")
	public void start() {
		launchBrowser("chrome", "https://www.demoblaze.com/");
		signUp_Page = new SignUp_Page(driver);
	}

	@When("^the user clicks on signup link$")
	public void click_SingUp() throws InterruptedException {
		click_signUp();
	}

	@Then("^the user enters (.+) and (.+)$")
	public void enter_Details(String username,String password) {
		signUp_Page.userName(username);
		signUp_Page.password(password);

	}

	@Then("^the user clicks signup button$")
	public void submit() throws InterruptedException {
		signUp_Page.signup("Sign up successful.");
		Thread.sleep(2000);
		quit();
	}

//// signup with duplicate details...................................................

	@Given("^if the user launch the chrome and application ,duplicate$")
	public void start1() {
		launchBrowser("chrome", "https://www.demoblaze.com/");
		signUp_Page = new SignUp_Page(driver);
	}

	@When("^the user clicks on signup link ,duplicate$")
	public void click_SingUp1() throws InterruptedException {
		click_signUp();
	}

	@Then("^the user enters (.+),(.+) ,duplicate$")
	public void enter_Details1(String username,String password) {
		signUp_Page.userName(username);
		signUp_Page.password(password);


	}

	@Then("^the user clicks signup button ,duplicate$")
	public void submit1() throws InterruptedException {
		signUp_Page.signup("This user already exist.");
		Thread.sleep(2000);
		quit();
	}

	

}
