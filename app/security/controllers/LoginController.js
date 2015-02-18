angular.module('Security.Controllers')

.controller('LoginController', function($scope, $log, $state){

    $scope.name = 'Hola Mundo';

    $scope.next = function(){
    	$state.go("administration.home", {
    		parametro1: "Hola Mundo desde Angular JS"
    	})
    }
});