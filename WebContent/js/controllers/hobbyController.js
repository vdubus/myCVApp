/**
 * 
 */
app.controller("hobbyController", ["$scope", "$http", function($scope, $http) {
	$http.get("mocks/hobbyDataMock.json").then(function(response) {
		$scope.hobbyList = response.data;
	}, function(response) {
		alert('error hobby');
	});
}]);