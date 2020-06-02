var customlocators = function() {

		
	by.addLocator('ngClick', function(toState,parentelement) {
	
		
		 var using = parentelement || document ;
		 var prefixes = ['ng-click'];
	      for (var p = 0; p < prefixes.length; ++p) {
	          var selector = '*[' + prefixes[p] + '="' + toState + '"]';
	          var inputs = using.querySelectorAll(selector);
	          if (inputs.length) {
	              return inputs;
	          }
	      }		
		
});
}

module.exports = new customlocators();
