angular.module('MainApp',[
    'Security.Controllers', 
    'Administration.Controllers', 
    'Layout.Controllers',
    'Dashboard.Controllers',
    'Test.Controllers',
    'ngMaterial',
    'ui.router',
    'restangular'
])


.run(function ($rootScope, $state, $location, $log) {
    $log.debug("application is running!!");

    //RESTRICT ACCESS TO LOGIN USER'S ONLY
    $rootScope.$on('$stateChangeStart', function (event, toState) {
       
        /*
        if ( (toState.name == "services" || toState.name == "services-details") && !$Profile.isAuthenticated()) {
           
        }
        */

    });

    $location.path('/security/login');
})
.config(function (RestangularProvider) {
    RestangularProvider.setBaseUrl('http://api.openweathermap.org/data/2.5/');
})
.config(function($stateProvider,  $urlRouterProvider){
    $stateProvider

    .state('security-login', {
        url: '/security/login',
        templateUrl: 'app/security/views/login.html',
        controller: 'LoginController'
    })

    .state('layout', {
        templateUrl: 'app/layout/views/layout.html',
        controller: 'LayoutController',
        abstract: true
    })

    .state('layout.dashboard', {
        url: '/dashboard/:parametro1',
        views: {
            content: {
                templateUrl: 'app/dashboard/views/index.html',
                controller: 'DashboardController'
            }
        }
    })
    .state('layout.test', {
        url: '/test',
        views: {
            content: {
                templateUrl: 'app/test/views/test.html',
                controller: 'TestController'
            }
        }
    })
   
    // if none of the above states are matched, use this as the fallback
    //$urlRouterProvider.otherwise("/security/login");
});