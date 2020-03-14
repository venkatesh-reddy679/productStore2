@ProductStore
Feature: ProductStore  Website

  @TC01_ProductStore
  Scenario: 
    Login in the ProductStore

    Given the user launch the chrome application
    When the user open the ProductStore Home page
    Then the user login using username and password
    Then click on the login button user nagivate to the next page

  @TC02_ProductStore
  Scenario: 
    Login in the ProductStore using Invalid details

    Given if user launch the chrome application and
    When if user open the ProductStore Home page  and
    Then if user login using  Invalid username and password and
    Then click on the login button, user  should not nagivate to the next page

  @TC03_ProductStore
  Scenario: 
    Add items to the cart

    Given if the user launch the website and login
    When the user adds the items
    Then click on cart and check if the items ared added or not

  @TC04_ProductStore
  Scenario: 
    Add items to the cart and place order

    Given if the user launch the website and login and
    When the user clicks on cart and  count no of items and
    Then click on place order and verify the purchase

  @TC05_ProductStore
  Scenario: 
     do not add items to the cart and place order

    Given if the user launches the website and clicks login and
    When the user click on cart and  count number of items and
    Then click on place order and then  verify the purchase
    
    
  @TC06_ProductStore
  Scenario:
    enter email,name,message and send click
    
    Given the user launch the application and login into the application
    When the user clicks the contact link
    Then the user enters contact email
    Then the user enters contact name
    Then user enters message and click submit button
