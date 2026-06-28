// SIMPLE BANKING SYSTEM

// Arrays to store account information
var accountNumbers = [];
var pins = [];
var names = [];
var balances = [];

// Controls the program
var running = true;

while (running) {

    var choice = prompt(
        "===== BANKING SYSTEM =====\n" +
        "1. Create Account\n" +
        "2. Login\n" +
        "3. Exit"
    );

    // ==========================
    // CREATE ACCOUNT
    // ==========================
    if (choice === "1") {

        var accNo = prompt("Enter Account Number");
        var name = prompt("Enter Name");
        var pin = prompt("Enter PIN");
        var balance = Number(prompt("Enter Initial Balance"));

        if (accountNumbers.includes(accNo)) {

            alert("❌ Account Number Already Exists");

        }
        else if (balance < 0) {

            alert("❌ Balance Cannot Be Negative");

        }
        else {

            accountNumbers.push(accNo);
            names.push(name);
            pins.push(pin);
            balances.push(balance);

            alert(
                "✅ Account Created Successfully\n\n" +
                "Name : " + name +
                "\nAccount Number : " + accNo +
                "\nBalance : " + balance
            );
        }
    }

    // ==========================
    // LOGIN
    // ==========================
    else if (choice === "2") {

        var loggedInSuccessfully = false;

        while (!loggedInSuccessfully) {

            var loginAcc = prompt("Enter Account Number");
            var loginPin = prompt("Enter PIN");

            var currentUser = accountNumbers.indexOf(loginAcc);

            if (
                currentUser !== -1 &&
                pins[currentUser] === loginPin
            ) {

                loggedInSuccessfully = true;

                alert(
                    "✅ Login Successful\n\n" +
                    "Welcome " + names[currentUser]
                );

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

                    // ==========================
                    // DEPOSIT
                    // ==========================
                    if (userChoice === "1") {

                        var depositAmount =
                        Number(prompt("Enter Deposit Amount"));

                        if (isNaN(depositAmount)) {

                            alert("❌ Please Enter Numbers Only");

                        }
                        else if (depositAmount <= 0) {

                            alert("❌ Invalid Amount");

                        }
                        else {

                            balances[currentUser] =
                            balances[currentUser] + depositAmount;

                            alert(
                                "✅ Deposit Successful\n\n" +
                                "Deposited : " + depositAmount +
                                "\nCurrent Balance : " +
                                balances[currentUser]
                            );
                        }
                    }

                    // ==========================
                    // WITHDRAW
                    // ==========================
                    else if (userChoice === "2") {

                        var withdrawAmount =
                        Number(prompt("Enter Withdraw Amount"));

                        if (isNaN(withdrawAmount)) {

                            alert("❌ Please Enter Numbers Only");

                        }
                        else if (withdrawAmount <= 0) {

                            alert("❌ Invalid Amount");

                        }
                        else if (withdrawAmount > balances[currentUser]) {

                            alert("❌ Insufficient Balance");

                        }
                        else {

                            balances[currentUser] =
                            balances[currentUser] - withdrawAmount;

                            alert(
                                "✅ Withdrawal Successful\n\n" +
                                "Withdrawn : " + withdrawAmount +
                                "\nCurrent Balance : " +
                                balances[currentUser]
                            );
                        }
                    }
                                        // ==========================
                    // TRANSFER
                    // ==========================
                    else if (userChoice === "3") {

                        var receiverAcc =
                        prompt("Enter Receiver Account Number");

                        var receiverIndex =
                        accountNumbers.indexOf(receiverAcc);

                        if (receiverIndex === -1) {

                            alert("❌ Receiver Account Not Found");

                        }
                        else if (receiverIndex === currentUser) {

                            alert("❌ You Cannot Transfer To Your Own Account");

                        }
                        else {

                            var transferAmount =
                            Number(prompt("Enter Transfer Amount"));

                            if (isNaN(transferAmount)) {

                                alert("❌ Please Enter Numbers Only");

                            }
                            else if (transferAmount <= 0) {

                                alert("❌ Invalid Amount");

                            }
                            else if (transferAmount > balances[currentUser]) {

                                alert("❌ Insufficient Balance");

                            }
                            else {

                                balances[currentUser] =
                                balances[currentUser] - transferAmount;

                                balances[receiverIndex] =
                                balances[receiverIndex] + transferAmount;

                                alert(
                                    "✅ Transfer Successful\n\n" +
                                    "Transferred To : " +
                                    names[receiverIndex] +
                                    "\nAmount : " +
                                    transferAmount +
                                    "\nRemaining Balance : " +
                                    balances[currentUser]
                                );
                            }
                        }
                    }

                    // ==========================
                    // CHECK BALANCE
                    // ==========================
                    else if (userChoice === "4") {

                        alert(
                            "===== ACCOUNT DETAILS =====\n\n" +
                            "Account Holder : " +
                            names[currentUser] +
                            "\nAccount Number : " +
                            accountNumbers[currentUser] +
                            "\nCurrent Balance : " +
                            balances[currentUser]
                        );
                    }

                    // ==========================
                    // LOGOUT
                    // ==========================
                    else if (userChoice === "5") {

                        loggedIn = false;

                        alert("✅ Logged Out Successfully");
                    }

                    // ==========================
                    // INVALID USER OPTION
                    // ==========================
                    else {

                        alert("❌ Invalid Option");
                    }

                }
            }
            else {

                alert("❌ Invalid Account Number or PIN\nPlease Try Again.");

            }
        }
    }

    // ==========================
    // EXIT
    // ==========================
    else if (choice === "3") {

        running = false;

        alert("🙏 Thank You For Using Our Banking System!");
    }

    // ==========================
    // INVALID MAIN MENU OPTION
    // ==========================
    else {

        alert("❌ Invalid Choice");
    }
}