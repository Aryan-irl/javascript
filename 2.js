const accountId=144553
let accountEmail="ar@google.com"
var accountPass="12345"
accountCity="delhi"

// accountId=3// not allowed
accountEmail="hc@hc.com"
accountPass="212121"
accountCity="gurgaon"

/*
don't use var cuz of issue in block scope and functional scope 

*/
console.log(accountId);
console.table([accountId,accountCity,accountEmail,accountPass])