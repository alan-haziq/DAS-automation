angular.module('das')
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('projects_edit', {
          url: "/projects/{id:[0-9]+}",
          templateUrl: "views/projects/edit.html",
          controller: "ProjectEditController as projectEditCtrl",
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
  .controller('ProjectEditController', ['$scope', '$routeParams', '$location', 'Global', 'ngTableParams', 
  				'Projects', 'project', 'PROJECT_TYPE', 'PROJECT_STATUS', 'OPPORTUNITY_TYPE', 
  	function ($scope, $routeParams, $location, Global, ngTableParams, Projects, project, PROJECT_TYPE, PROJECT_STATUS, OPPORTUNITY_TYPE) {
	    $scope.global = Global;

	    $scope.project = project;

	    $scope.PROJECT_TYPE = PROJECT_TYPE;
	    $scope.PROJECT_STATUS = PROJECT_STATUS;
	    $scope.OPPORTUNITY_TYPE = OPPORTUNITY_TYPE;

	    $scope.onReload = function() {
	    	Projects.get({projectId:$scope.project.id}).$promise.then(function(project) {
      			$scope.project = project;
      		});
	    };

	    $scope.onUpdate = function() {
	    	console.log('---Saving project---');
	    	console.log($scope.project);
	    	$scope.project.$update();
	    };
    
  }]);