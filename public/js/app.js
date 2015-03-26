angular.module('das', ['ngCookies', 'ngResource', 'ngRoute', "oc.lazyLoad",  "ngSanitize", 'ui.bootstrap', 'ui.router', 
	'angular-lodash',
	'ui.slider', 'checklist-model', 'ngTable',
	'das.system', 'das.services', 'das.controllers']);

angular.module('das.system', []);
angular.module('das.services', []);
angular.module('das.controllers', []);