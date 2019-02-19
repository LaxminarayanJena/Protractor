exports.config = {
    directConnect: true,
    getPageTimeout:60000,
    allScriptsTimeout:50000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {'browserName': 'chrome'},
    specs: ['features/*.feature'],

    cucumberOpts: {
        tags:false,
        format:'json:cucumber_report.json',
        require: ['features/stepDefinitions/stepDefination.js']
    }
};


//https://www.npmjs.com/package/protractor-cucumber-framework