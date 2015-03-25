angular.module('das')
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('dashboard', {
          url: "/dashboard",
          templateUrl: "views/dashboard/dashboard.html",
          controller: "DashboardController as dashboardCtrl",
          resolve: {
          }
      });

  }]);

angular.module('das.controllers')
  .controller('DashboardController', ['$scope', '$routeParams', '$location', 'Global', function ($scope, $routeParams, $location, Global) {
    $scope.global = Global;
    console.log(Global);
  }]);