

exports.config = {


	directConnect: true,

	// Capabilities to be passed to the webdriver instance.
	multiCapabilities: [{
		browserName: 'chrome'
	}],


	framework: 'jasmine2',



	specs: ['./functional/*.spec.js'],

	suites: {

			smoke: ['./smoke/!*.spec.js'],
			regression: ['./regression/!*.spec.js'],
			functional: ['./functional/!*.spec.js'],
			all: ['./!*!/!*.spec.js'],
			selected: ['./functional/addcustomer.spec.js','./regression/openaccount.spec.js'],


	},
//in cmd-  protractor conf.js --suites=smoke
	//protractor conf.js --suites=smoke,regression
    //protractor conf.js --suites=selected
    //in webstorm configuration application parameters-D:\Webstorm\ProtractorModules\ProtractorTest\TestSuite\conf.js --suites=smoke
	//to skip a testcase  write xit instead of it
	// Options to be passed to Jasmine.
	jasmineNodeOpts: {
		defaultTimeoutInterval: 30000
	}









}