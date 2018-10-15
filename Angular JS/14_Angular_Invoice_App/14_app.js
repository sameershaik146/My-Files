// Create a Module
var app = angular.module('InvoiceApp',[]);

// Create a Controller
app.controller('InvoiceAppCtrl',function() {
    this.editMode = true;
    this.invoice = {
        customer_data : {
            name : 'Mr. Rajan Jain',
            company : 'Jain Industries Inc.',
            address1 : 'Plot No. 112',
            address2 : 'Hitech City , Hyderabad',
            pincode : 500010
        },
        company_data : {
            name : 'UiBrains Techno Labs',
            company : 'UiBrains.com',
            address1 : 'Plot No. 1471, Road No. 12',
            address2 : 'Jubilee Hills , Hyderabad',
            pincode : 500120
        },
        items : [],
        gst : 13
    };
    this.addInvoiceItem = function() {
        var emptyItem = {
            description : '',
            quantity : null,
            cost : null
        };
        this.invoice.items.push(emptyItem);
    };
    this.deleteInvoiceItem = function(index) {
        this.invoice.items.splice(index,1);
    };
    this.subTotal = function() {
        var tempTotal = 0;
        this.invoice.items.forEach(function (item) {
            tempTotal += (item.quantity * item.cost);
        });
        return tempTotal;
    };
    this.addGST = function() {
      return this.subTotal() * (this.invoice.gst/100);
    };
    this.grandTotal = function() {
      return this.subTotal() + this.addGST();
    };
    this.switchOnEdit = function() {
      this.editMode = true;
    };
    this.switchOffEdit = function() {
        this.editMode = false;
    };
    this.printDoc = function() {
      window.print();
    };
});