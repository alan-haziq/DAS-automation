//FinanceModelItemLines service used for FinanceModelItemLines REST endpoint
angular.module('mean.services').factory("FinanceModelItemLines", ['$resource', function($resource) {
    return $resource('financeModelItemLines/:financeModelItemLineId', {
        articleId: '@id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);