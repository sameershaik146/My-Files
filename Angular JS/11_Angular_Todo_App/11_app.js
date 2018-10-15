// Create a Module
var app = angular.module('GroceryApp',[]);

// Create a Controller
app.controller('GroceryAppCtrl',function() {
    this.groceryItem = '';
    this.groceryList = [];
    this.editMode = false;
    this.addItem = function() {
        // for empty item
        if(this.groceryItem !== ''){
            // If not exists in the array
            if(this.groceryList.indexOf(this.groceryItem) === -1){
                this.groceryList.push(this.groceryItem);
                this.groceryItem = '';
            }
            else{
                alert('Dude!!'+ this.groceryItem + ' already Exists');
                this.groceryItem = '';
            }
        }
        else{
            alert('Dude!! Enter at least one Item');
        }
    };
    this.OnEditMode = function() {
        this.editMode = true;
    };
    this.OffEditMode = function() {
        this.editMode = false;
    };
    this.deleteItem = function(index) {
        this.groceryList.splice(index,1);
    };
    this.replaceItem = function(index,value) {
        this.groceryList.splice(index,1,value);
    };
});