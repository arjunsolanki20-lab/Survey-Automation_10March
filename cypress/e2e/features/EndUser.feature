Feature: End user functionality

  @EU_001
  Scenario: EU_001 Verify clicking on Complete Button Redirects to Thank You Page
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

  @EU_002
  Scenario: EU_002 Verify redirection after successful submission
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

  @EU_003
  Scenario: EU_003 Verify the user can select an answer for each question.
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
    When user select and submit all questions

  @EU_004
  Scenario: EU_004 Verify the chosen answer remains saved when the user goes Next and comes back.
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
    When User adding page2 multiple questions options
    Then User Add arabic text to all fields of both pages in arabic column Transalte Tab
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
    When User select all questions item in generated link

  @EU_005
  Scenario: EU_005 Verify that completed survey displays selected answers in non-editable state
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
    When User adding page2 multiple questions options
    Then User Add arabic text to all fields of both pages in arabic column Transalte Tab
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
    When User select all questions item in generated link
    When submit the survey and redirect same link for verify non editable fields

  @EU_006
  Scenario: EU_006 Verify expected behavior for partial survey submissions are saved and restored.
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
    When User adding page2 multiple questions options
    Then User Add arabic text to all fields of both pages in arabic column Transalte Tab
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
    When User select partial questions item in generated link
    When submit the survey and redirect same link for verify partial completion