const accountId = 144553 // const does not allow any future changes/modifications
let accountEmail = "hitesh@google.com" // let can be modified
var accountPassword = "12345" // same as let but has issues related to scope
accountCity = "Jaipur" // shows the poor behavior of JS , never use this type of assignment
let accountState; // will show undefined

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])