angular.module('das.controllers')
  .controller('ProjectNewStatusController', ['$scope', 'Global','$modalInstance',
  				'Projects', 'project', 'PROJECT_STATUS', 
  	function ($scope, Global, $modalInstance, Projects, project, PROJECT_STATUS) {

  		$scope.project = project;
	    $scope.PROJECT_STATUS = PROJECT_STATUS;

	    $scope.onUpdate = function() {
	    	$scope.project.$update();
	    };
	    $scope.onOK = function() {
	    	$scope.onUpdate();

	    	$modalInstance.close(true);
	    };
    	$scope.onCancel = function() {
    		$modalInstance.dismiss();
    	};
  }]);