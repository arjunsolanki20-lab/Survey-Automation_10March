Feature: End to End functionality

  @ETE_001
  Scenario: ETE_001 Verify Survey Maker Login Functionality
    Given User logs in as "surveyMaker"

  @ETE_002
  Scenario: ETE_002 Verify Survey Maker Logout Functionality
    Given User logs in as "surveyMaker"
    When click on logout

  @ETE_003
  Scenario: ETE_003 Verify that user is able to navigate to the Configuration page after filling all mandatory fields in Basic Details
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

  @ETE_004
  Scenario: ETE_004 Verify Survey checker is able to Approve the Survey which is in "In review" status
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

  @ETE_005
  Scenario: ETE_005 Verify that user can create and send a survey for review
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
      | Date          | 2026-12-25    |
      | Time          | 14:44         |
      | Link Expiry   | 2             |
    When add channel details
    Then upload file to upload participants
    When Back to dashboard and click on logout
    When User logs in as "surveyChecker"
    When go to survey schedule list
    When click on three dot menu of survey with In review status
    Then approve the request

  @ETE_006
  Scenario: ETE_006 Verify clicking on Send for review button without adding any question/survey
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
    When click on send for review button without adding any question or survey
    Then an error message "Please add question to send survey for review!" should be displayed

  @ETE_007
  Scenario: ETE_007 Verify Survey Checker Login Functionality
    Given User logs in as "surveyChecker"

  @ETE_008
  Scenario: ETE_008 Verify Survey checker is able to Approve the Survey scheduled which is in "In review" status
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
      | Date          | 2026-12-25    |
      | Time          | 14:44         |
      | Link Expiry   | 2             |
    When add channel details
    Then upload file to upload participants
    When Back to dashboard and click on logout
    When User logs in as "surveyChecker"
    When go to survey schedule list
    When click on three dot menu of survey schedule

  @ETE_009
  Scenario:ETE_009 Verify end user is able to access link- EN
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
      | Date          | 2026-12-25    |
      | Time          | 14:44         |
      | Link Expiry   | 2             |
    When add channel details
    Then upload file to upload participants
    When Back to dashboard and click on logout
    When User logs in as "surveyChecker"
    When go to survey schedule list
    When click on three dot menu of survey schedule
    When generate link
    When click on participants tab
    When submit the survey

  @ETE_010
  Scenario: ETE_010 Verify end user receives a link via SMS
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
      | Date          | 2026-12-25    |
      | Time          | 14:44         |
      | Link Expiry   | 2             |
    When add channel details
    Then upload file to upload participants
    When Back to dashboard and click on logout
    When User logs in as "surveyChecker"
    When go to survey schedule list
    When click on three dot menu of survey schedule
    When generate link
    When click on participants tab
    When submit the survey

  @ETE_011
  Scenario: ETE_011 Verify creating a survey with different question types and sending it for review-[Radio Button, Rating Scale, Checkboxes, Yes/No(Boolean), Dropdown]
    Given User logs in as "surveyMaker"
    Given the user is on the Survey List page
    When the user adds survey Add details with default language as Arabic and English
      | Name        | Sample Survey    |
      | Department  | Administration   |
      | Language    | English          |
      | Language2   | Arabic           |
      | Expiry Date | 2026-12-25       |
      | Wait Period | 5                |
      | Description | Test survey desc |
    Then the survey configuration page should be displayed
    When User adding page1 multiple questions options
    Then User Add arabic text to all fields in arabic column Transalte Tab
    When submits the survey for review
    Then a success message "Survey added and sent for review successfully!" should be displayed
    Then Survey List status as "In Review"

  @ETE_012
  Scenario: ETE_012 Verify creating a survey with different question types and sending it for review-[Radio Button, Rating Scale, Checkboxes, Yes/No(Boolean), Dropdown]
    Given User logs in as "surveyMaker"
    Given the user is on the Survey List page
    When the user adds survey Add details with default language as Arabic and English
      | Name        | Sample Survey    |
      | Department  | Administration   |
      | Language    | English          |
      | Language2   | Arabic           |
      | Expiry Date | 2026-12-25       |
      | Wait Period | 5                |
      | Description | Test survey desc |
    Then the survey configuration page should be displayed
    When User adding page1 multiple questions options
    Then User Add arabic text to all fields in arabic column Transalte Tab
    When submits the survey for review
    Then a success message "Survey added and sent for review successfully!" should be displayed
    Then Survey List status as "In Review"
    When Back to dashboard and click on logout
    When User logs in as "surveyChecker"
    Given the user is on the Survey List page
    Then User verify survey list in Checker

  @ETE_013
  Scenario: ETE_013 Verify end user is able to access link- AR
    Given User logs in as "surveyMaker"
    Given the user is on the Survey List page
    When the user adds survey Add details with default language as Arabic and English
      | Name        | Sample Survey    |
      | Department  | Administration   |
      | Language    | English          |
      | Language2   | Arabic           |
      | Expiry Date | 2026-12-25       |
      | Wait Period | 5                |
      | Description | Test survey desc |
    Then the survey configuration page should be displayed
    When User adding page1 multiple questions options
    Then User Add arabic text to all fields in arabic column Transalte Tab
    When submits the survey for review
    Then a success message "Survey added and sent for review successfully!" should be displayed
    When Back to dashboard and click on logout
    When User logs in as "surveyChecker"
    Given the user is on the Survey List page
    When click on 3 dot menu of added survey name and approve the request
    When Back to dashboard and click on logout
    When User logs in as "surveyMaker"
    When go to survey schedule and add basic details all
      | Schedule Name | scheduleName  |
      | Select Survey | Sample Survey |
      | Date          | 2026-12-25    |
      | Time          | 14:44         |
      | Link Expiry   | 2             |
      | Language      | English       |
    When add channel details
    Then upload file to upload participants
    When Back to dashboard and click on logout
    When User logs in as "surveyChecker"
    When go to survey schedule list
    When click on three dot menu of survey schedule
    When generate link
    When click on participants tab
    When submit the survey Arabic

  @ETE_014
  Scenario: ETE_014 Verify Survey reports functionality
    Given User logs in as "surveyMaker"
    Given the user is on the Survey List page
    When the user adds survey Add details with default language as Arabic and English
      | Name        | Sample Survey    |
      | Department  | Administration   |
      | Language    | English          |
      | Language2   | Arabic           |
      | Expiry Date | 2026-12-25       |
      | Wait Period | 5                |
      | Description | Test survey desc |
    Then the survey configuration page should be displayed
    When User adding page1 multiple questions options
    Then User Add arabic text to all fields in arabic column Transalte Tab
    When submits the survey for review
    Then a success message "Survey added and sent for review successfully!" should be displayed
    Then Survey List status as "In Review"
    When Back to dashboard and click on logout
    When User logs in as "surveyChecker"
    Given the user is on the Survey List page
    Then User verify survey list in Checker









