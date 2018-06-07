exports.config = {
		directConnect: true,

		  // Capabilities to be passed to the webdriver instance.
		  capabilities: {
		   'browserName': 'chrome'
		    
		  },
  framework: 'jasmine',
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['Banking.js'],

            onPrepare: function() {
                // Add a screenshot reporter and store screenshots to `/tmp/screnshots`:
                var HtmlReporter = require('protractor-html-screenshot-reporter');
                jasmine.getEnv().addReporter(new HtmlReporter({
                    baseDirectory: './Reports',
                    filename:'Results.html'

                }));
            },

    onComplete:function () {
        console.log("Sending Mail with reports for the test execution");
        var sys= require('util')
        var exec= require('child_process').exec;
        function puts(error,stdout,stderr) {sys.puts(stdout)}
        exec("node mail.js",puts);

    }
}



