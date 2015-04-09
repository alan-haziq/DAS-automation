angular.module('das')
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('projects_costpackages', {
          url: "/projects/{id:[0-9]+}/costpackages",
          templateUrl: "views/projects/costpackages.html",
          controller: "ProjectCostPackagesController as projectCostPackagesCtrl",
          resolve: {
          	project: ['$stateParams', '$q', 'Projects', function($stateParams, $q, Projects) {
            	var deferred = $q.defer();

          		Projects.get({projectId:$stateParams.id}).$promise.then(function(projects) {
          			deferred.resolve(projects);
          		});

          		return deferred.promise;
          	}]
          }
      });

  }]);

angular.module('das.controllers')
  .controller('ProjectCostPackagesController', ['$scope', '$routeParams', '$location', 'Global', '$modal',
  			'project', 'Projects', 'COSTPACKAGE_TYPE', 'COSTPACKAGE_STATUS',
  	function ($scope, $routeParams, $location, Global, $modal, project, Projects, COSTPACKAGE_TYPE, COSTPACKAGE_STATUS) {
	    $scope.global = Global;

	    $scope.project = project;
      $scope.COSTPACKAGE_TYPE = COSTPACKAGE_TYPE;
      $scope.COSTPACKAGE_STATUS = COSTPACKAGE_STATUS;

      $scope.reload = function() {
        Projects.get({projectId:$scope.project.id}).$promise.then(function(project) {
            $scope.project = project;
          });
      };
    }]);