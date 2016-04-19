
app.controller("experienceEditionController", [ "localStorageService", function(localStorageService) {
	var experiences = localStorageService.get("experiences");
	if(!experiences){
		experiences = [];
		localStorageService.add("experiences", experiences);
	}
	this.experience = {};
	this.save = function (){
		experiences.push(this.experience);
		localStorageService.add("experiences", experiences);
	};
} ]);