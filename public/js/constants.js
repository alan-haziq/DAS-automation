angular.module('das')
	.constant('PROJECT_TYPE', {
		'DAS'		: 'DAS',
		'WLAN'		: 'WLAN',
		'SMALL_CELL': 'Small Cell', 
	})
	.constant('PROJECT_STATUS', {
		'EVALUATION'		: 'EVALUATION',
		'PLANNING'		: 'PLANNING',
		'BUILDING': 'BUILDING',
		'COMPLETED': 'COMPLETED'
	})
	.constant('OPPORTUNITY_TYPE', {
		'DAS'		: 'DAS',
		'WLAN'		: 'WLAN',
		'SMALL_CELL': 'Small Cell', 
		'COMBINED': 'Combined'
	})
;