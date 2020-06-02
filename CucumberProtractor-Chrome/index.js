var reporter = require('cucumber-html-reporter');

var options = {
    theme: 'bootstrap',
    jsonFile: './cucumber_report.json',
    output: './cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "App Version":"0.3.2",
        "Test Environment": "Prod Env",
        "Browser": "Chrome  54.0.2840.98",
        "Platform": "Windows 7",
        "Parallel": "Scenarios",
        "Executed": "Remote"
    }
};

reporter.generate(options);


