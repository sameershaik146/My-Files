//Create a module
var app=angular.module('ClockApp',[])

//Create a controller
app.controller('ClockAppCtrl',function ($scope,$interval) {

    //Create a Indian Clock function
    $scope.indianClock=function () {
     var today=new Date();
     var options={timeZone:'Asia/kolkata'};
     $scope.indianTime=today.toLocaleTimeString('en-us',options);
     $scope.indianDate=today.toLocaleDateString('en-us',options);
    };
    //Calling the indianCLock function
    $interval($scope.indianClock,1000);


    //Create the USA Clock function
    $scope.usaClock=function () {
        var today=new Date();
        var options={timeZone:'America/New_York'};
        $scope.usaTime=today.toLocaleTimeString('en-us',options);
        $scope.usaDate=today.toLocaleDateString('en-us',options);
    };
    $interval($scope.usaClock,1000);

    //Create the China CLock function
    $scope.chinaClock=function () {
        var today=new Date();
        var options={timeZone:'Asia/Shanghai'};
        $scope.chinaTime=today.toLocaleTimeString('en-us',options);
        $scope.chinaDate=today.toLocaleDateString('en-us',options);
    };
    $interval($scope.chinaClock,1000);
});