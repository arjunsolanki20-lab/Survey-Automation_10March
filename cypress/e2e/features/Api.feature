Feature: API functionality

@API_001
Scenario: API_001 Verify generate link
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
    Given User logs in as "surveyChecker"
    When go to survey schedule list
    When open the scheduled survey
    When click on participants tab
    Then survey response status should be submitted



       
    

    
    
