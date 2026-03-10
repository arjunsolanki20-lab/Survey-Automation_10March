Feature: Survey Schedule - Search Functionality

  @SS_001
  Scenario:SS_001 Verify search by schedule name
    Given User logs in as "surveyMaker"
    Given User navigates to Survey Schedule page
    When User selects filter type as "Schedule Name"
    And User selects filter operator "Equals"
    And User enters "ouch indeed Schedule" in search field
    And User clicks on Search button
    Then List should display "ouch indeed Schedule" according to "Equals" condition

  @SS_002
  Scenario:SS_002 Verify search by survey name
    Given User logs in as "surveyMaker"
    Given User navigates to Survey Schedule page
    When User selects filter type as "Survey Name"
    And User selects filter operator "Equals"
    And User enters "elderly dwell Survey" in search field
    And User clicks on Search button
    Then List should display "elderly dwell Survey" according to "Equals" condition

  @SS_003
  Scenario: SS_003 Verify search functionality using Date and Time criteria
    Given User logs in as "surveyMaker"
    Given User navigates to Survey Schedule page
    When User selects filter type as "Schedule Date & Time"
    When User selects "2025-11-01" as from date and "2025-12-20" as to date
    And User selects filter operator "Between"
    And User clicks on Search button
    Then User verify the Row data in page

  @SS_004
  Scenario: SS_004 Verify Reset Filter, resets the all applied filters
    Given User logs in as "surveyMaker"
    Given User navigates to Survey Schedule page
    When User selects filter type as "Schedule Name"
    And User selects filter operator "Equals"
    And User enters "elderly dwell Survey" in search field
    And User clicks on Search button
    When User clicks on Reset button and table reloads

  @SS_005
  Scenario: SS_005 Change and verify count per page
    Given User logs in as "surveyMaker"
    Given User navigates to Survey Schedule page
    Then User observes that Count per page at the bottom is 20
    When User navigates to the header menu and changes total page count to "50"
    Then User observes that Count per page at the bottom is updated to "50"

  @SS_006
  Scenario: SS_006 Select English and Arabic languages for survey schedule
    Given User logs in as "surveyMaker"
    Given User navigates to Survey Schedule page
    Given User fill basic details of survey Schedule Dubai Timimngs
      | Schedule Name | scheduleName            |
      | Select Survey | Automation event Survey |
      | Date          | 2025-12-25              |
      | Time          | 14:44                   |
      | Link Expiry   | 2                       |
      | Language      | English                 |
    When User selects languages of English and Arabic
    Then The languages should be selected successfully

  @SS_007
  Scenario: SS_007 Verify Add Channel with  SMS  and Email config in Survey Schedule
    Given User logs in as "surveyMaker"
    Given User navigates to Survey Schedule page
    Given User fill basic details of survey Schedule Dubai Timimngs
      | Schedule Name | scheduleName            |
      | Select Survey | Automation event Survey |
      | Date          | 2025-12-25              |
      | Time          | 14:44                   |
      | Link Expiry   | 2                       |
      | Language      | English                 |
    When User selects languages of English and Arabic
    Then The languages should be selected successfully
    When add comment to survet Schedule

  @SS_008
  Scenario: SS_008 Verify file upload via Select File option
    Given User logs in as "surveyMaker"
    Given User navigates to Survey Schedule page
    Given User fill basic details of survey Schedule Dubai Timimngs
      | Schedule Name | scheduleName            |
      | Select Survey | Automation event Survey |
      | Date          | 2025-12-25              |
      | Time          | 14:44                   |
      | Link Expiry   | 2                       |
      | Language      | English                 |
    When User selects languages of English and Arabic
    Then The languages should be selected successfully
    When add comment to survet Schedule
    When User uploads the file "Sample_Survey_File.xlsx"
    Then User verifies valid file uploads

  @SS_009
  Scenario: SS_009 Verify sending valid uploaded file for review
    Given User logs in as "surveyMaker"
    Given User navigates to Survey Schedule page
    Given User fill basic details of survey Schedule Dubai Timimngs
      | Schedule Name | scheduleName            |
      | Select Survey | Automation event Survey |
      | Date          | 2025-12-25              |
      | Time          | 14:44                   |
      | Link Expiry   | 2                       |
      | Language      | English                 |
    When User selects languages of English and Arabic
    Then The languages should be selected successfully
    When add comment to survet Schedule
    When User uploads the file "Sample_Survey_File.xlsx"
    Then User verifies valid file uploads
    Then User verifies Send For Review popup and confirms
    Then survey schedule success message

  @SS_010
  Scenario: SS_010 Verify duplicate file upload via Select File option
    Given User logs in as "surveyMaker"
    Given User navigates to Survey Schedule page
    Given User fill basic details of survey Schedule Dubai Timimngs
      | Schedule Name | scheduleName            |
      | Select Survey | Automation event Survey |
      | Date          | 2025-12-25              |
      | Time          | 14:44                   |
      | Link Expiry   | 2                       |
      | Language      | English                 |
    When User selects languages of English and Arabic
    Then The languages should be selected successfully
    When add comment to survet Schedule
    When User uploads the file "Participant upload.xlsx"
    Then User verifies invalid file uploads

  @SS_011
  Scenario: SS_011 Verify Send for review with succesful file uploading
    Given User logs in as "surveyMaker"
    Given User navigates to Survey Schedule page
    Given User fill basic details of survey Schedule Dubai Timimngs
      | Schedule Name | scheduleName            |
      | Select Survey | Automation event Survey |
      | Date          | 2025-12-25              |
      | Time          | 14:44                   |
      | Link Expiry   | 2                       |
      | Language      | English                 |
    When User selects languages of English and Arabic
    Then The languages should be selected successfully
    When add comment to survet Schedule
    When User uploads the file "Sample_Survey_File.xlsx"
    Then User verifies valid file uploads
    Then User verifies Send For Review popup and confirms
    Then survey schedule success message
    Then User redirected to Survey Schedule Page
    Then Survey scheduled status as "In Review"

  @SS_012
  Scenario: SS_012 Verify Scheduling Survey in Arabic Language
    Given User logs in as "surveyMaker"
    Given User navigates to Survey Schedule page
    When the user adds survey schedule details with default language as Arabic
      | Schedule Name | scheduleName            |
      | Select Survey | Automation event Survey |
      | Date          | 2026-12-25              |
      | Time          | 14:44                   |
      | Link Expiry   | 2                       |
      | Language      | Arabic                  |
    When User selects languages of English and Arabic
    When add comment to survet Schedule
    When User uploads the file "Sample_Survey_File.xlsx"
    Then User verifies valid file uploads
    Then User verifies Send For Review popup and confirms
    Then survey schedule success message
    Then User redirected to Survey Schedule Page
    Then Survey scheduled language as "Arabic"

  @SS_013
  Scenario: SS_013 Verify Scheduling Survey in English Language
    Given User logs in as "surveyMaker"
    Given User navigates to Survey Schedule page
    When the user adds survey schedule details with default language as Arabic
      | Schedule Name | scheduleName            |
      | Select Survey | Automation event Survey |
      | Date          | 2026-12-25              |
      | Time          | 14:44                   |
      | Link Expiry   | 2                       |
      | Language      | English                 |
    When User selects languages of English and Arabic
    When add comment to survet Schedule
    When User uploads the file "Sample_Survey_File.xlsx"
    Then User verifies valid file uploads
    Then User verifies Send For Review popup and confirms
    Then survey schedule success message
    Then User redirected to Survey Schedule Page
    Then Survey scheduled language as "English"

  @SS_014
  Scenario: SS_014 Verify sending valid uploaded file for review
    Given User logs in as "surveyMaker"
    Given User navigates to Survey Schedule page
    Given User fill basic details of survey Schedule Dubai Timimngs
      | Schedule Name | scheduleName            |
      | Select Survey | Automation event Survey |
      | Date          | 2025-12-25              |
      | Time          | 14:44                   |
      | Link Expiry   | 2                       |
      | Language      | English                 |
    When User selects languages of English and Arabic
    Then The languages should be selected successfully
    When add comment to survet Schedule
    When User uploads the file "Sample_Survey_File.xlsx"
    Then User verifies valid file uploads
    Then User verifies Send For Review popup and confirms
    Then survey schedule success message
    Then User redirected to Survey Schedule Page
    Then User verify the inReview Status

  @SS_015
  Scenario: SS_015 Verify user delete survey schedule in inreview
    Given User logs in as "surveyMaker"
    Given User navigates to Survey Schedule page
    Given User fill basic details of survey Schedule Dubai Timimngs
      | Schedule Name | scheduleName            |
      | Select Survey | Automation event Survey |
      | Date          | 2025-12-25              |
      | Time          | 14:44                   |
      | Link Expiry   | 2                       |
      | Language      | English                 |
    When User selects languages of English and Arabic
    Then The languages should be selected successfully
    When add comment to survet Schedule
    When User uploads the file "Sample_Survey_File.xlsx"
    Then User verifies valid file uploads
    Then User verifies Send For Review popup and confirms
    Then survey schedule success message
    Then User redirected to Survey Schedule Page
    Then the user deletes the survey schedule

  @SS_016
  Scenario: SS_016 Verify Survey Checker Approves "Inreview scheduled Survey"
    Given User logs in as "surveyMaker"
    Given User navigates to Survey Schedule page
    Given User fill basic details of survey Schedule Dubai Timimngs
      | Schedule Name | scheduleName            |
      | Select Survey | Automation event Survey |
      | Date          | 2025-12-25              |
      | Time          | 14:44                   |
      | Link Expiry   | 2                       |
      | Language      | English                 |
    When User selects languages of English and Arabic
    Then The languages should be selected successfully
    When add comment to survet Schedule
    When User uploads the file "Sample_Survey_File.xlsx"
    Then User verifies valid file uploads
    Then User verifies Send For Review popup and confirms
    Then survey schedule success message
    When User clicks and is redirected to Puffin Dashboard page
    When click on logout
    And User logs in as "surveyChecker"
    Given User navigates to Survey Schedule page
    When the user approve the survey schedule

  @SS_017
  Scenario: SS_017 Verify Survey Checker Reject "Inreview scheduled Survey"
    Given User logs in as "surveyMaker"
    Given User navigates to Survey Schedule page
    Given User fill basic details of survey Schedule Dubai Timimngs
      | Schedule Name | scheduleName            |
      | Select Survey | Automation event Survey |
      | Date          | 2025-12-25              |
      | Time          | 14:44                   |
      | Link Expiry   | 2                       |
      | Language      | English                 |
    When User selects languages of English and Arabic
    Then The languages should be selected successfully
    When add comment to survet Schedule
    When User uploads the file "Sample_Survey_File.xlsx"
    Then User verifies valid file uploads
    Then User verifies Send For Review popup and confirms
    Then survey schedule success message
    When User clicks and is redirected to Puffin Dashboard page
    When click on logout
    And User logs in as "surveyChecker"
    Given User navigates to Survey Schedule page
    When the user reject the survey schedule

  @SS_018
  Scenario: SS_018 Verify status of Approved to Active
    Given User logs in as "surveyMaker"
    Given User navigates to Survey Schedule page
    Given User fill basic details of survey Schedule Dubai Timimngs
      | Schedule Name | scheduleName            |
      | Select Survey | Automation event Survey |
      | Date          | 2025-12-25              |
      | Time          | 14:44                   |
      | Link Expiry   | 2                       |
      | Language      | English                 |
    When User selects languages of English and Arabic
    Then The languages should be selected successfully
    When add comment to survet Schedule
    When User uploads the file "Sample_Survey_File.xlsx"
    Then User verifies valid file uploads
    Then User verifies Send For Review popup and confirms
    Then survey schedule success message
    When User clicks and is redirected to Puffin Dashboard page
    When click on logout
    And User logs in as "surveyChecker"
    Given User navigates to Survey Schedule page
    When the user approve the survey schedule
    When User clicks and is redirected to Puffin Dashboard page
    When click on logout
    And User logs in as "surveyMaker"
    Given User navigates to Survey Schedule page
    Then status of "Active" visible

  @SS_019
  Scenario: SS_019 Verify Active survey changes to Completed after expiry
    Given User logs in as "surveyMaker"
    Given User navigates to Survey Schedule page
    Given User fill basic details of survey Schedule Dubai Timimngs
      | Schedule Name | scheduleName            |
      | Select Survey | Automation event Survey |
      | Date          | 2025-12-25              |
      | Time          | 14:44                   |
      | Link Expiry   | 2                       |
      | Language      | English                 |
    When User selects languages of English and Arabic
    Then The languages should be selected successfully
    When add comment to survet Schedule
    When User uploads the file "Sample_Survey_File.xlsx"
    Then User verifies valid file uploads
    Then User verifies Send For Review popup and confirms
    Then survey schedule success message
    When User clicks and is redirected to Puffin Dashboard page
    When click on logout
    And User logs in as "surveyChecker"
    Given User navigates to Survey Schedule page
    When the user approve the survey schedule
    When User clicks and is redirected to Puffin Dashboard page
    When click on logout
    And User logs in as "surveyMaker"
    Given User navigates to Survey Schedule page
    Then status of "Active" visible

  @SS_020
  Scenario: SS_020 Verify response status column shows submitted status
    Given User logs in as "surveyMaker"
    Given User navigates to Survey Schedule page
    And User enters "fooey rear Schedule" in search field
    And User clicks on Search button
    Then User verifies Response Status column contains "Submitted"

  @SS_021
  Scenario: SS_021 Verify all components on Submitted Participant Detail Panel
    Given User logs in as "surveyMaker"
    Given User navigates to Survey Schedule page
    And User enters "fooey rear Schedule" in search field
    And User clicks on Search button
    Then User verify participant response detail panel "Submitted"

  @SS_022
  Scenario: SS_022 Verify all components on Submitted Participant Detail Panel for Submitted
    Given User logs in as "surveyMaker"
    Given User navigates to Survey Schedule page
    And User enters "fooey rear Schedule" in search field
    And User clicks on Search button
    Then User verify participant response detail panel "Submitted"
    Then User should see the participant response panel details verified

  @SS_023
  Scenario: SS_023 Verify all components on Submitted Participant Detail Panel for Partially Completed
    Given User logs in as "surveyMaker"
    Given User navigates to Survey Schedule page
    And User enters "over sizzling Schedule" in search field
    And User clicks on Search button
    Then User verify participant response detail panel "Partially Completed"
    Then User should see the participant response panel details verified

  @SS_024
  Scenario: SS_024 Verify all components on Submitted Participant Detail Panel for Viewed
    Given User logs in as "surveyMaker"
    Given User navigates to Survey Schedule page
    And User enters "over sizzling Schedule" in search field
    And User clicks on Search button
    Then User verify participant response detail panel "Viewed"
