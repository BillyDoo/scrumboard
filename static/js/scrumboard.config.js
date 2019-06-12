(function () {
    'use strict';

    angular.module('scrumboard.demo')
        .config(['$routeProvider', config])
        .run(['$http', run]);

    function config($routeProvider) {

        $routeProvider //route the correct url to the browser
            .when('/', {
                templateUrl: '/static/html/scrumboard.html',
                controller: 'ScrumboardController'
            })
            .when('/login', {
                templateUrl: '/static/html/login.html',
                controller: 'LoginController'
            })
            .otherwise('/');
    }


    function run($http) {           //Handle the CSRF cookie
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';
    };
})();

