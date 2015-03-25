
angular.module('das.controllers')
  .controller('ProjectsController', ['$scope', '$routeParams', '$location', 'Global', function ($scope, $routeParams, $location, Global) {
    $scope.global = Global;

    
  }]);