'use strict';

angular.module('myApp.nav', ['ngRoute'])

.controller('navCtrl', ['$scope', function ($scope) {

        $scope.initMetisMenu = function (selector) {
            $(selector).metisMenu();
        };

    }]);