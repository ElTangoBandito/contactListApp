var myApp = angular.module("myApp", []);

myApp.controller("AppCtrl", ["$scope", "$http", 
	function($scope, $http){
		console.log("Hello World!");
		
		var refresh = function(){
			$http.get("/contactlist").success(function(response){
				console.log("Got data!");
				$scope.contactlist = response;
			});
		};
		refresh();
		
		
		$scope.addContact = function(){
			$http.post("/contactlist", $scope.contact).success(function(response){
				console.log(response);
				refresh();
			});
		};
		
		$scope.remove = function(id){
			console.log(id);
			$http.delete("/contactlist/" + id).success(function(response){
				refresh();
			});
		};
		
		$scope.edit = function(id){
			$http.get("/contactlist/" + id).success(function(response){
				$scope.contact = response;
			});
		};
		
		$scope.update = function(){
			$http.put("/contactlist/" + $scope.contact._id, $scope.contact).success(function(response){
				refresh();
			});
		};
		
		$scope.dselect = function(){
			$scope.contact = "";
		}
		
	}]);
		
		//$http.get("/contactlist");
		
		/*
		person1 = {
			name:"Timmy",
			email:"timidtimmy@timidy.com",
			number:"882-213-2612"
		};
		
		person2 = {
			name:"Ghost",
			email:"ghosterino@aaa.com",
			number:"464-223-1263"
		};
		
		person3 = {
			name:"Kiki",
			email:"32keke@yahoo.com",
			number:"556-043-3253"
		};
		
		var contactlist = [person1, person2, person3];
		$scope.contactlist = contactlist;
		*/