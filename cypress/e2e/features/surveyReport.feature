Feature: Survey Report

  Background: Background name

  @SR_001
  Scenario: SR_001 Verify search with valid survey name
    Given User logs in as "surveyMaker"
    When the user click on survey
    When the user searches for a valid survey name in the Survey Report
    Then only the matching survey record should be displayed
    When Back to dashboard and click on logout

  @SR_002
  Scenario: SR_002 Verify Survey Submission from user End
    Given User logs in as "surveyMaker"
    Given the user is on the Survey List page
    When the user creates a new survey by filling all mandatory details
      | Name        | Sample Survey    |
      | Department  | Administration   |
      | Language    | English          |
      | Expiry Date | 2026-12-25       |
      | Wait Period | 5                |
      | Description | Test survey desc |
    Then the survey configuration page should be displayed
    When the user adds a new question with radio button type
      | Title   | Do you agree?      |
      | Type    | Radio Button Group |
      | Options | Yes, No, Maybe     |
    And previews the survey
    And submits the survey for review
    Then a success message "Survey added and sent for review successfully!" should be displayed
    When Back to dashboard and click on logout
    When User logs in as "surveyChecker"
    Given the user is on the Survey List page
    When click on 3 dot menu of added survey name and approve the request
    When Back to dashboard and click on logout
    When User logs in as "surveyMaker"
    When go to survey schedule and add basic details
      | Schedule Name | scheduleName  |
      | Select Survey | Sample Survey |
      | Date          | 2026-12-24    |
      | Time          | 14:44         |
      | Link Expiry   | 1             |
    When add channel details
    Then upload file to upload participants
    When Back to dashboard and click on logout
    When User logs in as "surveyChecker"
    When go to survey schedule list
    When click on three dot menu of survey schedule
    When generate link
    When click on participants tab
    When submit the survey
    Given User logs in as "surveyChecker"
    When go to survey schedule list
    When open the scheduled survey
    When click on participants tab
    Then survey response status should be submitted

  @SR_003
  Scenario: SR_003 Verify applying name filter in Survey Report
    Given User logs in as "surveyMaker"
    When the user click on survey
    And the user clicks on the Filter
    Then the filter operator options should be displayed successfully

  @SR_004
  Scenario: SR_004 Verify count Per Page  Changes as User change Total Page from Header
    Given User logs in as "surveyMaker"
    When the user click on survey
    Then Observe Count per page at bottom is 20
    Then Navigate to header menu and change total page to 50
    Then Observe Count per page at bottom is 50

  @SR_005
  Scenario: SR_005 Verify count Per Page  Changes as User change Total Page from Header
    Given User logs in as "surveyMaker"
    When the user click on survey
    Then Observe Count per page at bottom is 20
    Then User click on onward navigation arrow
    Then User click on return navigation arrow

  @SR_006
  Scenario: SR_006 Verify navigation to Survey Report Detail page
    Given User logs in as "surveyMaker"
    When the user click on survey
    Then user click any listing item
    Then Overview details should be visible

  @SR_007
  Scenario: SR_007 Verify total survey recipients count displayed
    Given User logs in as "surveyMaker"
    When the user click on survey
    Then user click any listing item
    Then Overview details should be visible
    Then Total Total Survey Recipient should be visible and have count

  @SR_008
  Scenario: SR_008 Verify date picker allows valid date selection
    Given User logs in as "surveyMaker"
    When the user click on survey
    Then user click any listing item
    Then Overview details should be visible
    Then user should be able to select the date range

  @SR_009
  Scenario: SR_009 Verify data display submitted by each respondent
    Given User logs in as "surveyMaker"
    When the user click on survey
    Then user click any listing item
    And the user clicks on the "Table" tab
    Then the answers should be visible in the Question table

  @SR_010
  Scenario: SR_010 Verify CSV Download
    Given User logs in as "surveyMaker"
    When the user click on survey
    Then user click any listing item
    Then Overview details should be visible
    And the user clicks on the "Table" tab
    Then Click on CSV export button

  @SR_011
  Scenario: SR_011 Verify PDF Download
    Given User logs in as "surveyMaker"
    When the user click on survey
    Then user click any listing item
    Then Overview details should be visible
    And the user clicks on the "Table" tab
    Then Click on PDF export button

  @SR_012
  Scenario: SR_012 Verify Excel Download
    Given User logs in as "surveyMaker"
    When the user click on survey
    Then user click any listing item
    Then Overview details should be visible
    And the user clicks on the "Table" tab
    Then Click on Excel export button

  @SR_013
  Scenario: SR_013 Verify  Participant Survey Response Details Panel for Submitted Status
    Given User logs in as "surveyMaker"
    When the user click on survey
    Then user click any listing item
    Then Overview details should be visible
    Then User go to Participants Table
    Then Response Status is "Submitted" or "Partially Completed"

  @SR_014
  Scenario: SR_014 Verify  Participant Survey Response Details Panel for Partially Completed Status
    Given User logs in as "surveyMaker"
    When the user click on survey
    Then only the matching survey record should be displayed

  @SR_015
  Scenario: SR_015 Verify Reset Filter button functionality
    Given User logs in as "surveyMaker"
    When the user click on survey
    Then user click any listing item
    Then Overview details should be visible
    Then user should be able to select the date range
    Then click on Reset Filter

  @SR_016
  Scenario: SR_016 Verify language change updates UI
    Given User logs in as "surveyMaker"
    When the user click on survey
    Then user click any listing item
    Then Overview details should be visible
    Then Select Arebic Language from dropdown


  @SR_017
  Scenario: SR_017 Verify all questions are listed in Summary
    Given User logs in as "surveyMaker"
    When the user click on survey
    Then user click any listing item
    Then Overview details should be visible
    Then User navigate to Summary Tab
    Then observe all questions listed under Summary Tab

  @SR_018
  Scenario: SR_018 Verify chart type dropdown availability for each question
    Given User logs in as "surveyMaker"
    When the user click on survey
    Then user click any listing item
    Then Overview details should be visible
    Then Click on Chart Type from dropdown
    Then Bar, Vertical Bar, Pie and Doughnut types are visible in dropdown

  @SR_019
  Scenario: SR_019 Verify second dropdown appears when Bar chart is selected
    Given User logs in as "surveyMaker"
    When the user click on survey
    Then user click any listing item
    Then Overview details should be visible
    Then Click on Chart Type from dropdown
    Then Bar, Vertical Bar, Pie and Doughnut types are visible in dropdown
    Then Observe order dropdown enables and Default Order is selected

  @SR_020
  Scenario: SR_020 Verify chart updates according to selected chart type
    Given User logs in as "surveyMaker"
    When the user click on survey
    Then user click any listing item
    Then Overview details should be visible
    Then Click on Chart Type from dropdown
    Then Bar, Vertical Bar, Pie and Doughnut types are visible in dropdown
    Then Select Bar, Vertical Bar, Pie and Doughnut sequentially

  @SR_021
  Scenario: SR_021 Verify "Not Taken" count accuracy on grid/list level
    Given User logs in as "surveyMaker"
    When the user click on survey
    Then User notes the Total Participants, Submitted, Partially Completed counts from the grid and verifies that the "Not Taken" count is displayed correctly

  @SR_022
  Scenario: SR_022 Verify "Submitted" count accuracy on Survey Overview Tab
    Given User logs in as "surveyMaker"
    When the user click on survey
    Then user click on first listing item from Survey Name column
    Then Overview details should be visible
    Then Check Submitted Stat available under overview Tab

  @SR_023
  Scenario: SR_023 Verify "Partially Completed" count accuracy on grid/list level
    Given User logs in as "surveyMaker"
    When the user click on survey
    Then Observe 'Partially completed' column value for the same survey report which we created
    Then Overview details should be visible
    Then Check Partially completed Stat available under overview Tab

  @SR_024
  Scenario: SR_024 Verify "Partially Completed" count accuracy in Overview tab
    Given User logs in as "surveyMaker"
    When the user click on survey
    Then user click on first listing item from Survey Name column
    Then Overview details should be visible
    Then Check Partiallycompleted Stat available under overview Tab

  @SR_025
  Scenario: SR_025 Verify calculation of average time taken to complete the survey
    Given User logs in as "surveyMaker"
    When the user click on survey
    Then user click on first listing item from Survey Name column
    Then Overview details should be visible
    Then Check Average time taken