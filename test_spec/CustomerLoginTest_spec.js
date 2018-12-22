// import {describe, it} from "selenium-webdriver/testing";
var home_page = require('../pages/HomePage.js');
var base_page = require('../pages/BasePage.js');
var OR = require('../json/ObjectRepository.json');
describe("Customer Login", function () {

    it('Login as a customer', function () {
        base_page.navigateToUrl(OR.testsiteurl);
        home_page.Login();

        browser.sleep(3000);
    });
});
