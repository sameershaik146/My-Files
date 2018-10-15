// Create a Module
var app = angular.module('CalculatorApp',[]);

// Create a Controller
app.controller('CalculatorAppCtrl',function() {
    this.firstNumber = null;
    this.secondNumber = null;
    this.operator = '+';
    this.results = 'RESULT';
    this.changeOperator = function(symbol) {
        this.operator = symbol;
    };
    this.calculate = function() {
      var temp = 0;
      if(this.firstNumber !== null && this.secondNumber !== null){
          switch(this.operator) {
              case '+':
                  temp = this.firstNumber + this.secondNumber;
                  break;
              case '-':
                  temp = this.firstNumber - this.secondNumber;
                  break;
              case '/':
                  temp = this.firstNumber / this.secondNumber;
                  break;
              case '*':
                  temp = this.firstNumber * this.secondNumber;
                  break;
          }
          this.results = temp;
      }
      else{
          this.results = 'RESULT';
      }
    };
    this.clearAll = function() {
        this.firstNumber = '';
        this.secondNumber = '';
        this.operator = '+';
        this.results = 'RESULT';
    };
});