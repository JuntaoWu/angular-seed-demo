'use strict';

angular.module('myApp.common.elem-directive', [])

.directive('elemReady', ['$timeout', '$parse', function ($timeout, $parse) {
        return function (scope, elm, attrs) {
            elm.ready(function () {
                $timeout(function () {
                    var func = $parse(attrs.elemReady);
                    func(scope);
                });
            });
        };
    }]);