// Arrays to store account information
var accountNumbers = [];
var pins = [];
var names = [];
var balances = [];

// Controls the main program loop
var running = true;

while (running) {

    console.log("===== BANKING SYSTEM =====");
    console.log("1. Create Account");
    console.log("2. Login");
    console.log("3. Exit");

    var choice = prompt("Enter Choice");

    // CREATE ACCOUNT
    if (choice === "1") {

        var accNo = prompt("Enter Account Number");
        var name = prompt("Enter Name");
        var pin = prompt("Enter PIN");

        // Check if account number already exists
        var exists = false;

        for (var i = 0; i < accountNumbers.length; i++) {

            if (accountNumbers[i] === accNo) {
                exists = true;
            }

        }

        if (exists) {

            console.log("Account Number Already Exists");

        } else {

            // Save account data
            accountNumbers.push(accNo);
            pins.push(pin);
            names.push(name);
            balances.push(0);

            console.log("Account Created Successfully");

        }

    }

}