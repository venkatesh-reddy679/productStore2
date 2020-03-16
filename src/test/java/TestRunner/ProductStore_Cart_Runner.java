package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = ".\\src\\main\\resources\\feature\\testcase.feature",
		plugin = {"pretty", "html:reports/cucumber-html-report"},
		tags = {"@TC06_ProductStore,@TC07_ProductStore"},
				
		glue = {"com.testCases"},
		monochrome = true
		) 
public class ProductStore_Cart_Runner {

}
