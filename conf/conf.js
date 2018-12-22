exports.config = {
    // does not require to start webdriver manager
    	directConnect : true,
		framework: 'jasmine2',
		seleniumAddress: 'http://localhost:4444/wd/hub',
		specs: ['../test_spec/DashboardTest_spec.js'],

	onPrepare: function () {
		browser.ignoreSynchronization=true;
    }
}