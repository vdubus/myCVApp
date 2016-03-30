/**
 * 
 */
app.controller("experienceController", [ "$scope", "$http", function($scope, $http) {
	$http.get("http://www.mocky.io/v2/56fbbf211000003522687974").then(function(response) {
		$scope.experienceList = response.data;
	}, function(response) {
		alert('error');
	});
} ]);