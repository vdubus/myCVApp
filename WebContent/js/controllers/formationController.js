/**
 * 
 */
app.controller("formationController", [ "$scope", "$http", function($scope, $http){
	$http.get("mocks/formationDataMock.json").then(function(response) {
		$scope.formationList = response.data;
	}, function(response) {
		alert('error formation');
	});
}]);