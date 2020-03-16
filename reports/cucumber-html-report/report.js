$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/main/resources/feature/testcase.feature");
formatter.feature({
  "line": 2,
  "name": "ProductStore  Website",
  "description": "",
  "id": "productstore--website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ProductStore"
    }
  ]
});
formatter.scenario({
  "line": 31,
  "name": "",
  "description": "Login in the ProductStore",
  "id": "productstore--website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@TC04_ProductStore"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "the user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "the user open the ProductStore Home page",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "the user login using username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "click on the login button user nagivate to the next page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_TestCase.beforeEach()"
});
formatter.result({
  "duration": 10090658100,
  "status": "passed"
});
formatter.match({
  "location": "Login_TestCase.login()"
});
formatter.result({
  "duration": 217104200,
  "status": "passed"
});
formatter.match({
  "location": "Login_TestCase.enter_Details()"
});
formatter.result({
  "duration": 636636800,
  "status": "passed"
});
formatter.match({
  "location": "Login_TestCase.click_LogIn()"
});
formatter.result({
  "duration": 11908822500,
  "status": "passed"
});
});