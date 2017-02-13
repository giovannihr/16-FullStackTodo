(function() {
    'use strict';

    angular
        .module('myApp', ['toastr'])
        .value('toDoApiUrl', 'http://localhost:52797/api/ToDoEntries');
})();


//-------------------------------------------------------------------
//-------------------------------------------------------------------
//-------------------------------------------------------------------
//-------------------------------------------------------------------
//myApp = angular.module('myApp', []);


//myApp.controller('MainController', ['$scope', function($scope) {


/* $scope.toDoList = [];

 $scope.addToDoItem = function() {

     $scope.toDoList.push({ 'name': $scope.toDoItem, 'priorityLevel': parseInt($scope.priority) });
     $scope.toDoItem = '';
     $scope.priority = '';



 };
*/

/* $scope.chooseClass = function(item) {
     return (item.priorityLevel === 1) ? 'bg-primary' : (item.priorityLevel === 2) ? 'bg-warning' : 'bg-success';
 }

 $scope.sortByType = '';
*/

/*$scope.sortByHighPriority = function() {

};

$scope.sortByLowPriority = function() {

};
*/



//}]);
