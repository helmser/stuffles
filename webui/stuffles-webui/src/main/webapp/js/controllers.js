'use strict';

/* Controllers */


function SearchController($scope) {
	$scope.query = "Find some Stuffles"
	$scope.search = function() {
		
	}
}


function ActivityStreamController($scope, $http) {
	$http.get("data/activities.json").success(function(data) {
		$scope.activities = data.stream;
	});
}

function ProductController($scope) {
}
