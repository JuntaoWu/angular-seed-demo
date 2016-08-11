'use strict';

angular.module('myApp.upload', ['ngRoute', 'angularFileUpload'])

.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/upload/inline', {
            templateUrl: 'upload/inline.html',
            controller: 'inlineCtrl'
        });
    }])

.controller('inlineCtrl', ['$scope', 'FileUploader', 'inlineService', function ($scope, FileUploader, inlineService) {
        
        inlineService.getQiniuToken().then(function (token) {
            $scope.token = token;
        });
        
        var uploader = $scope.uploader = new FileUploader({
            url: 'http://upload.qiniu.com',
            autoUpload: true
        });
        
        $scope.currentFile = "";
        
        //uploader.onWhenAddingFileFailed = function (item /*{File|FileLikeObject}*/, filter, options) {
        //    console.info('onWhenAddingFileFailed', item, filter, options);
        //};
        uploader.onAfterAddingFile = function (fileItem) {
            console.info('onAfterAddingFile', fileItem);
            $scope.currentFile = fileItem.name;
        };
        //uploader.onAfterAddingAll = function (addedFileItems) {
        //    console.info('onAfterAddingAll', addedFileItems);
        //};
        uploader.onBeforeUploadItem = function (item) {
            console.info('onBeforeUploadItem', item);
            item.formData.push({ token: $scope.token });
            item.formData.push({ key: item.file.name });
        };
        //uploader.onProgressItem = function (fileItem, progress) {
        //    console.info('onProgressItem', fileItem, progress);
        //};
        //uploader.onProgressAll = function (progress) {
        //    console.info('onProgressAll', progress);
        //};
        //uploader.onSuccessItem = function (fileItem, response, status, headers) {
        //    console.info('onSuccessItem', fileItem, response, status, headers);
        //};
        //uploader.onErrorItem = function (fileItem, response, status, headers) {
        //    console.info('onErrorItem', fileItem, response, status, headers);
        //};
        //uploader.onCancelItem = function (fileItem, response, status, headers) {
        //    console.info('onCancelItem', fileItem, response, status, headers);
        //};
        uploader.onCompleteItem = function (fileItem, response, status, headers) {
            console.info('onCompleteItem', fileItem, response, status, headers);
            fileItem.url = "http://7xsvf8.com1.z0.glb.clouddn.com/" + response.key;
        };
        //uploader.onCompleteAll = function () {
        //    console.info('onCompleteAll');
        //};


    }]);