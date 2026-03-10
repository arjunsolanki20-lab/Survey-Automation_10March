Feature: Create Survey functionality
  @TC_001
  Scenario: TC_001 Verify Add Survey by clicking + button at the top of the survey list
    Given User logs in as "surveyMaker"
    Given the user is on the Survey List page
    When click on + New Survey button at the top of the survey list

  @TC_002
  Scenario: TC_002 Verify that the Next button navigates to the next section of the survey creation process when all mandatory fields are filled with valid inputs in survey basic details
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

  @TC_003
  Scenario: TC_003 Verify that the Save as Draft option successfully saves the survey with all valid inputs in survey basic details
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

  @TC_004
  Scenario: TC_004 Verify clicking on Send for review button without adding any question/survey
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

  @TC_005
  Scenario: TC_005 Verify creating a Radio Button question by adding options and sending the survey for review
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

  @TC_006
  Scenario: TC_006 Verify Question "visible" checkbox is checked by default in general settings for radio button question and user is able to preview the same
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
    When select the question grid
    When click on general settings and click on visible checkbox

  @TC_007
  Scenario: TC_007 Verify when Question "visible" checkbox is unchecked in general settings for radio button question and user is able to preview the same
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
    When select the question grid
    When click on general settings and uncheck the visible check box selection

  @TC_008
  Scenario: TC_008 Verify Survey Checker Login Functionality
    When User logs in as "surveyChecker"

  @TC_009
  Scenario:TC_009 Verify Survey checker is able to Approve the Survey which is in "In review" status
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

  @TC_010
  Scenario: TC_010 Verify when Question "read only" checkbox is checked in general settings for radio button question and user is able to preview the same
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
    When select the question grid
    When click on general settings and check the read only check box

  @TC_011
  Scenario: TC_011 Verify when Question "read only" checkbox is unchecked in general settings for radio button question
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
    When select the question grid
    When click on general settings and uncheck the read only check box

  @TC_012
  Scenario: TC_012 Verify when Question "Required" checkbox is checked in general settings for radio button question
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
    When select the question grid
    When click on general settings and check the required checkbox

  @TC_013
  Scenario: TC_013 Verify when Question  "Required" checkbox is unchecked in general settings for radio button question
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
    When select the question grid
    When click on general settings and uncheck the required checkbox

  @TC_014
  Scenario: TC_014 Verify when "Add a comment box" checkbox is checked in general settings for radio button question
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
    When select the question grid
    When click on general settings and check the Add a comment checkbox

  @TC_015
  Scenario: TC_015 Verify when "Add a comment box" checkbox is unchecked in general settings for radio button question
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
    When select the question grid
    When click on general settings and uncheck the Add a comment

  @TC_016
  Scenario: TC_016 Verify that a Radio Button question displays a choices with values (Item 1, Item 2, Item 3) and display text (Options) in Choice options settings
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
    When select the question grid
    When go to question choice option settings

  @TC_017
  Scenario: TC_017 Verify that the Edit option icon updates the single selected Radio Button choice successfully
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
    When select the question grid
    When go to question choice option settings
    When edit all radio button and update the details

  @TC_018
  Scenario: TC_018 Verify that the Delete option icon removes the selected Radio Button choice successfully
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
    When select the question grid
    When go to question choice option settings
    When remove any radio button option

  @TC_019
  Scenario: TC_019 Verify that the Clear All Options icon removes all existing choices from the Radio Button question
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
    When select the question grid
    When go to question choice option settings
    When click on clear icon

  @TC_020
  Scenario: TC_020 Verify that the Edit option icon updates the single selected Radio Button choice successfully
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
    When select the question grid
    When update single radio option

  @TC_021
  Scenario: TC_021 Verify that a valid Question Name is entered and saved in general settings for radio button question
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
    When select the question grid
    When update the question name

  @TC_022
  Scenario: TC_022 Verify that a valid Question title is entered and saved in general settings for radio button question
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
    When select the question grid
    When update the question title

  @TC_023
  Scenario: TC_023 Verify that enabling the “Other” option adds an editable text field for respondents to enter custom input
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
    When select the question grid
    When select checkbox other option

  @TC_024
  Scenario:TC_024 Verify that enabling the “None” option adds a choice allowing respondents to indicate no selection
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
    When select the question grid
    When select checkbox none option

  @TC_025
  Scenario: TC_025 Verify that disabling “Display the question on a new line” places the question on a same line in the survey layout
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
    When select the question grid
    When select layout settings
    When uncheck checkbox Display the question on new line option

  @TC_026
  Scenario: TC_026 Verify that enabling “Hide the question number” removes the numbering for the Radio button question
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
    When select the question grid
    When check the hide the question number

  @TC_027
  Scenario: TC_027  Verify that selecting Question Title Alignment = Bottom displays the question title below the question input field
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
    When select the question grid
    When select question alignment to bottom

  @TC_028
  Scenario: TC_028 Verify that selecting Question Title Alignment = Top displays the question title above the question input field
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
    When select the question grid
    When select question alignment to top

  @TC_029
  Scenario: TC_029 Verify that Drag and Swap allows reordering Radio Button choices successfully
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
    When select the question grid
    When drag and swap the options

  @TC_030
  Scenario: TC_030 Verify that selecting Question Title Alignment = Inherit applies the default inherited alignment to the question title
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
    When select the question grid
    When select question alignment to inherit

  @TC_031
  Scenario:TC_031 Verify that selecting Question Title Alignment = Hidden hides the question title from display
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
    When select the question grid
    When select question alignment to hidden

  @TC_032
  Scenario:TC_032 Verify that selecting Error Message Alignment = Inherit applies the default inherited alignment to error messages
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
    When user selects the radio button question type
    When select Error Message Alignment is Inherit

  @TC_033
  Scenario: TC_033 Verify that selecting Error Message Alignment = Top displays error messages above the question input field
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
    When user selects the radio button question type
    When select Error Message Alignment is Top

  @TC_034
  Scenario: TC_034 Verify that selecting Error Message Alignment = Bottom displays error messages above the question input field
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
    When user selects the radio button question type
    When select Error Message Alignment is Bottom


  ######### Bug
  @TC_035
  Scenario: TC_035 Verify that setting Minimum Question Width (in px) restricts the question input field from shrinking below the defined value
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
    When select the question grid
    When enter Minimum question width in px value

  @TC_036
  Scenario: TC_036 Verify when "Store file content in JSON result as text" checkbox is checked in general settings for File upload question
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
    When User clicks on Add Question button
    When User enters Survey Title and Description
    When survey description is displayed below survey title in design and preview

  @TC_037
  Scenario:TC_037 Verify that entering a valid survey description saves successfully and displays below the survey title in design and preview
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
    When User clicks on Add Question button
    When User enters Survey Title and Description
    When enable title and description visible checkbox in general settings
    When survey description is displayed below survey title in design and preview

  @TC_038
  Scenario: TC_038 Verify that enabling the 'Make Title & Description Visible' checkbox under General Settings for the Survey Header
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
    When User clicks on Add Question button
    When User enters Survey Title and Description
    When enable title and description visible checkbox in general settings
    When survey description is displayed below survey title in design and preview

  @TC_039
  Scenario: TC_039 Verify that when Navigation button placement is set to Bottom under Navigation Settings
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
    When user selects navigation settings
    When set navigation button placement to bottom

  @TC_040
  Scenario: TC_040 Verify that when Navigation button placement is set to Top under Navigation Settings
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
    When user selects navigation settings
    When set navigation button placement to top

  @TC_041
  Scenario:TC_041 Verify that enabling the Show previous page button checkbox under Navigation Settings allows users to navigate back to the previous page in Preview
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
    When user selects navigation settings
    When enable show previous page button checkbox

  @TC_042
  Scenario: TC_042 when Button text for Previous is customized under Navigation Settings, the updated text is displayed correctly on the navigation button in Preview
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
    When user selects navigation settings
    When previous button text changed to back
    When add more question
    Then previous button should show custom text back

  @TC_043
  Scenario:TC_043 Verify that when Button text for Next is customized under Navigation Settings
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
    When user selects navigation settings
    When Next button text changed to continue
    When add more question
    Then next button should show custom text continue

  @TC_044
  Scenario:TC_044 Verify that when Button text for Complete is customized under Navigation Settings
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
    When user selects navigation settings
    When complete button text changed to Finish survey
    Then complete button should show custom text Finish survey

  @TC_045
  Scenario: TC_045 Verify that Auto Numbering is applied when Auto Numbering option is enabled in Question Settings
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
    When select question setting
    When select question numbering to auto-numbering

  @TC_046
  Scenario: TC_046 Verify that questions are displayed in the same sequence as created when Question Order is set to Origina
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
    When select question setting
    When select question order original

  @TC_047
  Scenario: TC_047 Verify that Question Description is displayed under the Field Input when Description Alignment
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
    When select the question grid
    When Set Question Description Alignment Under field input

  @TC_048
  Scenario: TC_048 Verify that Question Description is displayed under the Question Title when Description Alignment = Under Question Title
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
    When add more question
    When select the question grid
    When Set Question Description Alignment Under question title






































































