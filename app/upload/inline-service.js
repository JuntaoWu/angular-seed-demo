'use strict';

angular.module('myApp.upload')

.factory('inlineService', ['$timeout', '$http', function ($timeout, $http) {
        
        function getQiniuToken() {
            var promise = $http({
                url: "http://localhost:3000/getToken"
            }).then(function (response) {
                return response.data.token;
            });
            return promise;
        }
        
        return {
            getQiniuToken: getQiniuToken
        };
    }]);