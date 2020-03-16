@ProductStore
Feature: ProductStore  Website

  @TC01_ProductStore
  Scenario Outline: 
    Signup in the ProductStore

    Given when the user launch the chrome and application
    When the user clicks on signup link
    Then the user enters <username> and <password>
    Then the user clicks signup button

    Examples: 
      | username      |  | password      |
      | triveni reddy |  | triveni reddy |
      | kavya raj     |  | kavya raj     |

  @TC02_ProductStore
  Scenario Outline: 
    Signup in with duplicate details in the ProductStore

    Given if the user launch the chrome and application ,duplicate
    When the user clicks on signup link ,duplicate
    Then the user enters <username>,<password> ,duplicate
    Then the user clicks signup button ,duplicate

    Examples: 
      | username      |  | password      |
      | triveni reddy |  | triveni reddy |

  @TC03_ProductStore
  Scenario Outline: 
    Login in the ProductStore

    Given the user launch the chrome application
    When the user open the ProductStore Home page
    Then the user login using <username> and <password>
    Then click on the login button user nagivate to the next page

    Examples: 
      | username      |  | password      |
      | triveni reddy |  | triveni reddy |

  @TC04_ProductStore
  Scenario Outline: 
    Login in the ProductStore using Invalid details

    Given if user launch the chrome application and
    When if user open the ProductStore Home page and
    Then if user login using  Invalid <username> and <password> and
    Then click on the login button, user  should not nagivate to the next page

    Examples: 
      | username       |  | password       |
      | triveni reddy1 |  | triveni reddy1 |

  @TC05_ProductStore
  Scenario: 
    Login in the ProductStore without details

    Given when user launches the chrome application and
    When when user opens the ProductStore Home page and
    Then by clicking on the login button user  should not nagivate to the next page

  @TC06_ProductStore
  Scenario Outline: 
    Add each item to the cart

    Given if the user launch the website and login with <username> and <password>
    When the user adds the items
    Then click on cart and check if the items ared added or not

    Examples: 
      | username      |  | password      |
      | triveni reddy |  | triveni reddy |

  @TC07_ProductStore
  Scenario Outline: 
    Add all phones  to the cart

    Given if the website is launched  and  login with <username> , <password>
    When the user adds all phones
    Then click on cart and check all the phones are added or not
    
    Examples: 
      | username      |  | password      |
      | kavya raj     |  | kavya raj     |

  @TC08_ProductStore
  Scenario: 
    Add items to the cart and place order

    Given if the user launch the website and login and
    When the user clicks on cart and  count no of items and
    Then click on place order and verify the purchase

  @TC09_ProductStore
  Scenario: 
     do not add items to the cart and place order

    Given if the user launches the website and clicks login and
    When the user click on cart and  count number of items and
    Then click on place order and then  verify the purchase

  @TC10_ProductStore
  Scenario: 
    enter email,name,message and click send

    Given the user launch the application and login into the application
    When the user clicks the contact link
    Then the user enters contact email
    Then the user enters contact name
    Then user enters message and click submit button

  @TC11_ProductStore
  Scenario: 
    enter email,name,message and click cancel

    Given if user launch the application and login into the application and
    When if user clicks the contact link and
    Then if user enters contact email and
    Then if user enters contact name and
    Then user enters message then click cancel button
