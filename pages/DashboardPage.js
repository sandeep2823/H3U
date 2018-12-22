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
};
module.exports = new DashboardPage();