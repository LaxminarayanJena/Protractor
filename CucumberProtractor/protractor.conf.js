exports.config = {
    directConnect: true,
    getPageTimeout:60000,
    allScriptsTimeout:50000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    multiCapabilities: [{
         "browserName": 'firefox'
    },{
        "browserName": 'chrome'
    }],

    plugins: [{
        package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
        options:{
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true,
            reportName:'CucumberJS Report'
        }
    }],

    maxSessions:2,
    specs: ['features/*.feature'],

    cucumberOpts: {
        tags:false,
        //format:'json:cucumber_report.json',
        format: 'json:.tmp/results.json',
        require: ['features/stepDefinitions/stepDefination.js']
    }
};


//https://www.npmjs.com/package/protractor-cucumber-framework