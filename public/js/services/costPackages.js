//CostPackages service used for CostPackages REST endpoint
angular.module('das.services').factory("CostPackages", ['$resource', function($resource) {
    return $resource('costPackages/:costPackageId', {
        articleId: '@id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);