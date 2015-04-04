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
  .controller('ProjectEditController', ['$scope', '$routeParams', '$location', 'Global', '$modal',
  			'project', 'Projects', 'PROJECT_TYPE', 'PROJECT_STATUS', 'OPPORTUNITY_TYPE', 'MILESTONE_STATUS',
  	function ($scope, $routeParams, $location, Global, $modal, project, Projects, PROJECT_TYPE, PROJECT_STATUS, OPPORTUNITY_TYPE, MILESTONE_STATUS) {
	    $scope.global = Global;

	    $scope.project = project;
	    $scope.PROJECT_TYPE = PROJECT_TYPE;
	    $scope.PROJECT_STATUS = PROJECT_STATUS;
	    $scope.OPPORTUNITY_TYPE = OPPORTUNITY_TYPE;
	    $scope.MILESTONE_STATUS = MILESTONE_STATUS;

	    $scope.reload = function() {
	    	Projects.get({projectId:$scope.project.id}).$promise.then(function(project) {
      			$scope.project = project;
      		});
	    };

	    var openModal = function(template, controller, resolve) {
	    	resolve = _.extend({
    			project: function() { return $scope.project; }
    		}, resolve);
	    	var instModal = $modal.open({
	    		templateUrl: template,
	    		controller: controller,
	    		resolve: resolve
	    	});

	    	instModal.result.then(function(result) {
	    		$scope.reload();
	    	}, function() {

	    	});
	    };

	    $scope.onUpdateProjectDetail = function() {

	    	openModal('views/projects/edit_overview.html', 
	    			'ProjectEditOverviewController');

	    };

	    $scope.onUpdateProjectStatus = function() {
			
			openModal('views/projects/new_status.html', 
	    			'ProjectNewStatusController');

	    };

	    $scope.onEditMilestone = function(milestoneId) {
			openModal('views/projects/edit_milestone.html', 
	    			'ProjectEditMilestoneController',
	    			{ 
	    				milestoneId: function() { return milestoneId; } 
	    			});	    	
	    };
  }]);