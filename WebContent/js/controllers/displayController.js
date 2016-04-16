/**
 *
 */
app.controller("displayController", [ "$scope", "$http", function($scope, $http) {
	$http.get("mocks/experienceDataMock.json").then(function(response) {
		$scope.experienceList = response.data;
	}, function(response) {
		alert('error experience');
	});
	$http.get("mocks/formationDataMock.json").then(function(response) {
		$scope.formationList = response.data;
	}, function(response) {
		alert('error formation');
	});
	$http.get("mocks/hobbyDataMock.json").then(function(response) {
		$scope.hobbyList = response.data;
	}, function(response) {
		alert('error hobby');
	});
} ]);