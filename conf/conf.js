var jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter')
exports.config = {
    // does not require to start webdriver manager
    	directConnect : true,
		framework: 'jasmine2',
		seleniumAddress: 'http://localhost:4444/wd/hub',
		specs: ['../test_spec/CustomerLoginTest_spec.js', '../test_spec/DashboardTest_spec.js'],

	onPrepare: function () {
		browser.ignoreSynchronization=true;

        // var AllureReporter = require('jasmine-allure-reporter');
        // jasmine.getEnv().addReporter(new AllureReporter({
        //     resultsDir: '../allure-results'
        // }));

        // jasmine.getEnv().afterEach(function(done){
        //     browser.takeScreenshot().then(function (png) {
        //         allure.createAttachment('Screenshot', function () {
        //             return new Buffer(png, 'base64')
        //         }, 'image/png')();
        //         done();
        //     })
        // });

        jasmine.getEnv().addReporter(new jasmine2HtmlReporter({
                    savePath: '../allure-results'
                }));
    },
    // restartBrowserBetweenTests: true,

    "scripts": {
        "pretest": "rm -rf allure-report",
        "test": "protractor conf.js",
        "posttest": "allure generate allure-results --clean -o allure-report || true"
    }
}