@order-validation
Feature: Items Sort Order Validations
  
  @sort-order
  Scenario: Verify default sort order
    Given I am logged into the Sauce Demo website
    Then the items should be displayed in default sort order

  @change-sorttype
  Scenario: Verify user can change sort order
    Given I am logged into the Sauce Demo website
    When I change the sort order to "Price (high to low)"
    Then the items should be sorted by price from high to low