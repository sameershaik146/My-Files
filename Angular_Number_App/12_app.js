//Create a Module
var app=angular.module('NumberApp',[]);
//Create a controller
app.controller('NumberAppCtrl',function ($scope) {
    $scope.number=null;
    $scope.strNumber='';
    $scope.numberArray=['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
    $scope.getStrNumber=function () {
        var tempStr='';
        if($scope.number!==undefined) {
            var numStr = $scope.number.toString();
           for (var i = 0; i < numStr.length; i++) {
                var index = parseInt(numStr.charAt(i));
              tempStr += $scope.numberArray[index] +" ";
            }
            $scope.strNumber = tempStr;
        }
        else{
            $scope.strNumber='';
        }
    }
})














app.directive('numbersOnly', function() {
    var directive = {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^0-9-]/g, '');
                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                return undefined;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }

    };
    return directive;
});