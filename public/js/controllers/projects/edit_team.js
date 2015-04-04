angular.module('das.controllers')
  .controller('ProjectEditTeamController', ['$scope', 'Global','$modalInstance',
  				'Projects', 'project', 'USER_ROLE', 
  	function ($scope, Global, $modalInstance, Projects, project, USER_ROLE) {

  		$scope.project = project;
	    $scope.USER_ROLE = USER_ROLE;

	    $scope.onUpdate = function() {
	    	$scope.project.$update();
	    };
	    $scope.onOK = function() {
	    	// $scope.onUpdate();

	    	$modalInstance.close(true);
	    };
    	$scope.onCancel = function() {
    		$modalInstance.dismiss();
    	};
  }]);