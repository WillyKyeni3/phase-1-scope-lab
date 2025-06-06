// Write your solution in this file!
var customerName = "bob";
function upperCaseCustomerName(){
    console.log(customerName);
   return customerName.toUpperCase();
}
console.log(upperCaseCustomerName());


function setBestCustomer(){
    bestCustomer = "not bob"
}


function overwriteBestCustomer(){
    bestCustomer = "maybe bob";
}


const leastFavoriteCustomer = "Rose";
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "Jane";
}
console.log(changeLeastFavoriteCustomer());