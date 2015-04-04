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
	    	var callback = function() {
	    		$modalInstance.close(true);
	    	};
	    	if(milestoneId != "") {
	    		$scope.milestone.$update(callback);
	    	}
	    	else {
	    		$scope.milestone.$save(callback);
	    	}
	    };

	    $scope.onCancel = function() {
	    	$modalInstance.dismiss();
	    };

	    if(milestoneId != "") {
	    	Milestones.get({milestoneId:milestoneId}).$promise.then(function(milestone) {
      			$scope.milestone = milestone;
      		});
	    }
	    else {
	    	$scope.milestone = new Milestones({ProjectId: project.id});
	    }


    
  }]);