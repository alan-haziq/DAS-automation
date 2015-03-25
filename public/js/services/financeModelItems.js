//financeModelItems service used for FinanceModelItems REST endpoint
angular.module('das.services').factory("FinanceModelItems", ['$resource', function($resource) {
    return $resource('financeModelItems/:financeModelItemId', {
        articleId: '@id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);