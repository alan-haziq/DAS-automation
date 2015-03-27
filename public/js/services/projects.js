//Project service used for projects REST endpoint
angular.module('das.services').factory("Projects", ['$resource', function($resource) {
    return $resource('projects/:projectId', {
        projectId: '@id'
    }, {
        update: {
            method: 'PUT'
        },
        addUser: {
        	method: 'POST',
        	url: 'projects/:projectId/users'
        },
        removeUser: {
            method: 'DELETE',
            url: 'projects/:projectId/users'
        }
    });
}]);