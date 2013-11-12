var myApp = angular.module('myApp',[]);

myApp.config(['$httpProvider', function($httpProvider) {
   delete $httpProvider.defaults.headers.common["X-Requested-With"];
}]);

function SendCtrl($scope, $http)
{

	$scope.sendData = function() {
	    $http({method: 'POST', url: 'http://api.thingspeak.com/update?key=O5AJZ9S6LY7911CA&field1=44'}).success(function(data) {
	    //$scope.posts = data;
	    });
	  };
}

