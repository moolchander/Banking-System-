```javascript`
// Arrays to store account information
var accountNumbers = [];
var pins = [];
var names = [];
var balances = [];

// Main program control
var running = true;

while (running) {

    var choice = prompt(
        "===== BANKING SYSTEM =====\n" +
        "1. Create Account\n" +
        "2. Login\n" +
        "3. Exit"
    );

    // CREATE ACCOUNT
    if (choice === "1") {

        var accNo = prompt("Enter Account Number");
        var name = prompt("Enter Name");
        var pin = prompt("Enter PIN");
        var balance = Number(prompt("Enter Initial Balance"));

        var exists = false;

        // Check duplicate account number
        for (var i = 0; i < accountNumbers.length; i++) {

            if (accountNumbers[i] === accNo) {
                exists = true;
            }

        }

        if (exists) {

            console.log("Account Number Already Exists");

        }
        else if (balance < 0) {

            console.log("Balance Cannot Be Negative");

        }
        else {

            accountNumbers.push(accNo);
            pins.push(pin);
            names.push(name);
            balances.push(balance);

            console.log("Account Created Successfully");
            console.log("Account Holder: " + name);
            console.log("Balance: " + balance);

        }

    }

    // LOGIN
    else if (choice === "2") {

        var loginAcc = prompt("Enter Account Number");
        var loginPin = prompt("Enter PIN");

        var currentUser = -1;

        // Find account
        for (var i = 0; i < accountNumbers.length; i++) {

            if (
                accountNumbers[i] === loginAcc &&
                pins[i] === loginPin
            ) {

                currentUser = i;

            }

        }

        if (currentUser === -1) {

            console.log("Invalid Account Number or PIN");

        }
        else {

            console.log("Welcome " + names[currentUser]);

        }
    }
}
