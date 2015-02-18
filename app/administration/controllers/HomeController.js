angular.module('Administration.Controllers')

.controller('HomeController', function($scope, $stateParams){
    $scope.name = $stateParams.parametro1;
});