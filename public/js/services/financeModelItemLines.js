//FinanceModelItemLines service used for FinanceModelItemLines REST endpoint
angular.module('das.services').factory("FinanceModelItemLines", ['$resource', function($resource) {
    return $resource('financeModelItemLines/:financeModelItemLineId', {
        articleId: '@id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);