//financeModelItems service used for FinanceModelItems REST endpoint
angular.module('mean.services').factory("FinanceModelItems", ['$resource', function($resource) {
    return $resource('financeModelItems/:financeModelItemId', {
        articleId: '@id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);