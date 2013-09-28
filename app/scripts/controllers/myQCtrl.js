'use strict';

angular.module('asApp')
.controller('myQCtrl', ['$scope', '$resource', 
	function ($scope, $resource) {
   	$scope.myQCtrl = {
   		search: function(query) {
   			return $resource('http://localhost\\:8000/q/:q')
   			.get({q: query});
   		}
   	}
}]);