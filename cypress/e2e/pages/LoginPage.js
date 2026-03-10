import Messages from "./Messages";

class LoginPage {

    usernameInput() {
        return cy.get("input[id='username']", { timeout: 90000 });
    }

    passwordInput() {
        return cy.get("input[id='password']", { timeout: 90000 });
    }

    loginButton() {
        return cy.contains('button', 'Login', { timeout: 90000 });
    }

    successToast() {
        return cy.get("div.Toastify__toast.Toastify__toast-theme--light.Toastify__toast--success", { timeout: 90000 });
    }

    logout() {
        return cy.contains('.profile-menu_dropdown li', 'Logout', { timeout: 90000 });
    }

    profileMenuName() {
        return cy.get('.profile-menu__content', { timeout: 90000 });
    }

    profileDropdown() {
        return cy.get('.profile-menu_dropdown', { timeout: 90000 });
    }

    enterUsername(username) {
        cy.log('Entering username');
        this.usernameInput({ timeout: 30000 }).then($input => {
            if ($input.length && $input.is(':visible') && !$input.is(':disabled')) {
                cy.log('Username input is visible and enabled');
                cy.wrap($input).clear({ force: true });
            } else {
                const msg = 'Username input is not visible or disabled';
                cy.log(msg);
                throw new Error(msg);
            }
        });
        cy.log('Re-querying username input after clear');
        this.usernameInput({ timeout: 30000 }).then($input => {
            if ($input.length && $input.is(':visible') && !$input.is(':disabled')) {
                cy.wrap($input).type(username, { force: true });
                cy.log(`Username entered: ${username}`);
            } else {
                const msg = 'Username input not available after clear';
                cy.log(msg);
                throw new Error(msg);
            }
        });
    }

    enterPassword(password) {
        cy.log('Entering password');
        this.passwordInput({ timeout: 30000 }).then($input => {
            if ($input.length && !$input.is(':disabled') && $input.is(':visible')) {
                cy.log('Password input is visible and enabled');
                cy.wrap($input).clear({ force: true }).type(password);
                cy.log('Password entered');
            } else {
                const msg = 'Password input is not visible or disabled';
                cy.log(msg);
                throw new Error(msg);
            }
        });
    }

    clickLogin() {
        cy.log('Clicking Login button');
        this.loginButton({ timeout: 30000 }).then($btn => {
            if ($btn.length && !$btn.is(':disabled') && $btn.is(':visible')) {
                cy.log('Login button is visible and enabled');
                cy.wrap($btn).click({ force: true });
            } else {
                const msg = 'Login button is not visible or disabled';
                cy.log(msg);
                throw new Error(msg);
            }
        });
    }

    verifyLoginSuccess() {
        cy.log('Verifying login success toast');
        this.successToast({ timeout: 30000 }).then($toast => {
            const expectedMsg = Messages.getMessage('LOGIN_SUCCESS_MESSAGE');
            if ($toast.length && $toast.is(':visible') && $toast.text().includes(expectedMsg)) {
                cy.log(`Login success message verified: ${expectedMsg}`);
            } else {
                const msg = 'Login success toast not visible or text mismatch';
                cy.log(msg);
                throw new Error(msg);
            }
        });
    }

    clickOnlogout() {
        cy.log('Clicking profile menu');
        this.profileMenuName({ timeout: 30000 }).scrollIntoView({ ensureScrollable: false }).click({ force: true });
        cy.log('Profile menu clicked');
        cy.log('Clicking logout button');
        this.logout({ timeout: 30000 }).then($logout => {
            if ($logout.length && $logout.is(':visible')) {
                cy.wrap($logout).click({ force: true });
                cy.log('Logout clicked successfully');
            } else {
                const msg = 'Logout button not visible';
                cy.log(msg);
                throw new Error(msg);
            }
        });
    }


}

export default LoginPage;
