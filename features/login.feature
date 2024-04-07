@login
Feature: Login validations

  @successful-login
  Scenario Outline: Successful login to saucedemo webpage

    Given I open saucedemo website
    When I login with <username> and <password>
    Then I should login successfully and land on home page
    And I should be able to logout

    Examples:
      | username                  | password     |
      | standard_user             | secret_sauce |
      #| performance_glitch_user   | secret_sauce |

@failed-login
Scenario Outline: Failed login to saucedemo webpage

    Given I open saucedemo website
    When I login with <username> and <password>
    Then I should see an error message indicating login failure

    Examples:
      | username                  | password     |
      | locked_out_user           | secret_sauce |
