/**
 *
 */
var app = angular.module("app", ["ngRoute", "LocalStorageModule"]);
app.config(function (localStorageServiceProvider) {
	localStorageServiceProvider
		.setPrefix('myCVApp')
		.setStorageType('sessionStorage');
});
app.controller("editExpController", ["$scope", "localStorageService", function ($scope, localStorageService) {
	// localStorage
	var editCtrl = this;
	editCtrl.values = localStorageService.get("test");
	if(!editCtrl.values){
		editCtrl.values = [];
	}
	editCtrl.add = function(){
		editCtrl.values.push(editCtrl.value);
		editCtrl.value = '';
	}
	editCtrl.save = function(){
		localStorageService.set("test", editCtrl.values);
	}
}]);
app.config(function ($routeProvider) {
	$routeProvider.when('/', {
		controller:'mainController',
		templateUrl:'templates/main.html'
	}).when('/experience/new', {
		templateUrl: 'templates/experience/edit.html',
		controller: 'editExpController as editCtrl'
	}).otherwise({
		redirectTo: "/"
	});
});