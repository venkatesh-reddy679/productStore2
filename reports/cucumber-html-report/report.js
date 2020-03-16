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
formatter.scenarioOutline({
  "line": 66,
  "name": "",
  "description": "Add each item to the cart",
  "id": "productstore--website;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 65,
      "name": "@TC06_ProductStore"
    }
  ]
});
formatter.step({
  "line": 69,
  "name": "if the user launch the website and login with \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "the user adds the items",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "click on cart and check if the items ared added or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 73,
  "name": "",
  "description": "",
  "id": "productstore--website;;",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "password"
      ],
      "line": 74,
      "id": "productstore--website;;;1"
    },
    {
      "cells": [
        "triveni reddy",
        "",
        "triveni reddy"
      ],
      "line": 75,
      "id": "productstore--website;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 75,
  "name": "",
  "description": "Add each item to the cart",
  "id": "productstore--website;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 65,
      "name": "@TC06_ProductStore"
    },
    {
      "line": 1,
      "name": "@ProductStore"
    }
  ]
});
formatter.step({
  "line": 69,
  "name": "if the user launch the website and login with triveni reddy and triveni reddy",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "the user adds the items",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "click on cart and check if the items ared added or not",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "triveni reddy",
      "offset": 46
    },
    {
      "val": "triveni reddy",
      "offset": 64
    }
  ],
  "location": "Cart_TestCase.cart_Test(String,String)"
});
formatter.result({
  "duration": 10381575434,
  "status": "passed"
});
formatter.match({
  "location": "Cart_TestCase.add()"
});
formatter.result({
  "duration": 39124939508,
  "status": "passed"
});
formatter.match({
  "location": "Cart_TestCase.check()"
});
formatter.result({
  "duration": 13931673511,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 78,
  "name": "",
  "description": "Add all phones  to the cart",
  "id": "productstore--website;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 77,
      "name": "@TC07_ProductStore"
    }
  ]
});
formatter.step({
  "line": 81,
  "name": "if the website is launched  and  login with \u003cusername\u003e , \u003cpassword\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 82,
  "name": "the user adds all phones",
  "keyword": "When "
});
formatter.step({
  "line": 83,
  "name": "click on cart and check all the phones are added or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 85,
  "name": "",
  "description": "",
  "id": "productstore--website;;",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "password"
      ],
      "line": 86,
      "id": "productstore--website;;;1"
    },
    {
      "cells": [
        "kavya raj",
        "",
        "kavya raj"
      ],
      "line": 87,
      "id": "productstore--website;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 87,
  "name": "",
  "description": "Add all phones  to the cart",
  "id": "productstore--website;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 77,
      "name": "@TC07_ProductStore"
    },
    {
      "line": 1,
      "name": "@ProductStore"
    }
  ]
});
formatter.step({
  "line": 81,
  "name": "if the website is launched  and  login with kavya raj , kavya raj",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 82,
  "name": "the user adds all phones",
  "keyword": "When "
});
formatter.step({
  "line": 83,
  "name": "click on cart and check all the phones are added or not",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "kavya raj",
      "offset": 44
    },
    {
      "val": "kavya raj",
      "offset": 56
    }
  ],
  "location": "Cart_TestCase.cart_Test1(String,String)"
});
formatter.result({
  "duration": 9263835055,
  "status": "passed"
});
formatter.match({
  "location": "Cart_TestCase.add1()"
});
formatter.result({
  "duration": 64462504381,
  "status": "passed"
});
formatter.match({
  "location": "Cart_TestCase.check1()"
});
formatter.result({
  "duration": 14849202491,
  "status": "passed"
});
});