//Milestone service used for milestones REST endpoint
angular.module('mean.services').factory("Milestones", ['$resource', function($resource) {
    return $resource('milestones/:milestonesId', {
        articleId: '@id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);