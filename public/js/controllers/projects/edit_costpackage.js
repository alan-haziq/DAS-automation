angular.module('das.controllers')
  .controller('ProjectEditCostPackageController', ['$scope', 'Global','$modalInstance',
  				'Projects', 'CostPackages', 'CostPackageLines', 'project', 'costPackageId', 'COSTPACKAGE_TYPE', 'COSTPACKAGE_STATUS', 'COSTPACKAGELINES_RATENAME', 'COSTPACKAGELINES_FINANCIAL_TYPE',
  	function ($scope, Global, $modalInstance, Projects, CostPackages, CostPackageLines,  project, costPackageId, COSTPACKAGE_TYPE, COSTPACKAGE_STATUS, COSTPACKAGELINES_RATENAME, COSTPACKAGELINES_FINANCIAL_TYPE) {

  		$scope.project = project;
	    $scope.COSTPACKAGE_TYPE = COSTPACKAGE_TYPE;
	    $scope.COSTPACKAGE_STATUS = COSTPACKAGE_STATUS;
	    $scope.COSTPACKAGELINES_RATENAME = COSTPACKAGELINES_RATENAME;
	    $scope.COSTPACKAGELINES_FINANCIAL_TYPE = COSTPACKAGELINES_FINANCIAL_TYPE;

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

    	if(costPackageId == "") {
    		$scope.costPackage = new CostPackages({ProjectId: project.id});
    	}
  }]);