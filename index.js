/* Your code goes here */
var customerName = 'bob';
function upperCaseCustomerName (){
    customerName = 'BOB'
}
var bestCustomer ;
function setBestCustomer (){
    bestCustomer = 'not bob' ;
}
function overWriteBestCustomer(){
    bestCustomer = 'maybe bob'
}
const leastFavoriteCustomer = 'Ahmed' ;
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'Mido'
    console.log(leastFavoriteCustomer);
}
let favoriteCustomer = 'bob';
function attemptTwoFavoriteCustomers(){
  let favoriteCustomer = 'not bob';

  throw SyntaxError(SyntaxError)
}