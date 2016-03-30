/**
 * 
 */
app.controller("experienceController", [ "$scope", "$http", function($scope, $http) {
	$http.get("mocks/experienceDataMock.json").then(function(response) {
		$scope.experienceList = response.data;
	}, function(response) {
		alert('error');
	});
} ]);