Feature: Survey Dashboard

@DB_001
Scenario: DB_001 User able to see total survey dashboard increment count
        Given User logs in as "surveyMaker"
        When User navigate to survey dashboard page
        Then User able to see total survey dashboard count
        When Back to dashboard and click on logout
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
        When User add page1 multiple questions Radio Button
        When User navigates Preview tab
        Then User verify next and compalte process
        Then User verifies Send Review popup and confirms in Survey list
        Then survey list success message visible
        When Back to dashboard and click on logout
        And User logs in as "surveyChecker"
        Given the user is on the Survey List page
        When the user approve the survey List
        When Back to dashboard and click on logout
        Given User logs in as "surveyMaker"
        When User navigate to survey dashboard page
        Then User able to see total survey dashboard increment Count

@DB_002
Scenario: DB_002 User able to see total survey schedule dashboard increment count
        Given User logs in as "surveyMaker"
        When User navigate to survey dashboard page
        Then User able to see total survey schedule dashboard count
        When Back to dashboard and click on logout
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
        When User add page1 multiple questions Radio Button
        When User navigates Preview tab
        Then User verify next and compalte process
        Then User verifies Send Review popup and confirms in Survey list
        Then survey list success message visible
        When Back to dashboard and click on logout
        And User logs in as "surveyChecker"
        Given the user is on the Survey List page
        When the user approve the survey List
        When Back to dashboard and click on logout
        Given User logs in as "surveyMaker"
        Given User navigates to Survey Schedule page
        When User fill basic details of survey Schedule E2E flow from Survey List
                | Schedule Name | scheduleName  |
                | Select Survey | All Questions |
                | Date          | 2026-12-25    |
                | Time          | 14:44         |
                | Link Expiry   | 2             |
                | Language      | English       |
        When User choose languages of English and Arabic
        Then The languages should selected successfully
        When add comment for survet Schedule
        When User uploads file "Sample_Survey_File.xlsx"
        Then User verify valid file uploads
        Then User verifies Send For Review popup message and confirms
        Then survey schedule success message visible
        When Back to dashboard and click on logout
        Given User logs in as "surveyMaker"
        When User navigate to survey dashboard page
        Then User able to see total survey Schedule dashboard increment count

@DB_004
Scenario: DB_004 Verify Dashboard Pie Chart displays correct Active and Completed survey counts.
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
        When User logs in as "surveyChecker"
        Given User navigates to Survey Schedule page
        Then verify total Active counts in dashboard Pie chart and Survey Schedule Table "Active"

@DB_005
Scenario: DB_005 Verify the Dashboard pie chart shows only Active survey count when no Completed surveys exist.
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
        Given User navigates to Survey Schedule page
        When click on survey schedule approve process
        When User clicks and redirected to Puffin Dashboard page
        Given User navigates to Survey Schedule page
        Then User verify only active survey present "Active"

@DB_006
Scenario: DB_006 Verify the Dashboard pie chart shows only Completed survey count when no Active surveys exist.
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
        Given User navigates to Survey Schedule page
        When click on survey schedule approve process
        When User clicks and redirected to Puffin Dashboard page
        Given User navigates to Survey Schedule page
        Then User verify only completed survey present "Completed"

@DB_007
Scenario: DB_007 Verify pie chart displays both Live and Offline surveys
        When User logs in as "surveyChecker"
        When User navigate to survey dashboard page
        Then User able to see verify live and offline piecharts visible

@DB_008
Scenario: DB_008 Verify Latest Updates section displays recent survey updates in the order.
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
        Given User logs in as "surveyMaker"
        When User navigate to survey dashboard page
        Then User verify latest updates dashboard

@DB_009
Scenario: DB_009 Verify that the Dashboard bar chart correctly displays survey response rate and completion time
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
        Given User logs in as "surveyMaker"
        When User navigate to survey dashboard page
        Then User verify latest updates dashboard
        Then User verify all surveys of title department visibility and not empty in Latest Updates

@DB_010
Scenario: DB_010 Verify that the Dashboard chart correctly displays comparison data for multiple surveys
        Given User logs in as "surveyMaker"
        When User navigate to survey dashboard page
        Then User check total bar count in dashboard
        When Back to dashboard and click on logout
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
        Given User logs in as "surveyMaker"
        When User navigate to survey dashboard page
        Then User verify latest updates dashboard
        Then User verify all surveys of title department visibility and not empty in Latest Updates
        Then User verify all bars with validations in dashboard
        Then User verify bar count incremented for Response Rate and Response Time after survey complete
