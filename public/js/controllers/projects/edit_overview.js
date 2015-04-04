angular.module('das.controllers')
  .controller('ProjectEditOverviewController', ['$scope', 'Global','$modalInstance',
  				'Projects', 'project', 'PROJECT_TYPE', 'PROJECT_STATUS', 'OPPORTUNITY_TYPE', 
  	function ($scope, Global, $modalInstance, Projects, project, PROJECT_TYPE, PROJECT_STATUS, OPPORTUNITY_TYPE) {

  		$scope.project = project;
	    $scope.PROJECT_TYPE = PROJECT_TYPE;
	    $scope.PROJECT_STATUS = PROJECT_STATUS;
	    $scope.OPPORTUNITY_TYPE = OPPORTUNITY_TYPE;

	    $scope.onUpdate = function(callback) {
	    	$scope.project.$update(callback);
	    };
	    $scope.onOK = function() {
	    	$scope.onUpdate(function() {
	    		$modalInstance.close(true);
	    	});

	    };
    	$scope.onCancel = function() {
    		$modalInstance.dismiss();
    	};
  }]);