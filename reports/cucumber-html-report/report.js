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
  "line": 30,
  "name": "",
  "description": "Add items to the cart and place order",
  "id": "productstore--website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@TC04_ProductStore"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "if the user launch the website and login and",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "the user clicks on cart and  count no of items and",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "click on place order and verify the purchase",
  "keyword": "Then "
});
formatter.match({
  "location": "OrderItem_TestCase.beforeEach()"
});
formatter.result({
  "duration": 65405268934,
  "status": "passed"
});
formatter.match({
  "location": "OrderItem_TestCase.checkItem()"
});
formatter.result({
  "duration": 44461246055,
  "status": "passed"
});
formatter.match({
  "location": "OrderItem_TestCase.order()"
});
formatter.result({
  "duration": 7475114707,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "",
  "description": "Add items to the cart and place order",
  "id": "productstore--website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@TC05_ProductStore"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "if the user launches the website and clicks login and",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "the user click on cart and  count number of items and",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "click on place order and then  verify the purchase",
  "keyword": "Then "
});
formatter.match({
  "location": "OrderItem_TestCase.beforeEach1()"
});
formatter.result({
  "duration": 26532623643,
  "status": "passed"
});
formatter.match({
  "location": "OrderItem_TestCase.checkItem1()"
});
formatter.result({
  "duration": 49812541481,
  "status": "passed"
});
formatter.match({
  "location": "OrderItem_TestCase.order1()"
});
formatter.result({
  "duration": 7517911526,
  "status": "passed"
});
});