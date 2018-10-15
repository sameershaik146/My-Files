//Create a module
var app=angular.module('LoginApp',[]);

//create a controller
app.controller('LoginAppCtrl',function($scope){
    $scope.username='';
    $scope.email='';
    $scope.password='';
    $scope.remPassword=null
});