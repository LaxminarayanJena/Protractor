var PropertiesReader = require('properties-reader');
var prop = PropertiesReader('./properties/prop.properties');


exports.config = {
    directConnect: true,
    getPageTimeout:60000,
    allScriptsTimeout:50000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        'browserName': 'chrome'

    },

    plugins: [{
        package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
        options:{
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true,
            reportName:'CucumberJS Report',
            pageFooter:'<div><p>Created by Jena</p></div>',
            pageTitle:'CucumberJS with Protractor Report',
            customData: {
                title: 'Execution info',
                data: [
                    {label: 'Project',value:'Cucumber JS Project'},
                    {label: 'Release',value:'1.0'},
                    {label: 'Tester',value:'LaxminarayanJena'},
                ]
            },
            displayDuration:true
            }
    }],

    maxSessions:1,
    specs: ['features/*.feature'],

    cucumberOpts: {
        tags:false,
        //format:'json:cucumber_report.json',
        format: 'json:.tmp/results.json',
       // require: ['features/stepDefinitions/stepDefination.js']
        require: [prop.get('stepPath')]
    }
};


//https://www.npmjs.com/package/protractor-cucumber-framework