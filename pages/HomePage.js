var OR = require('../json/ObjectRepository.json')
var HomePage = function () {
    this.Login = function () {
        element(by.model(OR.locators.homepage.username_textbox)).sendKeys("12345");
        element(by.model(OR.locators.homepage.password_textbox)).sendKeys("1234567");
        element(by.buttonText(OR.locators.homepage.login_button_text)).click();
    };
};
module.exports = new HomePage()