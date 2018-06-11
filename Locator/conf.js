exports.config = {
		directConnect: true,

		  // Capabilities to be passed to the webdriver instance.
		  capabilities: {
		   'browserName': 'firefox'

		  },
  framework: 'jasmine',
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['TestSelect.js'],
	jasmineNodeOpts:{
			defaultTimeInterval:30000
	}
}

//C:\Users\Poltu\AppData\Roaming\npm\node_modules\protractor\node_modules\webdriver-manager\selenium\geckodriver