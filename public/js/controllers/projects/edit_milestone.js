angular.module('das.controllers')
  .controller('ProjectEditMilestoneController', ['$scope', 'Global', '$modalInstance', 'Projects', 'Milestones', 
  			'project', 'milestoneId', 'MILESTONE_STATUS',
  	function ($scope, Global, $modalInstance, Projects, Milestones, project, milestoneId, MILESTONE_STATUS) {

  		$scope.project = project;
	    $scope.MILESTONE_STATUS = MILESTONE_STATUS;

	    $scope.onReload = function() {
	    	$scope.$parent.reload();
	    };


	    $scope.onOK = function() {
	    	$scope.milestone.$update();

	    	$modalInstance.close(true);
	    };

	    $scope.onCancel = function() {
	    	$modalInstance.dismiss();
	    };

	    if(milestoneId != "") {
	    	Milestones.get({milestoneId:milestoneId}).$promise.then(function(milestone) {
      			$scope.milestone = milestone;
      		});
	    }


    
  }]);