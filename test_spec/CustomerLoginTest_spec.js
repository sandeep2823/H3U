var logger = require('../log.js');
var home_page = require('../pages/HomePage.js');
var base_page = require('../pages/BasePage.js');
var dashboard_page = require('../pages/DashboardPage.js');
var OR = require('../json/ObjectRepository.json');
describe("Customer Login", function () {
    afterEach(function () {
        dashboard_page.logoutFromApplication();
    })

    it('Login as a customer', function () {
        base_page.navigateToUrl(OR.testsiteurl);
        logger.log('info', 'Navigating to the website');
        home_page.Login();
        logger.log('info', 'Login in to the application');
        browser.sleep(2000);
        dashboard_page.valdateLogoutText('Logout');
        browser.sleep(2000);

    });
});
