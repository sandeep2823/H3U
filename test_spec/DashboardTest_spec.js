var home_page = require('../pages/HomePage.js');
var base_page = require('../pages/BasePage.js');
var dashboard_page = require('../pages/DashboardPage.js');
describe("Dashboard Page", function () {

    it('Validate Dashboard Page', function () {
        base_page.navigateToUrl('https://www.h3u.com/itgi/#!/login/');
        home_page.Login();
        // browser.sleep(2000)
        dashboard_page.validateHomeText('Home')
        browser.sleep(3000);
    });
});