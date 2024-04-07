@complete-order
Feature: Add Items to Cart and Complete Order

  @cart
  Scenario: Verify items in cart are retained after logout
    Given I am logged into the Sauce Demo website
    When I add random 3 items to the cart
    And I logout
    And I login again
    Then the previously added items should be in the cart
  @place-order
  Scenario: Verify user can place order
    Given I am logged into the Sauce Demo website
    When I add 2 items to the cart (one highest and one lowest)
    And I proceed to checkout information page
    Then input field validations should work for all form fields
    When I proceed to checkout overview page
    Then I should see the correct total price
    And I should be able to place the order successfully
    And I should see a confirmation message
    And I should be redirected to the home page
