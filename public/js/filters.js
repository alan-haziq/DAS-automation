angular.module('das.system')
	.filter('nl2br', function($sce){
	    return function(msg,is_xhtml) { 
	        var xhtml = is_xhtml || true;
	        var breakTag = (xhtml) ? '<br />' : '<br>';
	        var text = (msg + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1'+ breakTag +'$2');
	        return $sce.trustAsHtml(text);
	    };
	});