//Milestone service used for milestones REST endpoint
angular.module('das.services').factory("Milestones", ['$resource', function($resource) {
    return $resource('milestones/:milestoneId', {
        milestoneId: '@id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);