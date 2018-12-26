var home_page = require('../pages/HomePage.js');
var base_page = require('../pages/BasePage.js');
var dashboard_page = require('../pages/DashboardPage.js');
var OR = require('../json/ObjectRepository.json');
describe("Dashboard Page", function () {
    afterEach(function () {
        // dashboard_page.logoutFromApplication();
    })

    it('Validate Dashboard Page', function () {
        base_page.navigateToUrl(OR.testsiteurl);
        home_page.Login();
        // browser.sleep(2000)
        dashboard_page.validateHomeText('Home');
        dashboard_page.valdateAboutUsText('About Us');
        dashboard_page.valdateHowToUseText('How To Use');
        dashboard_page.valdateProductInfoText('Product Info');
        dashboard_page.valdateNetworkText('Network');
        dashboard_page.valdateContactText('Contact');
        dashboard_page.valdateProfileText('Profile');
        dashboard_page.valdateLogoutText('Logout');
        browser.sleep(2000);

    });
});