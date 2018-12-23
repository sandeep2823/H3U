var OR = require('../json/ObjectRepository.json')
var HomePage = function () {
    this.Login = function () {
        element(by.model(OR.locators.homepage.username_textbox)).sendKeys(OR.test_data.homepage.username);
        element(by.model(OR.locators.homepage.password_textbox)).sendKeys(OR.test_data.homepage.password);
        element(by.buttonText(OR.locators.homepage.login_button_text)).click();
    };
};
module.exports = new HomePage()