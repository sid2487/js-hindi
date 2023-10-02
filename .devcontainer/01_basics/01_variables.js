const accountId = 144553
let accountEmail = "sid@google.com"
var accountPassword = "1245" // I has scope problems
accountCity = "Jaipur" // not a good practise
let accountState; 


// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "12457856"
accountCity = "Bengaluru"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/