//CostPackageLines service used for CostPackageLines REST endpoint
angular.module('das.services').factory("CostPackageLines", ['$resource', function($resource) {
    return $resource('costPackageLines/:costPackageLineId', {
        articleId: '@id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);