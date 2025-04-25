const accountId = 12345
let accountEmail = "Sanika@gmail.com"
var accountPassword = "2705"
accountCity = "Kolhapur"
let accountState;

//accountId = 2 not allowed

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail= "Krishna.com"
accountPassword = "97767"
accountCity = "Pune"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

