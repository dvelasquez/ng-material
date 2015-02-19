/**
 * Created by dvelasquez on 18-02-15.
 */
angular.module('Test.Controllers')
    .factory('TestRepository',['restangular', 'AbstractRepository',
    function(Restangular, AbstractRepository){
        function TestRepository(){
            AbstractRepository.call(this, Restangular, 'param');
        }
        AbstractRepository.extend(TestRepository);
        return new TestRepository;
    }])
.controller('TestController', function TestController($scope) {
        $scope.projects = ["hola","chao"];
    });