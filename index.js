// Write your solution in this file!
var customerName = "bob";
function upperCaseCustomerName(){
   const upperCaseName = customerName.toUpperCase();
   console.log ("Result for upperCaseCustomerName function: ", upperCaseName);
   return upperCaseName;
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