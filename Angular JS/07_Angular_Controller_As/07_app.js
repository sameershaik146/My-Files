// Create a Module
var app = angular.module('NestedAliasApp',[]);

// Create a Parent Controller
app.controller('ParentAliasCtrl',function() {
    this.test = '';
});

// Create a Child Controller
app.controller('ChildAliasCtrl',function() {
    // this.test = '';
});