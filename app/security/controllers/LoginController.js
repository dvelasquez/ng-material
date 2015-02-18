angular.module('Security.Controllers')

.controller('LoginController', function($scope, $log, $state){

    $scope.name = 'Hola Mundo';

    $scope.next = function(){
    	$state.go("layout.dashboard", {
    		parametro1: "Hola Mundo desde Angular JS"
    	})
    }
});