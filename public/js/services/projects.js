//Project service used for projects REST endpoint
angular.module('mean.services').factory("Projects", ['$resource', function($resource) {
    return $resource('projects/:articleId', {
        articleId: '@id'
    }, {
        update: {
            method: 'PUT'
        },
        addUser: {
        	method: 'POST',
        	url: 'projects/:articleId/users'
        },
        removeUser: {
            method: 'DELETE',
            url: 'projects/:articleId/users'
        }
    });
}]);