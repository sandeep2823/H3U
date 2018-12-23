var base_page = require('../pages/BasePage.js');
var DashboardPage = function () {
    this.goToHealthCard = function(){
        element(by.xpath('/html/body/div[1]/div[3]/div/div/div[1]/a/div')).click();
    };

    this.goToToolAndTracker = function(){
        element(by.xpath('/html/body/div[1]/div[3]/div/div/div[2]/a/div')).click();
    };

    this.goToOnlineOpinions = function(){
        element(by.xpath('/html/body/div[1]/div[3]/div/div/div[3]/a/div')).click();
    };

    this.logoutFromApplication = function () {
            element(by.xpath('//*[@id="slidemenu"]/ul/li[8]/a')).click();
            browser.sleep(2000)
    };

    this.validateHomeText = function(actual_text) {
        // var home_text = element(by.xpath('//*[@id="slidemenu"]/ul/li[1]/a'));
        // base_page.validateText(home_text, actual_text)
        browser.sleep(2000)
        home_text = element(by.xpath('//*[@id="slidemenu"]/ul/li[1]/a')).getText();
        home_text.then(function (home_text) {
            console.log(home_text);
            expect(home_text).toBe(actual_text);
        })
    };

    this.valdateAboutUsText = function(actual_text) {
        about_us_text = element(by.xpath('//*[@id="slidemenu"]/ul/li[2]/a')).getText();
        about_us_text.then(function (about_us_text) {
            console.log(about_us_text);
            expect(about_us_text).toBe(actual_text);
        })
    };

    this.valdateHowToUseText = function(actual_text) {
        how_to_use_text = element(by.xpath('//*[@id="slidemenu"]/ul/li[3]/a')).getText();
        how_to_use_text.then(function (how_to_use_text) {
            console.log(how_to_use_text);
            expect(how_to_use_text).toBe(actual_text);
        })
    };

    this.valdateProductInfoText = function(actual_text) {
        product_info_text = element(by.xpath('//*[@id="slidemenu"]/ul/li[4]/a')).getText();
        product_info_text.then(function (product_info_text) {
            console.log(product_info_text);
            expect(product_info_text).toBe(actual_text);
        })
    };

    this.valdateNetworkText = function(actual_text) {
        network_text = element(by.xpath('//*[@id="slidemenu"]/ul/li[5]/a')).getText();
        network_text.then(function (network_text) {
            console.log(network_text);
            expect(network_text).toBe(actual_text);
        })
    };

    this.valdateContactText = function(actual_text) {
        contact_text = element(by.xpath('//*[@id="slidemenu"]/ul/li[6]/a')).getText();
        contact_text.then(function (contact_text) {
            console.log(contact_text);
            expect(contact_text).toBe(actual_text);
        })
    };

    this.valdateProfileText = function(actual_text) {
        profile_text = element(by.xpath('//*[@id="ddProfile"]')).getText();
        profile_text.then(function (profile_text) {
            console.log(profile_text);
            expect(profile_text).toBe(actual_text);
        })
    };

    this.valdateLogoutText = function(actual_text) {
        logout_text = element(by.xpath('//*[@id="slidemenu"]/ul/li[8]/a')).getText();
        logout_text.then(function (logout_text) {
            console.log(logout_text);
            expect(logout_text).toBe(actual_text);
        })
    };
};
module.exports = new DashboardPage();