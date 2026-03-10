import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import surveyListpage from "../pages/surveyListpage";

const sl = new surveyListpage();


Then("the survey list table headers should be visible", () => {
    sl.SurveyListheading();
});

Then("check multiple elements on the Survey List page should be visible", () => {
    sl.SurveyListElements();
});

Then("click on a survey with Draft status", () => {
    sl.selectDraftStatusOfAnyRow();
});
Then("click on a survey with In Review status", () => {
    sl.selectInreviewstatusOfanyRow();
});
Then("click on a survey with Approved status", () => {
    sl.selectApprovedstatusOfanyRow();
});
Then("click on a survey with Rejected status", () => {
    sl.selectRejectedStatusOfAnyRow();
});
When("click on three dot menu a survey with Draft status", () => {
    sl.clickThreeDotMenuForStatusinDraft();
});
Then("click on Delete action", () => {
    sl.clickOnDeletesurvey();
    sl.surveyDeleteconfirmation()
});
When("count per page changes as user change total page from header", () => {
    sl.countPerpageChnages();
});

Then("the survey list table should update to show the selected number of surveys per page", () => {
    sl.countPerpageChnages();
});
When("click on three dot menu of survey with In review status", () => {
    sl.clickThreeDotMenuForStatusinReview('In Review');
});
When("click on three dot menu of survey with Approved status", () => {
    sl.clickThreeDotMenuForStatusinAprrove('Approve');
});
When("click on Schedule option", () => {
    sl.clickOnScheduleoption();
});
When("click on make a copy", () => {
    sl.clickOnmakeCopy();
});
When("click on open draft survey", () => {
    sl.clickOpendraftSurvey();
});
When("click on make a copy from basic details page", () => {
    sl.makeCopysurveyDetailspage();
});

When("click on page navigation", () => {
    sl.clickOnnavigationPage();
});
When("filter by name", () => {
    cy.fixture('testData').then((data) => {
        const surveyName = data.surveyName;
        sl.clickOnFilterByName(surveyName);
        sl.clickFilterSearch();
    });
});

When("filter by Department", () => {
    // Read the saved survey name from fixture
    cy.fixture('testData').then((data) => {
        const Department = data.Department; // "Copy of distinction on"
        sl.clickOnFilterByDepartment(Department); // call your function
        sl.clickFilterSearch();
    });
})

When("filter by Language", () => {
    // Read the saved survey name from fixture
    cy.fixture('testData').then((data) => {
        const Language = data.Language; // "Copy of distinction on"
        sl.clickOnFilterByLanguage(Language); // call your function
        sl.clickFilterSearch();
    });
})
When("filter by Status", () => {
    cy.fixture('testData').then((data) => {
        const Status = data.Status;
        sl.clickOnFilterByStatus(Status); // call your function
        sl.clickFilterSearch();
    });
})
When("click on back to list", () => {
    sl.clickOnbackTolist();
})
When("select the survey with Approved status", () => {
    sl.selectApprovedstatusOfanyRow();
})
When("open the survey details of selected survey", () => {
    sl.openSurveyDetailsOfSelectedSurvey();
})
When("click on Reset", () => {
    sl.clickOnrest();
})
When("Click the sorting arrow available on Name column", () => {
    sl.clickOnnameSorting();
})
When("Click the sorting arrow available on status column", () => {
    sl.clickOnstatusSorting();
})
When("click on three dot menu of survey with In review status for rejecting the survey",()=>{
    sl.clickOninReviewasSurvaymaker();
})
When("reject the survey with comments",()=>{
    sl.rejectSurveywithcomments();
})
