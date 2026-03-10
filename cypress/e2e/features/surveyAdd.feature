Feature: Survey Add - Search Functionality
  @AS_001
  Scenario: AS_001 Verify question description is saved and displayed correctly in Radio Button question preview.
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
    When User selects "Radio Button Group" question type
    When User enters Question
    When The user enter text on the field "Question description" under section "General"
    Then User verify description Text
    When User navigates to Preview tab
    Then User verify description text in preview

  @AS_002
  Scenario: AS_002 Verify that clicking the Add New Option icon adds an extra choice to the Radio Button
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
    When User selects "Radio Button Group" question type
    When User enters Question
    Then User add a radio item by 1
    When User able to add question abd item text
    Then User able view verify Radio Button Options item text
    When User navigates to Preview tab
    Then User able view verify Radio Button Options item text in preview

  @AS_003
  Scenario: AS_003 Verify copying all choices from the Copy Choices dropdown to the current Radio Button question.
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
    When User selects "Radio Button Group" question type
    When User enters Question
    When User captures checkbox numbers for question By item names
    When User clicks on Add Question button
    When User enters Question 2
    When User selects "Radio Button Group" question type 2
    When User captures checkbox numbers for question 2 By item names
    When The user clicks on the dropdown field "Copy choices from the following question" under section "Choice Options" and selects "question1"
    When User navigates to Preview tab
    Then User verify checkbox numbers for Copying Question items in Review

  @AS_004
  Scenario: AS_004 Verify User can select Ascending choice order under Radio Button Group
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
    When User selects "Radio Button Group" question type
    When User enters Question
    Then User add a radio button item by 1
    When User captures checkbox numbers for question By item names
    When The user clicks on the dropdown field "Choice order" under section "Choice Options" and selects "Ascending"
    When User navigates to Preview tab
    Then User verify checkbox numbers for asceding question in Review

  @AS_005
  Scenario: AS_005 Verify User can select Descending choice order under Radio Button Group
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
    When User selects "Radio Button Group" question type
    When User enters Question
    Then User add a radio button item by 1
    When User captures checkbox numbers for question By item names
    When The user clicks on the dropdown field "Choice order" under section "Choice Options" and selects "Descending"
    When User navigates to Preview tab
    Then User verify checkbox numbers for descending question in Review

  @AS_006
  Scenario: AS_006 Verify User can select Random choice order under Radio Button Group
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
    When User selects "Radio Button Group" question type
    When User enters Question
    Then User add a radio button item by 1
    When User captures checkbox numbers for question By item names
    When The user clicks on the dropdown field "Choice order" under section "Choice Options" and selects "Random"
    When User navigates to Preview tab
    Then User verify checkbox numbers for random items in Review

  @AS_007
  Scenario: AS_007 Verify rating numbers before and after review for Labels
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
    When User selects question type "Rating Scale" with sub option "Labels"
    When User enters Question
    Then User decrese a rating number by 1
    When User captures all rating numbers for question
    When User navigates to Preview tab
    Then User should see the same rating numbers in the review page

  @AS_008
  Scenario: AS_008 Verify rating numbers before and after review for Stars
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
    When User selects question type "Rating Scale" with sub option "Stars"
    When User enters Question
    Then User decrese a rating number by 1
    When User captures all rating numbers for question
    When User navigates to Preview tab
    Then User should see the same rating numbers in the review page

  @AS_009
  Scenario: AS_009 Verify rating numbers before and after review for Smileys
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
    When User selects question type "Rating Scale" with sub option "Smileys"
    When User enters Question
    Then User decrese a rating number by 1
    When User captures all rating numbers for question
    When User navigates to Preview tab
    Then User should see the same rating numbers in the review page

  @AS_010
  Scenario: AS_010 Verify User checked required checkbox and see astrisk symbol for Rating Scale
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
    When User selects "Rating Scale" question type
    When User enters Question
    When The user clicks on the checkbox field "Required" under section "General"
    When user able to verify mandatory symbol of asterisk
    When User navigates to Preview tab
    Then user able to verify mandatory symbol of asterisk in Preview Page
    Then user able to verify required response alert in Preview Page

  @AS_011
  Scenario: AS_011 Verify Rating Scale displays correctly in Preview with Button mode
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
    When User selects "Rating Scale" question type
    When User enters Question
    When The user clicks on the checkbox Extra field "Display mode" under section "Rating Values" and selects "Buttons"
    When User navigates to Preview tab
    Then The Rating Scale should display clickable buttons in preview

  @AS_012
  Scenario: AS_012 Verify Rating Scale displays correctly in Preview with Dropdown options
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
    When User selects "Rating Scale" question type
    When User enters Question
    When The user clicks on the checkbox Extra field "Display mode" under section "Rating Values" and selects "Dropdown"
    When User navigates to Preview tab
    Then the rating Scale should display dropdown options in preview

  @AS_013
  Scenario: AS_013 Verify user can select Labels option under Rating icon field in Rating Values section
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
    When User selects "Rating Scale" question type
    When User enters Question
    When The user clicks on the checkbox Extra field "Rating icon" under section "Rating Values" and selects "Labels"
    When User navigates to Preview tab
    Then the rating scale should display Labels rating buttons correctly in review

  @AS_014
  Scenario: AS_014 Verify user can select Stars option under Rating icon field in Rating Values section
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
    When User selects "Rating Scale" question type
    When User enters Question
    When The user clicks on the checkbox Extra field "Rating icon" under section "Rating Values" and selects "Stars"
    When User navigates to Preview tab
    Then the rating scale should display star icons correctly in review

  @AS_015
  Scenario: AS_015 Verify user can select smiley option under Rating icon field in Rating Values section
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
    When User selects "Rating Scale" question type
    When User enters Question
    When The user clicks on the checkbox Extra field "Rating icon" under section "Rating Values" and selects "Smileys"
    When User navigates to Preview tab
    Then the rating scale should display smiley icons correctly in review

  @AS_016
  Scenario: AS_016 Verify adding a Ranking question with options and sending the survey for review
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
    When User selects "Ranking" question type
    When User enters Question
    Then User add a ranking item by 1
    When User captures ranking numbers for question
    When User navigates to Preview tab
    Then User verify ranking numbers for question in Review

  @AS_017
  Scenario: AS_017 Verify User checked required checkbox and see astrisk symbol for Ranking
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
    When User selects "Ranking" question type
    When User enters Question
    When The user clicks on the checkbox field "Required" under section "General"
    When user able to verify mandatory symbol of asterisk
    When User navigates to Preview tab
    Then user able to verify mandatory symbol of asterisk in Preview Page
    Then user able to verify required response alert in Preview Page

  @AS_018
  Scenario: AS_018 Verify adding a Checkbox question with options and sending the survey for review
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
    When User selects "Checkboxes" question type
    When User enters Question
    Then User add a checkbox item by 1
    When User captures checkbox numbers for question
    When User navigates to Preview tab
    Then User verify checkbox numbers for question in Review

  @AS_019
  Scenario: AS_019 Verify User checked required checkbox and see astrisk symbol for Checkboxes
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
    When User selects "Checkboxes" question type
    When User enters Question
    When The user clicks on the checkbox field "Required" under section "General"
    When user able to verify mandatory symbol of asterisk
    When User navigates to Preview tab
    Then user able to verify mandatory symbol of asterisk in Preview Page
    Then user able to verify required response alert in Preview Page

  @AS_020
  Scenario: AS_020 Verify User can select Ascending choice order under Checkboxes
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
    When User selects "Checkboxes" question type
    When User enters Question
    Then User add a checkbox item by 1
    When User captures checkbox numbers for question By item names
    When The user clicks on the dropdown field "Choice order" under section "Choice Options" and selects "Ascending"
    When User navigates to Preview tab
    Then User verify checkbox numbers for asceding question in Review

  @AS_021
  Scenario: AS_021 Verify User can select Descending choice order under Checkboxes
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
    When User selects "Checkboxes" question type
    When User enters Question
    Then User add a checkbox item by 1
    When User captures checkbox numbers for question By item names
    When The user clicks on the dropdown field "Choice order" under section "Choice Options" and selects "Descending"
    When User navigates to Preview tab
    Then User verify checkbox numbers for descending question in Review

  @AS_022
  Scenario: AS_022 Verify that enabling the Other option adds an editable text field for respondents
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
    When User selects "Checkboxes" question type
    When User enters Question
    Then User add a checkbox item by 1
    When The user clicks on the checkbox field 'Enable the "Other" option' under section "Choice Options"
    When User verifies the "Other" checkbox option accepts input
    When User navigates to Preview tab
    Then The user verifies that checkbox field present in Preview

  @AS_023
  Scenario: AS_023 Verify that enabling the None option adds an editable text field for respondents
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
    When User selects "Checkboxes" question type
    When User enters Question
    Then User add a checkbox item by 1
    When The user clicks on the checkbox field 'Enable the "None" option' under section "Choice Options"
    When User verifies the "None" checkbox option accepts input
    When User navigates to Preview tab
    Then The user verifies that checkbox field present in Preview

  @AS_024
  Scenario: AS_024 Verify that enabling the Select All option adds an editable text field for respondents
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
    When User selects "Checkboxes" question type
    When User enters Question
    Then User add a checkbox item by 1
    When The user clicks on the checkbox field 'Enable the "Select All" option' under section "Choice Options"
    When User verifies the "Select All" checkbox option accepts input
    When User navigates to Preview tab
    Then The user verifies that checkbox field present in Preview

  @AS_025
  Scenario: AS_025 Verify adding a Dropdown question with options and sending the survey for review
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
    When User selects "Dropdown" question type
    When User enters Question
    Then User add a dropdown item by 1
    When User captures checkbox numbers for question By item names
    When User navigates to Preview tab
    Then User verifies dropdown options match entered texts

  @AS_026
  Scenario: AS_026 Verify User checked required Dropdown and see astrisk symbol for Dropdown
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
    When User selects "Dropdown" question type
    When User enters Question
    When The user clicks on the checkbox field "Required" under section "General"
    When user able to verify mandatory symbol of asterisk
    When User navigates to Preview tab
    Then user able to verify mandatory symbol of asterisk in Preview Page
    Then user able to verify required response alert in Preview Page

  @AS_027
  Scenario: AS_027 Verify Wrap choices enables text wrapping for long options in preview
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
    When User selects "Dropdown" question type
    When User enters Question
    When User captures dropdown wrap numbers for question By item names
    When The user clicks on the checkbox field "Wrap choices" under section "Choice Options"
    When User navigates to Preview tab
    Then User verify dropdown wrap numbers for question By item names

  @AS_028
  Scenario: AS_028 Verify Yes/No question should be added with toggle or button options
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
    When User selects "Yes/No (Boolean)" question type
    When User enters Question
    When User navigates to Preview tab
    Then Yes_No question should be added with toggle or button options

  @AS_029
  Scenario: AS_029 Verify User checked required Dropdown and see astrisk symbol for Dropdown
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
    When User selects "Yes/No (Boolean)" question type
    When User enters Question
    When The user clicks on the checkbox field "Required" under section "General"
    When user able to verify mandatory symbol of asterisk
    When User navigates to Preview tab
    Then user able to verify mandatory symbol of asterisk in Preview Page
    Then user able to verify required response alert in Preview Page

  @AS_030
  Scenario: AS_030 Validate accepted file types for File Upload like JPG, PNG, PDF
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
    When User selects "File Upload" question type
    When User enters Question
    When User enters "PDF, JPG" in field "Accepted file types" under section "General"
    When User navigates to Preview tab
    When User uploads file "istockphoto-2231096573-1024x1024.jpg" in preview

  @AS_031
  Scenario: AS_031 Verify User checked required checkbox and see astrisk symbol
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
    When User selects "File Upload" question type
    When User enters Question
    When The user clicks on the checkbox field "Required" under section "General"
    When user able to verify mandatory symbol of asterisk

  @AS_032
  Scenario: AS_032 Verify User Enable multiple file upload checkbox is enabled and upload
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
    When User selects "File Upload" question type
    When User enters Question
    When The user clicks on the checkbox field "Enable multiple file upload" under section "General"
    When User navigates to Preview tab
    When User uploads file "istockphoto-2231096573-1024x1024.jpg" in preview
    When User uploads file "istockphoto-2231096573-1024x1024.jpg" in preview

  @AS_033
  Scenario: AS_033 Verify able to upload and review multiple file
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
    When User selects "File Upload" question type
    When User enters Question
    When The user clicks on the checkbox field "Enable multiple file upload" under section "General"
    When User navigates to Preview tab
    When User uploads file "istockphoto-2231096573-1024x1024.jpg" in preview
    When User uploads file "istockphoto-2231096573-1024x1024.jpg" in preview
    Then User should see "2" uploaded images visible in preview

  @AS_034
  Scenario: AS_034 Validate Confirmation popup should be displayed to delete the files
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
    When User selects "File Upload" question type
    When User enters Question
    When The user clicks on the checkbox field "Confirm file deletion" under section "General"
    When User navigates to Preview tab
    When User uploads file "istockphoto-2231096573-1024x1024.jpg" in preview
    When user able to delete click and conform delete file

  @AS_035
  Scenario: AS_035 Validate accepted file types for File Upload like JPG, PNG, PDF
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
    When User selects "File Upload" question type
    When User enters Question
    When User enters "JPG, PNG, PDF" in field "Accepted file types" under section "General"
    When User navigates to Preview tab
    When User uploads file "istockphoto-2231096573-1024x1024.jpg" in preview
    Then User verifies Send For Review popup and confirms in Survey list
    Then survey list success message

  @AS_036
  Scenario: AS_036 Validate Maximum file size for File Upload like 20 Bytes
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
    When User selects "File Upload" question type
    When User enters Question
    When User enters "20" in field "Maximum file size" under section "General"
    When User navigates to Preview tab
    When User uploads file "image_JPG.jpg" in preview
    Then survey list alert of Maximim File size

  @AS_037
  Scenario: AS_037 Verify adding an Image Picker Question and sending the survey for review
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
    When User selects "Image Picker" question type
    When User enters Question
    When User navigates to Preview tab
    Then User verifies Send For Review popup and confirms in Survey list

  @AS_038
  Scenario: AS_038 Verify adding a Single Line Input question and sending the survey for review
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
    When User selects "Single-Line Input" question type
    When User enters Question
    When User navigates to Preview tab
    Then User verify Question in preview

  @AS_039
  Scenario: AS_039 Verify User checked required checkbox and see astrisk symbol for Single-Line Input
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
    When User selects "Single-Line Input" question type
    When User enters Question
    When The user clicks on the checkbox field "Required" under section "General"
    When user able to verify mandatory symbol of asterisk
    When User navigates to Preview tab
    Then user able to verify mandatory symbol of asterisk in Preview Page
    Then user able to verify required response alert in Preview Page

  @AS_040
  Scenario: AS_040 Verify User should be able to select color in preview tab for Single-Line Input
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
    When User selects "Single-Line Input" question type
    When User enters Question
    When The user clicks on the dropdown field "Input type" under section "General" and selects "Color"
    Then Verify color question input field has valid color value
    When User navigates to Preview tab
    Then Verify color question input field has valid color value in Preview

  @AS_041
  Scenario: AS_041 Verify User can select None choice order under Radio Button Group
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
    When User selects "Radio Button Group" question type
    When User enters Question
    Then User add a radio button item by 1
    When User captures checkbox numbers for question By item names
    When The user clicks on the dropdown field "Choice order" under section "Choice Options" and selects "None"
    When User navigates to Preview tab
    Then User verify checkbox numbers for None question in Review

  @AS_042
  Scenario: AS_042 Verify locked collapse state disables question box toggle
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
    When User selects "Radio Button Group" question type
    When User enters Question
    Then User add a radio button item by 1
    When User captures checkbox numbers for question By item names
    When User selects "Locked" option for "Question box collapse state" under "Layout" section
    When User navigates to Preview tab
    Then User verify question box state Locked in Review

  @AS_043
  Scenario: AS_043 Verify collapsed state shows question box collapsed by default
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
    When User selects "Radio Button Group" question type
    When User enters Question
    Then User add a radio button item by 1
    When User captures checkbox numbers for question By item names
    When User selects "Collapsed" option for "Question box collapse state" under "Layout" section
    When User navigates to Preview tab
    Then User verify question box state collapsed in Review

  @AS_044
  Scenario: AS_044 Verify collapsed state shows question box collapsed by default
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
    When User selects "Radio Button Group" question type
    When User enters Question
    Then User add a radio button item by 1
    When User captures checkbox numbers for question By item names
    When User selects "Expanded" option for "Question box collapse state" under "Layout" section
    When User navigates to Preview tab
    Then User verify question options visible after expand in Review

  @AS_045
  Scenario: AS_045 Verify Inherit applies default description alignment
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
    When User selects "Radio Button Group" question type
    When User enters Question
    Then User add a radio button item by 1
    When User captures checkbox numbers for question By item names
    When User enters random text in field "Question description" under section "General"
    When User click on hide panel
    When The user clicks on the dropdown field "Question description alignment" under section "Layout" and selects "Inherit"
    Then User verify description Text
    When User navigates to Preview tab
    Then User verify description text in preview

  @AS_046
  Scenario: AS_046 Verify Under the input field applies default description alignment
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
    When User selects "Radio Button Group" question type
    When User enters Question
    Then User add a radio button item by 1
    When User captures checkbox numbers for question By item names
    When User enters random text in field "Question description" under section "General"
    When User click on hide panel
    When The user clicks on the dropdown field "Question description alignment" under section "Layout" and selects "Under the input field"
    Then User verify description Text Of Under The Input Field
    When User navigates to Preview tab
    Then User verify description Text Of Under The Input Field in preview

  @AS_047
  Scenario: AS_047 Verify Under the question title applies default description alignment
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
    When User selects "Radio Button Group" question type
    When User enters Question
    Then User add a radio button item by 1
    When User captures checkbox numbers for question By item names
    When User enters random text in field "Question description" under section "General"
    When User click on hide panel
    When The user clicks on the dropdown field "Question description alignment" under section "Layout" and selects "Under the question title"
    Then User verify description Text
    When User navigates to Preview tab
    Then User verify description text in preview

  @AS_048
  Scenario: AS_048 Verify that selecting Inner Indent applies indentation to the question
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
    When User selects "Radio Button Group" question type
    When User enters Question
    Then User add a radio button item by 1
    When User captures checkbox numbers for question By item names
    When User selects "3" option for "Increase the inner indent" under "Layout" section
    Then User verifies the inner indent "3" is applied correctly
    When User navigates to Preview tab
    Then User verifies the inner indent "3" is applied correctly in preview

  @AS_049
  Scenario: AS_049 Verify Maximum Question Width limits question field shrinkage
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
    When User selects "Radio Button Group" question type
    When User enters Question
    Then User add a radio button item by 1
    When User captures checkbox numbers for question By item names
    When User enters a random percentage under section "Layout" and field "Maximum question width"
    Then User verifies the question width is applied correctly
    When User navigates to Preview tab
    Then User verifies the question width is applied correctly in preview

  @AS_050
  Scenario: AS_050 Verify that selecting Column Count displays options according to selected column
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
    When User selects "Radio Button Group" question type
    When User enters Question
    Then User add a radio button item by 1
    When User captures checkbox numbers for question By item names
    When The user clicks on the dropdown field "Column count" under section "Layout" and selects "3"
    Then User verifies column count as "3"
    When User navigates to Preview tab
    When User verifies column count in preview as "3"

  @AS_051
  Scenario: AS_051 Verify User checked required checkbox and see astrisk symbol for Image Picker
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
    When User selects "Image Picker" question type
    Then User delete All Images
    When User enters Question
    When The user clicks on the checkbox field "Required" under section "General"
    When user able to verify mandatory symbol of asterisk
    When User navigates to Preview tab
    Then user able to verify mandatory symbol of asterisk in Preview Page
    Then user able to verify required response alert in Preview Page

  @AS_052
  Scenario: AS_052 Verify content mode will choose Image for Image Picker
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
    When User selects "Image Picker" question type
    When User enters Question
    When User selects "Image" option for "Content mode" under "General" section
    Then User delete All Images
    When User uploads file "istockphoto-2231096573-1024x1024.jpg" for Image Picker
    When User navigates to Preview tab
    Then User should see "1" uploaded images picker visible in preview

  ######## BUG
  @AS_053
  Scenario: AS_053 Verify content mode will choose video for Image Picker
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
    When User selects "Image Picker" question type
    When User enters Question
    When User selects "Video" option for "Content mode" under "General" section
    Then User delete All Images
    When User uploads file "file_example_MP4_480_1_5MG.mp4" for Image Picker
    When User navigates to Preview tab
    Then User should see "1" uploaded video of image picker visible in preview

  @AS_054
  Scenario: AS_054 Verify Email input shows placeholder and accepts valid email in Preview for Single-Line Input
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
    When User selects "Single-Line Input" question type
    When User enters Question
    When The user clicks on the dropdown field "Input type" under section "General" and selects "Email"
    When User enters text in the input with field email "Placeholder text within input field"
    When User verifies the email input value
    When User navigates to Preview tab
    When User verifies the email input value in preview

  @AS_055
  Scenario: AS_055 Verify Number input shows min/max picker and allows valid selection in Preview for Single-Line Input
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
    When User selects "Single-Line Input" question type
    When User enters Question
    When The user clicks on the dropdown field "Input type" under section "General" and selects "Number"
    When user enter min "10" and max "50"
    When User navigates to Preview tab
    Then User verifies number input in preview with value "5"
    Then user able to verify required response alert number value in Preview Page
    Then User verifies number input in preview with value "20"
    Then user able to verify survey complete message

  @AS_056
  Scenario: AS_056 Verify pasword input and should be in encrypted format in Preview for Single-Line Input
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
    When User selects "Single-Line Input" question type
    When User enters Question
    When The user clicks on the dropdown field "Input type" under section "General" and selects "Password"
    When User enters text in the input with field password name "Placeholder text within input field"
    When User verifies the password input value
    When User navigates to Preview tab
    When User verifies the password input value in preview

  @AS_057
  Scenario: AS_057 Verify Range input shows min/max picker and allows valid selection in Preview for Single-Line Input
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
    When User selects "Single-Line Input" question type
    When User enters Question
    When The user clicks on the dropdown field "Input type" under section "General" and selects "Range"
    When user enter min "10" and max "50"
    When User navigates to Preview tab
    Then user able to verify survey complete message

  @AS_058
  Scenario: AS_058 Verify Phone Number input format in Preview for Single-Line Input
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
    When User selects "Single-Line Input" question type
    When User enters Question
    When The user clicks on the dropdown field "Input type" under section "General" and selects "Phone Number"
    When User enters text in the input with field phone number area "Placeholder text within input field"
    When User verifies the phone number input value
    When User navigates to Preview tab
    When User verifies the phone number input value in preview

  @AS_059
  Scenario: AS_059 Verify Text input shows placeholder and accepts valid Text in Preview for Single-Line Input
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
    When User selects "Single-Line Input" question type
    When User enters Question
    When The user clicks on the dropdown field "Input type" under section "General" and selects "Text"
    When User enters text in the input with field Text "Placeholder text within input field"
    When User verifies the text input value
    When User navigates to Preview tab
    When User verifies the text input value in preview

  @AS_060
  Scenario: AS_060 Verify URL input shows placeholder and accepts valid URL in Preview for Single-Line Input
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
    When User selects "Single-Line Input" question type
    When User enters Question
    When The user clicks on the dropdown field "Input type" under section "General" and selects "URL"
    When User enters URL in the input with field URL "Placeholder text within input field"
    When User verifies the URL input value
    When User navigates to Preview tab
    When User verifies the URL input value in preview

  @AS_061
  Scenario: AS_061 Verify User selects minimum and maximum week in Preview for Single-Line Input
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
    When User selects "Single-Line Input" question type
    When User enters Question
    When The user clicks on the dropdown field "Input type" under section "General" and selects "Week"
    When User selects "2026-W10" as minimum week and "2026-W20" as maximum week
    When User navigates to Preview tab
    And User verifies week "2026-W05" is disabled
    And User selects week "2026-W15"

  @AS_062
  Scenario: AS_062 Verify adding a Paragraph question and submitting the survey for review
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
    When User selects "Long Text" question type
    When User enters long text question
    When User navigates to Preview tab
    Then User verify enters long text question

  @AS_063
  Scenario: AS_063 Verify that when the Required checkbox is checked in General Settings for a Long Text question
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
    When User selects "Long Text" question type
    When User enters Question
    When The user clicks on the checkbox field "Required" under section "General"
    When user able to verify mandatory symbol of asterisk
    When User navigates to Preview tab
    Then user able to verify mandatory symbol of asterisk in Preview Page
    Then User verifies Send For Review popup and confirms in Survey list
    Then survey list success message

  @AS_064
  Scenario: AS_064 Verify Search and locate Question Types in Left Panel while adding a Question
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
    When User searches for "Radio Button Group" question type in Left Panel

  @AS_065
  Scenario: AS_065 Verify duplicating a question and previewing it in the survey
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
    When User selects "Radio Button Group" question type
    When User enters Question
    When User click on duplicate question button
    Then User verify Duplicated Question
    When User navigates to Preview tab
    Then User verify Duplicated Question in preview

  @AS_066
  Scenario: AS_066 Verify User checked required radio button and see astrisk symbol and alet
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
    When User selects "Radio Button Group" question type
    When User enters Question
    When The user clicks on the checkbox field "Required" under section "General"
    When user able to verify mandatory symbol of asterisk
    When User navigates to Preview tab
    Then user able to verify mandatory symbol of asterisk in Preview Page
    Then user able to verify required response alert in Preview Page

  @AS_067
  Scenario: AS_067 Verify unmarked Required question becomes optional and survey submits without alert.
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
    When User selects "Radio Button Group" question type
    When User enters Question
    When The user clicks on the checkbox field "Required" under section "General"
    When user able to verify mandatory symbol of asterisk
    When User click on hide panel
    When The user clicks on the uncCheckbox field "Required" under section "General"
    When User navigates to Preview tab
    Then user able to verify survey complete message

  @AS_068
  Scenario: AS_068 Verify deleted question is removed from the survey and remaining questions adjust correctly
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
    When User selects "Radio Button Group" question type
    When User enters Question
    When User captures checkbox numbers for question By item names
    When User clicks on Add Question button
    When User enters Question 2
    When User selects "Radio Button Group" question type 2
    When User captures checkbox numbers for question 2 By item names
    Then User delete Question 2
    When User navigates to Preview tab
    Then User verify Question in preview
    Then User verify Question2 Not Visible in preview

  @AS_069
  Scenario: AS_069 Verify drag question items reflects in preview
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
    When User selects "Radio Button Group" question type
    When User enters Question
    When User add input options for radio button type question1 drag options order

  @AS_070
  Scenario: AS_070 Verify drag questions reflects in preview
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
    When User drag question2 on top
    When User navigates to Preview tab
    Then User can see dragged questions in preview

  @AS_071
  Scenario: AS_071 Verify that adding a new question on the same page appears correctly in Design view and in Preview.
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
    When User selects "Radio Button Group" question type
    When User enters Question
    When User captures checkbox numbers for question By item names
    When User clicks on Add Question button
    When User enters Question 2
    When User selects "Radio Button Group" question type 2
    When User can editing Question2
    When User navigates to Preview tab
    Then User can verify Edited Question2 Visible in preview

  @AS_072
  Scenario: AS_072 Verify that duplicating a page copies all questions, settings, and formatting correctly.
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
    When User selects "Radio Button Group" question type
    When User enters Question
    When User click on duplicate page button
    Then User can verify duplicated page with question and type "Radio Button Group"
    When User navigates to Preview tab
    Then User can verify duplicated questions in preview

  @AS_073
  Scenario: AS_073 Verify that User can Delete page and update sequence
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
    When User selects "Radio Button Group" question type
    When User can add Question Button on Page2
    Then User can delete Page1
    Then User can verify question 2 under page 1 auto upgraded
    When User navigates to Preview tab
    Then User can not visible question1 in preview
    Then User can visible question2 in preview

  @AS_074
  Scenario: AS_074 Verify Min and Max Date Picker Functionality for Date Input in Survey Preview
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
    When User selects "Single-Line Input" question type
    When User enters Question
    When The user clicks on the dropdown field "Input type" under section "General" and selects "Date"
    When User selects "2026-06-03" as minimum date and "2026-12-20" as maximum date
    When User navigates to Preview tab
    And User selects date "2026-07-15"
    And User selects beyond date "2026-05-01" and alert come

  @AS_075
  Scenario: AS_075 Verify Min and Max Date Time Picker Functionality for Date Input in Survey Preview
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
    When User selects "Single-Line Input" question type
    When User enters Question
    When The user clicks on the dropdown field "Input type" under section "General" and selects "Date and Time"
    When User selects "2026-06-03T10:00" as minimum datetime and "2026-12-20T18:00" as maximum datetime
    When User navigates to Preview tab
    And User selects date time "2026-07-15T14:30"
    And User selects beyond date time "2026-12-25T14:30" and alert come

  @AS_076
  Scenario: AS_076 Verify Min and Max Month Picker Functionality for Date Input in Survey Preview
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
    When User selects "Single-Line Input" question type
    When User enters Question
    When The user clicks on the dropdown field "Input type" under section "General" and selects "Month"
    When User selects "2026-06" as minimum month and "2026-12" as maximum month
    When User navigates to Preview tab
    When User selects month "2026-07" in preview
    When User selects beyond month "2026-04" and alert comes

  @AS_077
  Scenario: AS_077 Verify Min and Max Time Picker Functionality for Date Input in Survey Preview
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
    When User selects "Single-Line Input" question type
    When User enters Question
    When The user clicks on the dropdown field "Input type" under section "General" and selects "Time"
    When User selects "09:00" as minimum time and "18:30" as maximum time
    When User navigates to Preview tab
    When User selects time "10:30" in preview
    When User selects beyond time "08:00" and alert comes

  @AS_078
  Scenario: AS_078 Verify that selecting a survey language from General Settings updates survey text and labels in Preview
    Given User logs in as "surveyMaker"
    Given the user is on the Survey List page
    Given the user creates a new survey by filling all mandatory details Both Language
      | Name        | Sample Survey    |
      | Department  | Administration   |
      | Language    | English          |
      | Language2   | Arabic           |
      | Expiry Date | 2026-12-25       |
      | Wait Period | 5                |
      | Description | Test survey desc |
    Then the survey configuration page should be displayed
    When User clicks on Add Question button
    When User enters Survey Title and Description
    When User selects "Single-Line Input" question type
    When User enters Question
    When The user clicks on the dropdown field survey settings "Select a survey language" under section "General" and selects "Arabic"
    Then User verify survey language text in preview

  @AS_079
  Scenario: AS_079 Verify that the user is allowed to submit the survey only once
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
    When User able to enter limit to one response input of "1"
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

  @AS_080
  Scenario: AS_080 Verify that Editable mode allows users to enter responses in Preview
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
    When User selects "Single-Line Input" question type
    When User enters Question
    When User selects "Editable" option for "Survey display mode" under "General" section survey settings
    When User navigates to Preview tab
    Then User verify that preview input field is editable

  @AS_081
  Scenario: AS_081 Verify that Read Only mode makes survey fields non-editable in Preview
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
    When User selects "Single-Line Input" question type
    When User enters Question
    When User selects "Read-only" option for "Survey display mode" under "General" section survey settings
    When User navigates to Preview tab
    Then Verify that preview input field is readonly and not editable

  @AS_082
  Scenario: AS_082 Verify that the user is allowed to submit the survey only once
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
    When User able to enter limit to one response input of "1"
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

  @AS_083
  Scenario: AS_083 Verify that changing Survey Width Mode updates layout width in Preview
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
    When User enters Question
    Then Verify that changing Survey Width Mode updates layout width for Auto, Static, and Responsive modes
    Then Verify that changing Survey Width Mode under General Settings updates the question layout width in Preview for Auto, Static, and Responsive modes

  @AS_084
  Scenario: AS_084 Verify that uploading a valid logo image updates and displays correctly in Preview
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
    When User uploads file "istockphoto-2231096573-1024x1024.jpg" under Logo
    When User navigates to Preview tab
    Then User verifies logo is visible in Preview

  @AS_085
  Scenario: AS_085 User uploads and deletes file under Logo and verifies in Preview
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
    When User uploads file "istockphoto-2231096573-1024x1024.jpg" under Logo
    When User delete uploaded image
    When User navigates to Preview tab
    Then User verifies logo is not visible in Preview

  @AS_086
  Scenario: AS_086 Verify Question Title aligns to Top when Title Alignment set Top in Settings and Preview
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
    When User selects "Top" option for "Question title alignment" under "Question Settings" section survey settings
    When User verify question title should be aligned to Top
    When User navigates to Preview tab
    Then Question title should be aligned to Top of input field in Preview

  @AS_087
  Scenario: AS_087 Verify Question Title aligns to Bottom when Title Alignment set Bottom in Settings and Preview
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
    When User selects "Bottom" option for "Question title alignment" under "Question Settings" section survey settings
    When User verify question title should be aligned to Bottom
    When User navigates to Preview tab
    Then Question title should be aligned to Bottom of input field in Preview

  @AS_088
  Scenario: AS_088 Verify Question Title aligns to Left when Title Alignment set Left in Settings and Preview
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
    When User selects "Left" option for "Question title alignment" under "Question Settings" section survey settings
    When User verify question title should be aligned to Left
    When User navigates to Preview tab
    Then Question title should be aligned to Left of input field in Preview

  @AS_089
  Scenario: AS_089 Verify error message displays at the top in preview when alignment is set to Top
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
    When User selects "Top" option for "Error message alignment" under "Question Settings" section survey settings
    When User click on hide panel
    When User selects "Radio Button Group" question type
    When The user clicks on the checkbox field "Required" under section "General"
    When User click on hide panel
    When User enters Question
    When User captures checkbox numbers for question By item names
    When User clicks on Add Question button
    When User enters Question 2
    When User selects "Radio Button Group" question type 2
    When User captures checkbox numbers for question 2 By item names
    When User Add Page2 multiple questions
    When User navigates to Preview tab
    Then User should see the alert visually at the top

  @AS_090
  Scenario: AS_090 Verify error message displays at the bottom in preview when alignment is set to Bottom
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
    When User selects "Bottom" option for "Error message alignment" under "Question Settings" section survey settings
    When User click on hide panel
    When User selects "Radio Button Group" question type
    When The user clicks on the checkbox field "Required" under section "General"
    When User click on hide panel
    When User enters Question
    When User captures checkbox numbers for question By item names
    When User clicks on Add Question button
    When User enters Question 2
    When User selects "Radio Button Group" question type 2
    When User captures checkbox numbers for question 2 By item names
    When User Add Page2 multiple questions
    When User navigates to Preview tab
    Then User should see the alert visually at the bottom

  @AS_091
  Scenario: AS_091 Verify user can add a new page using the icon and it displays correctly in preview
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
    When User can add a new page from pages setting
    When User click on hide panel
    When User clicks on Add Question button
    Then New page with title Page 1 and description Description should be visible
    When User navigates to Preview tab
    Then User verify page Visible with question1 in preview

  @AS_092
  Scenario: AS_092 Verify user can delete a new page using the icon and page is not displays in preview
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
    When User can add a new page from pages setting
    Then New page with title Page 1 and description Description should be visible
    When User can delete Page1
    When User navigates to Preview tab
    Then User verify page not Visible with question1 in preview

  @AS_093
  Scenario: AS_093 Verify that Thank You page appears in the preview after survey submission.
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
    When User selects "Radio Button Group" question type
    When User enters Question
    When User navigates to Preview tab
    Then User able to verify survey thankyou message

  @AS_094
  Scenario: AS_094 Verify application background and components should switch to Dark theme
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
    When User selects "Radio Button Group" question type
    When User enters Question
    When User navigates to Themes tab
    When User select dark mode theme
    Then User able to verify dark mode theme

  @AS_095
  Scenario: AS_095 Verify application background and components should switch to Light theme
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
    When User selects "Radio Button Group" question type
    When User enters Question
    When User navigates to Themes tab
    When User select light mode theme
    Then User able to verify light mode theme

  ###### NoT Able to Automate #####
  @AS_096
  Scenario: AS_096 Verify Search functionality on Theme setting Panel hightight orange colour
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
    When User selects "Radio Button Group" question type
    When User enters Question
    When User navigates to Themes tab
    When User enter text "Header" in right panel theme setting
    Then User able to verify orange colour border

  @AS_097
  Scenario: AS_097 Verify Survey Title Font Weight options (Regular, Semi Bold, Bold, Heavy) work
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
    When User selects "Radio Button Group" question type
    When User enters Question
    When User navigates to Themes tab
    When User verify changing title width changes

  @AS_098
  Scenario: AS_098 Verify Survey Description Font Family dropdown works
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
    When User adding page1 multiple questions Radio Button
    When User navigates to Themes tab
    When User choose survey description font family "Arial, sans-serif"

  ###### BUG ####
  @AS_099
  Scenario: AS_099 Verify Survey Description Font Weight options (Regular, Semi Bold, Bold, Heavy) work
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
    When User adding page1 multiple questions Radio Button
    When User navigates to Themes tab
    When User verify changing description width changes

  ###### BUG ####
  @AS_100
  Scenario: AS_100 Verify Survey Description Font Size increase/decrease works
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
    When User adding page1 multiple questions Radio Button
    When User navigates to Themes tab
    When User verify changing description theme font size changes

  @AS_101
  Scenario: AS_101 Verify Save as Draft retains all font and alignment settings
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
    When User adding page1 multiple questions Radio Button
    When User uploads file "istockphoto-2231096573-1024x1024.jpg" under Logo
    When User navigates to Themes tab
    Then User verify allignment setting and logo
    Then User verify draft message

  @AS_102
  Scenario: AS_102 Verify Translation tab not available for single language
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
    When User adding page1 multiple questions Radio Button
    Then User Verify translation tab not available

  @AS_103
  Scenario: AS_103 Verify System should allow manual Entry of Arabic language Text in Transalates Arabic column
    Given User logs in as "surveyMaker"
    Given the user is on the Survey List page
    Given the user creates a new survey by filling all mandatory details Both Language
      | Name        | Sample Survey    |
      | Department  | Administration   |
      | Language    | English          |
      | Language2   | Arabic           |
      | Expiry Date | 2026-12-25       |
      | Wait Period | 5                |
      | Description | Test survey desc |
    Then the survey configuration page should be displayed
    When User clicks on Add Question button
    When User enters Survey Title and Description
    When User selects "Radio Button Group" question type
    When User enters Question
    When User captures checkbox numbers for question By item names
    When User navigates to Translation tab
    Then Arabic Translation Entry "رحلة تعليمية" "تجربة جديدة" "تعليمية" "استكشاف جديد" "مشروع تعليمي" "فرصة رائعة"

  @AS_104
  Scenario: AS_104 Verify System should Entry of Arabic language Text in Transalates Arabic column Save as Draft
    Given User logs in as "surveyMaker"
    Given the user is on the Survey List page
    Given the user creates a new survey by filling all mandatory details Both Language
      | Name        | Sample Survey    |
      | Department  | Administration   |
      | Language    | English          |
      | Language2   | Arabic           |
      | Expiry Date | 2026-12-25       |
      | Wait Period | 5                |
      | Description | Test survey desc |
    Then the survey configuration page should be displayed
    When User clicks on Add Question button
    When User enters Survey Title and Description
    When User selects "Radio Button Group" question type
    When User enters Question
    When User captures checkbox numbers for question By item names
    When User navigates to Translation tab
    Then Arabic Translation Entry "رحلة تعليمية" "تجربة جديدة" "تعليمية" "استكشاف جديد" "مشروع تعليمي" "فرصة رائعة"
    Then User verify draft message

  @AS_105
  Scenario: AS_105 Verify System should survey add translates add error message
    Given User logs in as "surveyMaker"
    Given the user is on the Survey List page
    Given the user creates a new survey by filling all mandatory details Both Language
      | Name        | Sample Survey    |
      | Department  | Administration   |
      | Language    | English          |
      | Language2   | Arabic           |
      | Expiry Date | 2026-12-25       |
      | Wait Period | 5                |
      | Description | Test survey desc |
    Then the survey configuration page should be displayed
    When User clicks on Add Question button
    When User enters Survey Title and Description
    When User selects "Radio Button Group" question type
    When User enters Question
    When User captures checkbox numbers for question By item names
    When User navigates to Translation tab
    Then Arabic Translation Entry "رحلة تعليمية" "تجربة جديدة" "تعليمية" "استكشاف جديد" "مشروع تعليمي" "فرصة رائعة"
    When User Arabic Translation clear
    Then survey add translates add error message

  @AS_106
  Scenario: AS_106 Verify successful Send for Review when all translations entered
    Given User logs in as "surveyMaker"
    Given the user is on the Survey List page
    Given the user creates a new survey by filling all mandatory details Both Language
      | Name        | Sample Survey    |
      | Department  | Administration   |
      | Language    | English          |
      | Language2   | Arabic           |
      | Expiry Date | 2026-12-25       |
      | Wait Period | 5                |
      | Description | Test survey desc |
    Then the survey configuration page should be displayed
    When User clicks on Add Question button
    When User enters Survey Title and Description
    When User selects "Radio Button Group" question type
    When User enters Question
    When User captures checkbox numbers for question By item names
    When User navigates to Translation tab
    Then Arabic Translation Entry "رحلة تعليمية" "تجربة جديدة" "تعليمية" "استكشاف جديد" "مشروع تعليمي" "فرصة رائعة"
    Then User verify survey send successful message
    Then User redirected to survey list page

  @AS_107
  Scenario: AS_107 Verify Logic tab page display and Add new logic
    Given User logs in as "surveyMaker"
    Given the user is on the Survey List page
    Given the user creates a new survey by filling all mandatory details Both Language
      | Name        | Sample Survey    |
      | Department  | Administration   |
      | Language    | English          |
      | Language2   | Arabic           |
      | Expiry Date | 2026-12-25       |
      | Wait Period | 5                |
      | Description | Test survey desc |
    Then the survey configuration page should be displayed
    When User adding Page1 Question with radio button option
    When User navigates to Logic tab
    Then User verify add new logic and no logical rules

  @AS_108
  Scenario: AS_108 Verify Logic tab page display and add new
    Given User logs in as "surveyMaker"
    Given the user is on the Survey List page
    Given the user creates a new survey by filling all mandatory details Both Language
      | Name        | Sample Survey    |
      | Department  | Administration   |
      | Language    | English          |
      | Language2   | Arabic           |
      | Expiry Date | 2026-12-25       |
      | Wait Period | 5                |
      | Description | Test survey desc |
    Then the survey configuration page should be displayed
    When User adding Page1 Question with radio button option
    When User navigates to Logic tab
    Then User verify add new visible in Logic tab

  @AS_109
  Scenario: AS_109 Verify selected question should be display in rule builder
    Given User logs in as "surveyMaker"
    Given the user is on the Survey List page
    Given the user creates a new survey by filling all mandatory details Both Language
      | Name        | Sample Survey    |
      | Department  | Administration   |
      | Language    | English          |
      | Language2   | Arabic           |
      | Expiry Date | 2026-12-25       |
      | Wait Period | 5                |
      | Description | Test survey desc |
    Then the survey configuration page should be displayed
    When User adding Page1 Question with radio button option
    When User navigates to Logic tab
    Then User verify add new visible in Logic tab
    Then User select question "question1" in Logic tab dropdown

  @AS_110
  Scenario: AS_110 Verify Condition type should apply the rule and highlight item
    Given User logs in as "surveyMaker"
    Given the user is on the Survey List page
    Given the user creates a new survey by filling all mandatory details Both Language
      | Name        | Sample Survey    |
      | Department  | Administration   |
      | Language    | English          |
      | Language2   | Arabic           |
      | Expiry Date | 2026-12-25       |
      | Wait Period | 5                |
      | Description | Test survey desc |
    Then the survey configuration page should be displayed
    When User adding Page1 Question with radio button option
    When User navigates to Logic tab
    Then User verify add new visible in Logic tab
    Then User select question "question1" in Logic tab dropdown
    Then User select question condition "Equals" in Logic tab dropdown
    Then User click and verify First Radio item in Logic tab

  @AS_111
  Scenario: AS_111 Verify user can see add, select, and delete conditions in the logic tab
    Given User logs in as "surveyMaker"
    Given the user is on the Survey List page
    Given the user creates a new survey by filling all mandatory details Both Language
      | Name        | Sample Survey    |
      | Department  | Administration   |
      | Language    | English          |
      | Language2   | Arabic           |
      | Expiry Date | 2026-12-25       |
      | Wait Period | 5                |
      | Description | Test survey desc |
    Then the survey configuration page should be displayed
    When User adding Page1 Question with radio button option
    When User navigates to Logic tab
    Then User verify add new visible in Logic tab
    Then User select question "question1" in Logic tab dropdown
    Then User select question condition "Equals" in Logic tab dropdown
    Then User Verify Clicking on Add condtion functionality

  @AS_112
  Scenario: AS_112 Verify Click on Delete icon for the condition applied
    Given User logs in as "surveyMaker"
    Given the user is on the Survey List page
    Given the user creates a new survey by filling all mandatory details Both Language
      | Name        | Sample Survey    |
      | Department  | Administration   |
      | Language    | English          |
      | Language2   | Arabic           |
      | Expiry Date | 2026-12-25       |
      | Wait Period | 5                |
      | Description | Test survey desc |
    Then the survey configuration page should be displayed
    When User adding Page1 Question with radio button option
    When User navigates to Logic tab
    Then User verify add new visible in Logic tab
    Then User select question "question1" in Logic tab dropdown
    Then User select question condition "Equals" in Logic tab dropdown
    Then User Verify Clicking on Add condtion functionality
    Then User deletion should remove the entire condition rule AND, Select, Equals, delete icon

  @AS_113
  Scenario: AS_113 Verify user able to Add second condition in rule
    Given User logs in as "surveyMaker"
    Given the user is on the Survey List page
    Given the user creates a new survey by filling all mandatory details Both Language
      | Name        | Sample Survey    |
      | Department  | Administration   |
      | Language    | English          |
      | Language2   | Arabic           |
      | Expiry Date | 2026-12-25       |
      | Wait Period | 5                |
      | Description | Test survey desc |
    Then the survey configuration page should be displayed
    When User adding multiple pages with multiple questions Radio Button
    When User navigates to Logic tab
    Then User verify add new visible in Logic tab
    Then User select question "question1" in Logic tab dropdown
    Then User select question condition "Equals" in Logic tab dropdown
    Then User click and verify First Radio item Question 1 in Logic tab
    Then User Verify Clicking on Add condtion 1 functionality
    Then User select question of "question2" in Logic tab dropdown
    Then User select question 2 condition "Does not equal" in Logic tab dropdown
    Then User click and verify First Radio item Question 2 in Logic tab

  @AS_114
  Scenario: AS_114 Verify user able to Select Action under second condition in rule
    Given User logs in as "surveyMaker"
    Given the user is on the Survey List page
    Given the user creates a new survey by filling all mandatory details Both Language
      | Name        | Sample Survey    |
      | Department  | Administration   |
      | Language    | English          |
      | Language2   | Arabic           |
      | Expiry Date | 2026-12-25       |
      | Wait Period | 5                |
      | Description | Test survey desc |
    Then the survey configuration page should be displayed
    When User adding multiple pages with multiple questions Radio Button
    When User navigates to Logic tab
    Then User verify add new visible in Logic tab
    Then User select question "question1" in Logic tab dropdown
    Then User select question condition "Equals" in Logic tab dropdown
    Then User click and verify First Radio item Question 1 in Logic tab
    Then User Verify Clicking on Add condtion 1 functionality
    Then User select question of "question2" in Logic tab dropdown
    Then User select question 2 condition "Does not equal" in Logic tab dropdown
    Then User click and verify First Radio item Question 2 in Logic tab
    When User able to select actions for question2 "Enable/disable question"
    When User select question page 2 "question3" in Logic tab dropdown
    Then User able to see the questions after done logic

  @AS_115
  Scenario: AS_115 Verify rule Save/Done functionality
    Given User logs in as "surveyMaker"
    Given the user is on the Survey List page
    Given the user creates a new survey by filling all mandatory details Both Language
      | Name        | Sample Survey    |
      | Department  | Administration   |
      | Language    | English          |
      | Language2   | Arabic           |
      | Expiry Date | 2026-12-25       |
      | Wait Period | 5                |
      | Description | Test survey desc |
    Then the survey configuration page should be displayed
    When User adding multiple pages with multiple questions Radio Button
    When User navigates to Logic tab
    Then User verify add new visible in Logic tab
    Then User select question "question1" in Logic tab dropdown
    Then User select question condition "Equals" in Logic tab dropdown
    Then User click and verify First Radio item Question 1 in Logic tab
    Then User Verify Clicking on Add condtion 1 functionality
    Then User select question of "question2" in Logic tab dropdown
    Then User select question 2 condition "Does not equal" in Logic tab dropdown
    Then User click and verify First Radio item Question 2 in Logic tab
    When User able to select actions for question2 "Enable/disable question"
    When User select question page 2 "question3" in Logic tab dropdown
    Then User able to see the questions after done logic

  @AS_116
  Scenario: AS_116 Verify edit rule functionality after logic done
    Given User logs in as "surveyMaker"
    Given the user is on the Survey List page
    Given the user creates a new survey by filling all mandatory details Both Language
      | Name        | Sample Survey    |
      | Department  | Administration   |
      | Language    | English          |
      | Language2   | Arabic           |
      | Expiry Date | 2026-12-25       |
      | Wait Period | 5                |
      | Description | Test survey desc |
    Then the survey configuration page should be displayed
    When User adding multiple pages with multiple questions Radio Button
    When User navigates to Logic tab
    Then User verify add new visible in Logic tab
    Then User select question "question1" in Logic tab dropdown
    Then User select question condition "Equals" in Logic tab dropdown
    Then User click and verify First Radio item Question 1 in Logic tab
    Then User Verify Clicking on Add condtion 1 functionality
    Then User select question of "question2" in Logic tab dropdown
    Then User select question 2 condition "Does not equal" in Logic tab dropdown
    Then User click and verify First Radio item Question 2 in Logic tab
    When User able to select actions for question2 "Enable/disable question"
    When User select question page 2 "question3" in Logic tab dropdown
    Then User able to see the questions after done logic
    When User able to edit rule functionality from question2 to "question3"
    When User aable to edit condition rule question2 "Not empty"
    Then User able to see logic rule after edited question summary

  @AS_117
  Scenario: AS_117 Verify Rule Deletion functionality
    Given User logs in as "surveyMaker"
    Given the user is on the Survey List page
    Given the user creates a new survey by filling all mandatory details Both Language
      | Name        | Sample Survey    |
      | Department  | Administration   |
      | Language    | English          |
      | Language2   | Arabic           |
      | Expiry Date | 2026-12-25       |
      | Wait Period | 5                |
      | Description | Test survey desc |
    Then the survey configuration page should be displayed
    When User adding multiple pages with multiple questions Radio Button
    When User navigates to Logic tab
    Then User verify add new visible in Logic tab
    Then User select question "question1" in Logic tab dropdown
    Then User select question condition "Equals" in Logic tab dropdown
    Then User click and verify First Radio item Question 1 in Logic tab
    Then User Verify Clicking on Add condtion 1 functionality
    Then User select question of "question2" in Logic tab dropdown
    Then User select question 2 condition "Does not equal" in Logic tab dropdown
    Then User click and verify First Radio item Question 2 in Logic tab
    When User able to select actions for question2 "Enable/disable question"
    When User select question page 2 "question3" in Logic tab dropdown
    Then User able to see the questions after done logic
    Then User able to delete rule functionality
    Then User verify add new visible in Logic tab

  @AS_118
  Scenario: AS_118 Verify Adding multiple rule by clicking on Add rule button
    Given User logs in as "surveyMaker"
    Given the user is on the Survey List page
    Given the user creates a new survey by filling all mandatory details Both Language
      | Name        | Sample Survey    |
      | Department  | Administration   |
      | Language    | English          |
      | Language2   | Arabic           |
      | Expiry Date | 2026-12-25       |
      | Wait Period | 5                |
      | Description | Test survey desc |
    Then the survey configuration page should be displayed
    When User adding multiple pages with multiple questions Radio Button
    When User navigates to Logic tab
    Then User verify add new visible in Logic tab
    Then User select question "question1" in Logic tab dropdown
    Then User select question condition "Equals" in Logic tab dropdown
    Then User click and verify First Radio item Question 1 in Logic tab
    Then User Verify Clicking on Add condtion 1 functionality
    Then User select question of "question2" in Logic tab dropdown
    Then User select question 2 condition "Does not equal" in Logic tab dropdown
    Then User click and verify First Radio item Question 2 in Logic tab
    When User able to select actions for question2 "Enable/disable question"
    When User select question page 2 "question3" in Logic tab dropdown
    When User click on Done
    Then User able to see existing summary on top

  ###### BUG - Not aable to ssuccess ###
  @AS_119
  Scenario: AS_119 Verify user can add a rule by writing an expression using the Manual Entry option
    Given User logs in as "surveyMaker"
    Given the user is on the Survey List page
    Given the user creates a new survey by filling all mandatory details Both Language
      | Name        | Sample Survey    |
      | Department  | Administration   |
      | Language    | English          |
      | Language2   | Arabic           |
      | Expiry Date | 2026-12-25       |
      | Wait Period | 5                |
      | Description | Test survey desc |
    Then the survey configuration page should be displayed
    When User adding multiple pages with multiple questions Radio Button
    When User navigates to Logic tab
    Then User able proceed with manual entry Option
    When User able to select actions for manual "Enable/disable question"

  @AS_120
  Scenario: AS_120 Verify all selected questions in a rule are displayed under All Questions dropdown
    Given User logs in as "surveyMaker"
    Given the user is on the Survey List page
    Given the user creates a new survey by filling all mandatory details Both Language
      | Name        | Sample Survey    |
      | Department  | Administration   |
      | Language    | English          |
      | Language2   | Arabic           |
      | Expiry Date | 2026-12-25       |
      | Wait Period | 5                |
      | Description | Test survey desc |
    Then the survey configuration page should be displayed
    When User adding multiple pages with multiple questions Radio Button
    When User navigates to Logic tab
    Then User verify add new visible in Logic tab
    Then User select question "question1" in Logic tab dropdown
    Then User select question condition "Equals" in Logic tab dropdown
    Then User click and verify First Radio item Question 1 in Logic tab
    Then User Verify Clicking on Add condtion 1 functionality
    Then User select question of "question2" in Logic tab dropdown
    Then User select question 2 condition "Does not equal" in Logic tab dropdown
    Then User click and verify First Radio item Question 2 in Logic tab
    When User able to select actions for question2 "Enable/disable question"
    When User select question page 2 "question3" in Logic tab dropdown
    When User click on Done
    Then User verify all questions logic

  @AS_121
  Scenario: AS_121 Verify redirect to static external link after survey submission in preview
    Given User logs in as "surveyMaker"
    Given the user is on the Survey List page
    Given the user creates a new survey by filling all mandatory details Both Language
      | Name        | Sample Survey    |
      | Department  | Administration   |
      | Language    | English          |
      | Language2   | Arabic           |
      | Expiry Date | 2026-12-25       |
      | Wait Period | 5                |
      | Description | Test survey desc |
    Then the survey configuration page should be displayed
    When User adding page1 multiple questions Radio Button
    When User verify static external link
    When User navigates to Preview tab
    When User verify next and compalte
    Then User verify notifier message Static URL

  ###### BUG - Not aable to External Link ###
  @AS_122
  Scenario: AS_122 Verify redirect to dynamic external link after survey submission in preview
    Given User logs in as "surveyMaker"
    Given the user is on the Survey List page
    Given the user creates a new survey by filling all mandatory details Both Language
      | Name        | Sample Survey    |
      | Department  | Administration   |
      | Language    | English          |
      | Language2   | Arabic           |
      | Expiry Date | 2026-12-25       |
      | Wait Period | 5                |
      | Description | Test survey desc |
    Then the survey configuration page should be displayed
    When User adding page1 multiple questions Radio Button
    When User verify dynamic external link
    When User navigates to Preview tab
    When User verify next and compalte
    Then User verify notifier message Dynamic URL

  @AS_123
  Scenario: AS_123 Verify that enabling Limit to One Response restricts survey to a single submission
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