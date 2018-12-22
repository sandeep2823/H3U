var BasePage = function () {
  this.navigateToUrl = function (url) {
    browser.get(url);
  }

  this.getPageTitle = function () {
    return browser.getTitle();
  }

  this.validateText = function(element_locator, actual_text) {
      validate_text = element(element_locator).getText();
      validate_text.then(function (text) {
          console.log(text);
          expect(text).toBe(actual_text);
      })
  }
};
module.exports = new BasePage();