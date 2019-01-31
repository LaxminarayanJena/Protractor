exports.config = {
		directConnect: true,
		//it will not ask for webdriver manager
		//C:\Users\selenium\AppData\Roaming\npm\node_modules\protractor\example

		  // Capabilities to be passed to the webdriver instance.
		  capabilities: {
		   'browserName': 'chrome'
		    
		  },
  framework: 'jasmine',
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['FirstTest.js']
}