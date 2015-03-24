//financeModelItems service used for financemodels REST endpoint
angular.module('mean.services').factory("FinanceModels", ['$resource', function($resource) {
    return $resource('financeModels/:financeModelId', {
        articleId: '@id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);