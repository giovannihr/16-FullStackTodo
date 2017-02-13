(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('vstdaFactory', vstdaFactory);

    vstdaFactory.$inject = ['$http', '$q', 'toDoApiUrl'];

    /* @ngInject */
    function vstdaFactory($http, $q, toDoApiUrl) {
        var service = {
            getItems: getItems,
            postItems: postItems,
            deleteItems: deleteItems,
            updateItems: updateItems
        };
        return service;

        ////////////////

        function getItems() {

            //---------------------
            var defer = $q.defer();

            $http({
                method: 'GET',
                url: toDoApiUrl
            }).then(function(response) {
                if (typeof response.data === 'object') {

                    defer.resolve(response);
                } else {

                    defer.reject('no data found :(');
                }

            }, function(error) {

                console.log(error);
                defer.reject(error);

            });

            return defer.promise;

        }
        //---------------------
        function postItems(data) {
            var defer = $q.defer();

            $http({
                method: 'POST',
                url: toDoApiUrl,
                headers: { 'Content-Type': 'application/json' },
                data: data
            }).then(function(response) {
                if (typeof response.data === 'object') {

                    defer.resolve(response);
                } else {

                    defer.reject('no data found :(');
                }

            }, function(error) {

                console.log(error);
                defer.reject(error);

            });

            return defer.promise;

        }
        //---------------------
        function deleteItems(id) {
            var defer = $q.defer();

            $http({
                method: 'DELETE',
                url: toDoApiUrl + '/' + id,
                headers: { 'Content-Type': 'application/json' }

            }).then(function(response) {
                if (typeof response.data === 'object') {

                    defer.resolve(response);
                } else {

                    defer.reject('no data found :(');
                }

            }, function(error) {

                console.log(error);
                defer.reject(error);

            });

            return defer.promise;

        }
        //---------------------
        function updateItems(id, Data) {
            var defer = $q.defer();

            $http({
                method: 'PUT',
                url: toDoApiUrl + '/' + id,
                headers: { 'Content-Type': 'application/json' },


                data: Data


            }).then(function(response) {
                if (typeof response.data === 'object') {

                    defer.resolve(response);
                } else {

                    defer.reject('no data found :(');
                }

            }, function(error) {

                console.log(error);
                defer.reject(error);

            });

            return defer.promise;

        }
        //---------------------
    }
})();
