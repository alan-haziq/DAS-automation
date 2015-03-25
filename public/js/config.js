angular.module('das')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/dashboard/dashboard.html'
            })
            .otherwise( {
                redirectTo: '/'
            });
    }]);
//Setting HTML5 Location Mode
angular.module('das').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix("!");
    }
]);