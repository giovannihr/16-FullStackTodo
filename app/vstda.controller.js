(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('MainController', MainController);

    MainController.$inject = ['vstdaFactory', 'toastr'];

    /* @ngInject */
    function MainController(vstdaFactory, toastr) {
        var vm = this;
        vm.title = 'MainController';
        vm.sortByType = '';
        getItemsResponse();

        ////////////////
        vm.chooseClass = function(item) {
            return (item.priorityLevel === "High") ? 'bg-primary' : (item.priorityLevel === "Medium") ? 'bg-warning' : 'bg-success';
        };

        //----------
        function getItemsResponse() {
            vstdaFactory.getItems().then(
                function(response) {
                    console.log(response);

                    vm.toDoList = response.data;
                    toastr.success('We have items!!');
                },
                function(error) {
                    if (error.data) {
                        toastr.error('There was a problem: ' + error.data);
                    } else {
                        toastr.info('no data found  ');
                    }

                }
            )
        }
        //----------

        vm.postItems = function() {
                vstdaFactory.postItems({ "Text": vm.toDoItem, "priorityLevel": vm.priority, "CreatedDate": new Date() }).then(
                    function(response) {
                        console.log(response);

                        getItemsResponse();
                        // toastr.success('We have items!!');
                    },
                    function(error) {
                        if (error.data) {
                            toastr.error('There was a problem: ' + error.data);
                        } else {
                            toastr.info('no data found  ');
                        }

                    }
                )

            }
            //----------
        vm.deleteItem = function(id) {
                vstdaFactory.deleteItems(id).then(
                    function(response) {
                        console.log(response);

                        getItemsResponse();
                        // toastr.success('We have items!!');
                    },
                    function(error) {
                        if (error.data) {
                            toastr.error('There was a problem: ' + error.data);
                        } else {
                            toastr.info('no data found  ');
                        }

                    }
                )

            }
            //----------
        vm.updateItem = function(id, item) {
                vstdaFactory.updateItems(id, item).then(
                    function(response) {
                        console.log(response);

                        getItemsResponse();
                        // toastr.success('We have items!!');
                    },
                    function(error) {
                        if (error.data) {
                            toastr.error('There was a problem: ' + error.data);
                        } else {
                            //  toastr.info('no data found  ');
                        }

                    }
                )

            }
            //----------
    }
})();
