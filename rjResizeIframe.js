/* global angular */
/* https://github.com/robjames/rjResizeIframe */
angular.module('rjResizeIframe', [])
.directive('rjResizeIframe', ['$interval',function($interval){
	return {
		link: function(scope, element, attrs){
			var origHeight = 0;

			var updateHeight = function(){
				var height = $(element[0].contentWindow.document).find('body').outerHeight(true);
				if (height !== origHeight){
					origHeight = height+50;//hack for IE
					element.height(origHeight);
				}
			};
			var intPromise = $interval(updateHeight, 1000, 0, false);
		}
	};
}]);
