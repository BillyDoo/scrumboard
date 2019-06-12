(function () {
    'use strict';

    angular.module('scrumboard.demo') //retrieve the module object
        .directive('scrumboardCard', CardDirective);//call this method on module object

    function CardDirective() {
        return {
            templateUrl: '/static/html/card.html', //binds the HTML
            restrict: 'E', //Element
            controller: ['$scope', '$http', function ($scope, $http) {
               var url = '/scrumboard/cards/' + $scope.card.id + '/';

               $scope.destList = $scope.list;

               $scope.update = function () {
                    return $http.put(
                        url,
                        $scope.card
                    );
                };

                function removeCardFromList(card, list) {
                    var cards = list.cards;
                    cards.splice(
                        cards.indexOf(card),
                        1
                    );
                }
//remove card from the list
                $scope.delete = function () {
                    $http.delete(url).then(
                        function(){
                            removeCardFromList($scope.card, $scope.list);
                        }
                    );
                };

                $scope.modelOptions = { //use the delete function once
                    debounce: 500
                };

//Move the selected card to the new DesList
                $scope.move = function () {
                    if ($scope.destList === undefined) {
                        return;
                    }
                    $scope.card.list = $scope.destList.id;
                    $scope.update().then(function () {
                        {
                            removeCardFromList($scope.card, $scope.list);
                            $scope.destList.cards.push($scope.card);
                        }
                    });
                }
            }]
        };
    }
})();
