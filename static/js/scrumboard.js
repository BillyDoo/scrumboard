(function () {
    'use strict';

    angular.module('scrumboard.demo', ['ngRoute']) //define the controller
        .controller('ScrumboardController',
            ['$scope', '$http', 'Login', ScrumboardController]); //Angular Services

    function ScrumboardController($scope, $http, Login) {
        //add a new card
        $scope.add = function (list, title) {
            var card = {
                list: list.id,
                title: title
            };
//push the new card on the list
            $http.post('/scrumboard/cards/', card)
                .then(function (response) {
                        list.cards.push(response.data);
                    },
                    function () {
                        alert('Could not create card'); //Handle Error
                    }
                );

        };


        Login.redirectIfNotLoggedIn();
        $scope.data = [];
        $scope.logout = Login.logout;
        $scope.reverse = true;
        $scope.showFilters = false;

//get the updated lists
        $http.get('/scrumboard/lists/').then(
            function (response) {
                $scope.data = response.data;
            }
        );
    }

}());