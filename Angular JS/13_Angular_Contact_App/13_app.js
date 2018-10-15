// Create a Module
var app = angular.module('ContactApp',[]);

// Create a Controller
app.controller('ContactAppCtrl',function($scope,$http) {
    $scope.contactsList = null;
    $scope.selectedContact = {};
    $http.get('db.json').then(function(response) {
        $scope.contactsList = response.data.contacts;
    });
    $scope.getContact = function(index) {
        $scope.selectedContact = $scope.contactsList[index];
    };
});