/**
 * Created by dvelasquez on 18-02-15.
 */
angular.module('Test.Controllers')
    .factory('TestRepository', ['Restangular', 'AbstractApiFactory',
        function (restangular, AbstractApiFactory) {
            function TestRepository() {
                var query = 'find?q=Santiago&units=metric';

                AbstractApiFactory.call(this, restangular, query);
            }

            AbstractApiFactory.extend(TestRepository);
            return new TestRepository;
        }])
    .controller('TestController', function TestController($scope, TestRepository, $log) {
        $scope.projects = ["hola", "chao"];
        $scope.jsonResponse = TestRepository.getJson();
        $log.debug(TestRepository.getJson());
    });