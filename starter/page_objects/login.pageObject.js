export default class Login {
    constructor() {
        this.usernameInput = element(by.id('username'));
        this.passwordInput = element(by.id('password'));
        this.signInButton = element(by.css('button[type="submit"'));
    }

    loginAsUser(username, password) {
        this.usernameInput.sendKeys(username);
        this.passwordInput.sendKeys(password);
        this.signInButton.click();
    }
}