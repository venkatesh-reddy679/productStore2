@ProductStore
Feature: ProductStore  Website

  @TC01_ProductStore
  Scenario: 
    Signup in the ProductStore

    Given when the user launch the chrome and application
    When the user clicks on signup link
    Then the user enters username and password
    Then the user clicks signup button

  @TC02_ProductStore
  Scenario: 
    Signup in with duplicate details in the ProductStore

    Given if the user launch the chrome and application ,duplicate
    When the user clicks on signup link ,duplicate
    Then the user enters username,password ,duplicate
    Then the user clicks signup button ,duplicate

  @TC03_ProductStore
  Scenario: 
    Signup without entering any details

    Given by launching the chrome and website
    When by clicking on signup link
    Then without entering username,password,click signup button

  @TC04_ProductStore
  Scenario: 
    Login in the ProductStore

    Given the user launch the chrome application
    When the user open the ProductStore Home page
    Then the user login using username and password
    Then click on the login button user nagivate to the next page

  @TC05_ProductStore
  Scenario: 
    Login in the ProductStore using Invalid details

    Given if user launch the chrome application and
    When if user open the ProductStore Home page and
    Then if user login using  Invalid username and password and
    Then click on the login button, user  should not nagivate to the next page

  @TC06_ProductStore
  Scenario: 
    Login in the ProductStore without details

    Given when user launches the chrome application and
    When when user opens the ProductStore Home page and
    Then by clicking on the login button user  should not nagivate to the next page

  @TC07_ProductStore
  Scenario: 
    Login in the ProductStore with username only

    Given when user launches the chrome application then
    When when user opens the ProductStore Home page then
    Then by entering only username and clicking login button
    Then user  should not nagivate to the next page
    
    @TC08_ProductStore
  Scenario: 
    Login in the ProductStore with password only

    Given if user launches the chrome application then
    When if user opens the ProductStore Home page then
    Then by entering only password and clicking login button
    Then user  should not nagivate to the next page,should remain in same page

  @TC09_ProductStore
  Scenario: 
    Add each item to the cart

    Given if the user launch the website and login
    When the user adds the items
    Then click on cart and check if the items ared added or not

  @TC10_ProductStore
  Scenario: 
    Add all phones  to the cart

    Given if the website is launched  and  login
    When the user adds all phones
    Then click on cart and check all the phones are added or not

  @TC11_ProductStore
  Scenario: 
    Add all laptops to the cart

    Given if the website is launched , login
    When the user adds all laptops
    Then click on cart and check all the laptops are added or not

  @TC12_ProductStore
  Scenario: 
    Add all monitors to the cart

    Given if the website is launched , login then
    When the user adds all monitors
    Then click on cart and check all the monitors are added or not

  @TC013_ProductStore
  Scenario: 
    Add items to the cart and place order

    Given if the user launch the website and login and
    When the user clicks on cart and  count no of items and
    Then click on place order and verify the purchase

  @TC14_ProductStore
  Scenario: 
     do not add items to the cart and place order

    Given if the user launches the website and clicks login and
    When the user click on cart and  count number of items and
    Then click on place order and then  verify the purchase

  @TC15_ProductStore
  Scenario: 
    enter email,name,message and click send

    Given the user launch the application and login into the application
    When the user clicks the contact link
    Then the user enters contact email
    Then the user enters contact name
    Then user enters message and click submit button

  @TC16_ProductStore
  Scenario: 
    enter email,name,message and click cancel

    Given if user launch the application and login into the application and
    When if user clicks the contact link and
    Then if user enters contact email and
    Then if user enters contact name and
    Then user enters message then click cancel button
