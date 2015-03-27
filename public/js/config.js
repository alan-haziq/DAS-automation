/* Configure ocLazyLoader(refer: https://github.com/ocombe/ocLazyLoad) */
angular.module('das')
.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        // global configs go here
    });
}]);

angular.module('das')
.config(['$controllerProvider', function($controllerProvider) {
  // this option might be handy for migrating old apps, but please don't use it
  // in new ones!
  $controllerProvider.allowGlobals();
}]);

//Setting HTML5 Location Mode
angular.module('das').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix("!");
    }
]);

/* Setup global settings */
angular.module('das').factory('settings', ['$rootScope', function($rootScope) {
    // supported languages
    var settings = {
        layout: {
            pageSidebarClosed: false, // sidebar menu state
            pageBodySolid: false, // solid body color state
            pageAutoScrollOnLoad: 1000 // auto scroll to top on page load
        },
        layoutImgPath: Metronic.getAssetsPath() + 'admin/layout/img/',
        layoutCssPath: Metronic.getAssetsPath() + 'admin/layout/css/'
    };

    $rootScope.settings = settings;

    return settings;
}]);

/* Setup Rounting For All Pages */
angular.module('das').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    // Redirect any unmatched url
    $urlRouterProvider.otherwise("dashboard");  
}]);

angular.module('das')
    .run(function(editableOptions, editableThemes) {
        editableThemes.bs3.inputClass = "input-sm";
        editableThemes.bs3.buttonsClass = "btn-sm";
        editableOptions.theme = 'bs3';
    });