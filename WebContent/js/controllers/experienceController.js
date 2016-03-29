/**
 * 
 */
app.controller("experienceController", [ "$scope", function($scope) {
	$scope.experienceList = [ {
		"enterpriseName" : "Enterprise 01",
		"posteDescription" : "Work description",
		"projectList" : [ {
			"projectName" : "Project 01",
			"projectDescription" : "Project 01 description"
		}, {
			"projectName" : "Project 02",
			"projectDescription" : "Project 02 description"
		}, {
			"projectName" : "Project 03",
			"projectDescription" : "Project 03 description"
		} ]
	}, {
		"enterpriseName" : "Enterprise 02",
		"posteDescription" : "Work description",
		"projectList" : [ {
			"projectName" : "Project 01",
			"projectDescription" : "Project 01 description"
		}, {
			"projectName" : "Project 02",
			"projectDescription" : "Project 02 description"
		}, {
			"projectName" : "Project 03",
			"projectDescription" : "Project 03 description"
		} ]
	}, {
		"enterpriseName" : "Enterprise 03",
		"posteDescription" : "Work description",
		"projectList" : [ {
			"projectName" : "Project 01",
			"projectDescription" : "Project 01 description"
		}, {
			"projectName" : "Project 02",
			"projectDescription" : "Project 02 description"
		}, {
			"projectName" : "Project 03",
			"projectDescription" : "Project 03 description"
		} ]
	} ];
} ]);