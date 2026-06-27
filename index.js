
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

            var loggedIn = true;

            while (loggedIn) {

                var userChoice = prompt(
                    "===== USER MENU =====\n" +
                    "1. Deposit\n" +
                    "2. Withdraw\n" +
                    "3. Transfer\n" +
                    "4. Check Balance\n" +
                    "5. Logout"
                );

                // DEPOSIT
                if (userChoice === "1") {

                    var depositAmount = Number(
                        prompt("Enter Deposit Amount")
                    );

                    if (depositAmount > 0) {

                        balances[currentUser] =
                            balances[currentUser] +
                            depositAmount;

                        console.log("Deposit Successful");
                        console.log(
                            "Current Balance: " +
                            balances[currentUser]
                        );

                    }
                    else {

                        console.log("Invalid Amount");

                    }

                }

                // WITHDRAW
                else if (userChoice === "2") {

                    var withdrawAmount = Number(
                        prompt("Enter Withdraw Amount")
                    );

                    if (withdrawAmount <= 0) {

                        console.log("Invalid Amount");

                    }
                    else if (
                        withdrawAmount >
                        balances[currentUser]
                    ) {

                        console.log("Insufficient Balance");

                    }
                    else {

                        balances[currentUser] =
                            balances[currentUser] -
                            withdrawAmount;

                        console.log("Withdrawal Successful");
                        console.log(
                            "Current Balance: " +
                            balances[currentUser]
                        );

                    }

                }

                // TRANSFER
                else if (userChoice === "3") {

                    var receiverAcc =
                        prompt("Enter Receiver Account Number");

                    var transferAmount = Number(
                        prompt("Enter Transfer Amount")
                    );

                    var receiverIndex = -1;

                    // Find receiver
                    for (
                        var i = 0;
                        i < accountNumbers.length;
                        i++
                    ) {

                        if (
                            accountNumbers[i] === receiverAcc
                        ) {

                            receiverIndex = i;

                        }

                    }

                    if (receiverIndex === -1) {

                        console.log(
                            "Receiver Account Not Found"
                        );

                    }
                    else if (
                        receiverIndex === currentUser
                    ) {

                        console.log(
                            "Cannot Transfer To Your Own Account"
                        );

                    }
                    else if (
                        transferAmount <= 0
                    ) {

                        console.log("Invalid Amount");

                    }
                    else if (
                        transferAmount >
                        balances[currentUser]
                    ) {

                        console.log(
                            "Insufficient Balance"
                        );

                    }
                    else {

                        balances[currentUser] =
                            balances[currentUser] -
                            transferAmount;

                        balances[receiverIndex] =
                            balances[receiverIndex] +
                            transferAmount;

                        console.log(
                            "Transfer Successful"
                        );

                        console.log(
                            "Transferred To: " +
                            names[receiverIndex]
                        );

                        console.log(
                            "Current Balance: " +
                            balances[currentUser]
                        );

                    }

                }

                // CHECK BALANCE
                else if (userChoice === "4") {

                    console.log(
                        "Account Holder: " +
                        names[currentUser]
                    );

                    console.log(
                        "Account Number: " +
                        accountNumbers[currentUser]
                    );

                    console.log(
                        "Current Balance: " +
                        balances[currentUser]
                    );

                }

                // LOGOUT
                else if (userChoice === "5") {

                    loggedIn = false;

                    console.log("Logged Out");

                }

                else {

                    console.log("Invalid Option");

                }

            }

        }

    }

    // EXIT
    else if (choice === "3") {

        running = false;

        console.log(
            "Thank You For Using Our Banking System"
        );

    }

    else {

        console.log("Invalid Choice");

    }

}
