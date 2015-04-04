angular.module('das')
	.constant('PROJECT_TYPE', {
		'DAS'		: 'DAS',
		'WLAN'		: 'WLAN',
		'SMALL_CELL': 'Small Cell', 
	})
	.constant('PROJECT_STATUS', {
		'EVALUATION'	: 'EVALUATION',
		'PLANNING'		: 'PLANNING',
		'BUILDING'		: 'BUILDING',
		'COMPLETED'		: 'COMPLETED'
	})
	.constant('OPPORTUNITY_TYPE', {
		'DAS'		: 'DAS',
		'WLAN'		: 'WLAN',
		'SMALL_CELL': 'Small Cell', 
		'COMBINED'	: 'Combined'
	})
	.constant('MILESTONE_STATUS', {
		'PENDING'		: 'Pending',
		'IN PROGRESS'	: 'In Progress',
		'COMPLETED'		: 'Completed', 
		'BLOCKED'		: 'Blocked'
	})
	.constant('USER_ROLE', {
		'Leasing Agent'		: 'Leasing Agent',
		'Account Manager'	: 'Account Manager',
		'TAM'				: 'TAM', 
		'RF Engineer'		: 'RF Engineer', 
		'VGM'				: 'VGM', 
		'PM'				: 'PM'
	})
	.constant('FINANCIAL_MODEL_STATUS', {
		'PENDING'	: 'Pending',
		'ACTIVE'	: 'Active',
		'CLOSED'	: 'Closed'
	})
	.constant('COSTPACKAGE_TYPE', {
		'ROM'	: 'ROM',
		'PRELIM': 'Prelim',
		'FINAL'	: 'Final'
	})
	.constant('COSTPACKAGE_STATUS', {
		'PENDING'	: 'Pending',
		'ACTIVE'	: 'Active',
		'CLOSED'	: 'Closed'
	})
	.constant('COSTPACKAGELINES_RATENAME', {
		'UP-FRONT'	: 'Upfront',
		'MONTHLY'	: 'Monthly'
	})
	.constant('COSTPACKAGELINES_FINANCIAL_TYPE', {
		'COST'		: 'Cost',
		'REVENUE'	: 'Revenue'
	})
;