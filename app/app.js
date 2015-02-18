angular.module('MainApp',[
    'Security.Controllers', 
    'Administration.Controllers', 
    'ngMaterial', 
    'ui.router'
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

.config(function($stateProvider,  $urlRouterProvider){
    $stateProvider

    .state('security-login', {
        url: '/security/login',
        templateUrl: 'app/security/views/login.html',
        controller: 'LoginController'
    })

    .state('administration', {
        templateUrl: 'app/administration/views/layout.html',
        controller: 'LayoutController',
        abstract: true
    })

    .state('administration.home', {
        url: '/administration/home/:parametro1',
        views: {
            content: {
                templateUrl: 'app/administration/views/home.html',
                controller: 'HomeController'
            }
        }
    })
   
    // if none of the above states are matched, use this as the fallback
    //$urlRouterProvider.otherwise("/security/login");
});