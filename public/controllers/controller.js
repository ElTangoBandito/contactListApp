var myApp = angular.module("myApp", []);

myApp.controller("AppCtrl", ["$scope", "$http", 
	function($scope, $http){
		
		var refresh = function(){
			$http.get("/resumeWeb/skill").success(function(response){
				console.log("Got data!");
				$scope.skills = response;
			});
			$http.get("/resumeWeb/school").success(function(response){
				console.log("Got data!");
				$scope.schools = response;
			});
			$http.get("/resumeWeb/project").success(function(response){
				console.log("Got data!");
				$scope.projects = response;
			});
		};
		refresh();
		
	}]);