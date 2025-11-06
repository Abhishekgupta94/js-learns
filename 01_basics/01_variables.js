const accountId = 12256
let accountEmail = "Abhi@chrome.com"
/* 
we dont use varnow because it doesn't follow scope limit(block scope and function scope)*/
var accountPassword = '112233'
accountCity = "Chennai"
let accountState // if we want print it give 'undefined' as o/p

accountEmail = "ab@cd.com"
accountPassword = '000000'
accountCity = 'Delhi'
// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

//to view all in a table
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
