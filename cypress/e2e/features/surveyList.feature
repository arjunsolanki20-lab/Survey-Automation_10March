Feature: Survey List functionality

    @SL_001
    Scenario:SL_001 Verify survey list
        Given User logs in as "surveyMaker"
        Given the user is on the Survey List page
        Then the survey list table headers should be visible
        Then check multiple elements on the Survey List page should be visible

    @SL_002
    Scenario:SL_002 Verify Click on Add Survey (+) button
        Given User logs in as "surveyMaker"
        Given the user is on the Survey List page
        When click on + New Survey button at the top of the survey list

    @SL_003
    Scenario:SL_003 Verify Click opens Draft Survey in Edit mode (creator)
        When User logs in as "surveyMaker"
        Given the user is on the Survey List page
        Then click on a survey with Draft status

    @SL_004
    Scenario: SL_004 Verify Click opens In Review Survey  in view-only (creator)
        When User logs in as "surveyMaker"
        Given the user is on the Survey List page
        Then click on a survey with In Review status

    @SL_005
    Scenario:SL_005 Verify Click opens Approved Survey in view-only
        When User logs in as "surveyMaker"
        Given the user is on the Survey List page
        Then click on a survey with Approved status

    @SL_006
    Scenario: SL_006 Verify Click opens Rejected Survey in view-only
        When User logs in as "surveyMaker"
        Given the user is on the Survey List page
        Then click on a survey with Rejected status

    @SL_007
    Scenario: SL_007 Verify Click on Delete Action for Draft  survey
        Given User logs in as "surveyMaker"
        Given the user is on the Survey List page
        When the user creates a new survey by filling all mandatory details
            | Name        | Sample Survey    |
            | Department  | Administration   |
            | Language    | English          |
            | Expiry Date | 2026-12-25       |
            | Wait Period | 5                |
            | Description | Test survey desc |
        When click on save as draft option
        When Back to dashboard and click on logout
        Given User logs in as "surveyMaker"
        Given the user is on the Survey List page
        When click on three dot menu a survey with Draft status
        Then click on Delete action

    @SL_008
    Scenario: SL_008 Verify count Per Page  Changes as User change Total Page from Header
        When User logs in as "surveyMaker"
        Given the user is on the Survey List page
        When count per page changes as user change total page from header
        Then the survey list table should update to show the selected number of surveys per page

    @SL_009
    Scenario: SL_009 Verify In Review visibility to approvers within dept
        When User logs in as "surveyChecker"
        Given the user is on the Survey List page
        When click on three dot menu of survey with In review status

    @SL_010
    Scenario: SL_010 Verify Schedule Action for Approved Survey
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
        Given the user is on the Survey List page
        When click on three dot menu of survey with Approved status
        When click on Schedule option

    @SL_011
    Scenario:SL_011 Verify Click on Make a copy from Approved
        When User logs in as "surveyMaker"
        Given the user is on the Survey List page
        When click on three dot menu of survey with Approved status
        When click on make a copy
        When click on open draft survey

    @SL_012
    Scenario: SL_012 Verify Navigate to Next and Previous page
        When User logs in as "surveyMaker"
        Given the user is on the Survey List page
        When click on page navigation

    @SL_013
    Scenario: SL_013 Verify Filter by Name
        When User logs in as "surveyMaker"
        Given the user is on the Survey List page
        When filter by name

    @SL_014
    Scenario: SL_014 Verify Filter by Department
        When User logs in as "surveyMaker"
        Given the user is on the Survey List page
        When filter by Department

    @SL_015
    Scenario: SL_015 Verify Filter by Language
        When User logs in as "surveyMaker"
        Given the user is on the Survey List page
        When filter by Language

    @SL_016
    Scenario: SL_016 Verify Filter by Status
        When User logs in as "surveyMaker"
        Given the user is on the Survey List page
        When filter by Status

    @SL_017
    Scenario: SL_017 Verify Click on Make a copy Action from Rejected survey
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
        Then click on a survey with In Review status
        When reject the survey with comments
        When Back to dashboard and click on logout
        When User logs in as "surveyMaker"
        Given the user is on the Survey List page
        Then click on a survey with Rejected status
        When click on make a copy from basic details page
        When click on open draft survey

    @SL_018
    Scenario:SL_018 Verify Name column Sorting
        When User logs in as "surveyMaker"
        Given the user is on the Survey List page
        When Click the sorting arrow available on Name column

    @SL_019
    Scenario: SL_019 Verify Approve/Reject visible only to approver (Survey checker)
        When User logs in as "surveyChecker"
        Given the user is on the Survey List page
        When click on three dot menu of survey with In review status
        When Back to dashboard and click on logout
        When User logs in as "surveyMaker"
        Given the user is on the Survey List page
        When click on three dot menu of survey with In review status for rejecting the survey

    @SL_020
    Scenario: SL_020 Verify Reset Functionality on Survey List Page
        When User logs in as "surveyMaker"
        Given the user is on the Survey List page
        When filter by name
        When filter by Department
        When click on Reset

    @SL_021
    Scenario: SL_021 Verify Status column Sorting
        When User logs in as "surveyMaker"
        Given the user is on the Survey List page
        When Click the sorting arrow available on status column



