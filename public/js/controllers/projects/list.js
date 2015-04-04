angular.module('das')
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('projects', {
          url: "/projects",
          templateUrl: "views/projects/list.html",
          controller: "ProjectsController as projectsCtrl",
          resolve: {
          	projects: ['$stateParams', '$q', 'Projects', function($stateParams, $q, Projects) {
            	var deferred = $q.defer();

          		Projects.query().$promise.then(function(projects) {
          			deferred.resolve(projects);
          		});

          		return deferred.promise;
          	}]
          }
      });

  }]);

angular.module('das.controllers')
  .controller('ProjectsController', ['$scope', '$state', '$routeParams', '$location', 'Global', 'ngTableParams', 'projects',
  	function ($scope, $state, $routeParams, $location, Global, ngTableParams, projects) {
	    $scope.global = Global;

	    $scope.projects = projects;

	 //    $scope.tableParams = new ngTableParams(
	 //    	{
		// 		page: 1,            // show first page
		// 		count: 10,
		// 		onCount: function(count) {
		// 		}
		// 	//, sorting: false,
		// 	}, 
		// 	{
		// 		total: function() { return $scope.projects.length; },
		// 		getData: function($defer, params) {
		// 			if (!$scope.projects || !$scope.projects.length) return [];

		// 			data = params.doFilterableAction ( $scope.projects );
		// 			var orderedData = data;
		// 			if(params.sorting()) {
		// 				var orderBy = params.orderBy();
		// 				if(orderBy.length > 0) {
		// 					var dir = orderBy[0][0];
		// 					var fieldName = orderBy[0].substring(1);
		// 					// $filter('orderBy')(data, orderBy);
		// 					orderedData = _.sortBy(orderedData, function(item) {
		// 						return item[fieldName];
		// 					});
		// 					if(dir == '-') orderedData = orderedData.reverse();
		// 				}
		// 			}
		// 			params.total(data.length);

		// 			$defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
		// 		},
		// 		getFilteredData: function($defer, params, filterable) {
		// 			if (!$scope.projects || !$scope.projects.length) return [];

		// 			data = params.doFilterableAction ( $scope.projects, filterable );

		// 			$defer.resolve(data);
		// 		}
		// 	}
		// );

		$scope.onOpenProject = function(project_id) {
			$state.go('projects_edit', {id: project_id});
		};
    
  }]);