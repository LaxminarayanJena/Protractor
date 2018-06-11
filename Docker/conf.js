exports.config = {
	
	
  framework: 'jasmine',
  specs: ['ByModel.js'],
 
	 multiCapabilities: [{
  'browserName': 'chrome'
}, {
  'browserName': 'firefox'
}],
	 
  seleniumAddress: 'http://192.168.99.100:4444/wd/hub',
  allScriptsTimeout: 50000,
  
  onPrepare: function(){
    browser.manage().timeouts().implicitlyWait(15000);
},
  
jasmineNodeOpts: {
defaultTimeoutInterval: 50000
}
}