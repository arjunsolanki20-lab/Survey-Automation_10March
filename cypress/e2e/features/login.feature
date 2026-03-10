Feature: Login functionality
  Background: Background name

  @LO_001
  Scenario: LO_001 Verify Survey Maker Login Functionality
    Given User logs in as "surveyMaker"

  @LO_002
  Scenario: LO_002 Verify Survey Maker Logout Functionality
    Given User logs in as "surveyMaker"
    When click on logout
    Then user is logged out successfully





