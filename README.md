# Bank Application
This application mimics the functionality of a basic bank account:
- You can make deposits and withdrawals. 
- You can view an account statement which includes transaction date, transaction amount and balance.

## Technologies:
1. The application is written in Javascript
2. The application is tested using Jest

## Example how the app works

- A client makes a deposit of 1000 on 10-01-2023
- followed by a deposit of 2000 on 13-01-2023
- then by a withdrawal of 500 on 14-01-2023

When she prints her bank statement she would see:

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## Code structure

The app is broken down into 5 classes:

1. Transaction (transaction.js) - This class is responsible for creating a new transaction. It takes the transaction amount and type as parameters and sets the transaction date to the current date on your local device when the transaction object is created.
2. Transactions (transactions.js) - This class stores all valid transactions. A transaction is added into the transactions class object by calling the .add() method - passing an instance of the Transaction class as the parameter. This class is also responsible for ordering the transactions in decsending order by date.
3. TransactionsChecker (transactionsChecker.js) - This class is responsible for checking whether a transaction is valid or not. It is called within the Transactions class within the .add() method. It prevents any invalid transactions being added.
4. DateChecker (dateChecker.js) - This class is responsible for checking the transaction date specifically. It is called within the TransactionsChecker class.
5. Bank (bank.js) - This class takes the transactions as a parameter and prints the bank statement when calling the .statement() method.


## How to run the project
1. Clone this repository to your local machine
2. Install Node.js dependencies 
   ```
   ; npm install
   ```
3. Run the application using Node
- Create individual transactions by requiring the transaction.js file and a create a new object using the Transaction class for each individual transaction - passing the transaction amount and transaction type (deposit or withdrawal) as the class parameters.
- For a transaction to be valid the transaction amount must be an integer (string formatt will be rejected i.e '500') and the transaction type must be either 'deposit' or 'withdrawal'.
- Pass these transaction objects into the Transactions class by requiring the transactions.js file and calling the method .add() to add each invividual transaction.
- Any invalid transactions will be discarded and you will see the message 'That transaction is invalid and has not been submitted' printed to your console.
- Require the bank.js file, create a new object using the Bank class - passing the transactions as a parameter.
- To view the bank statement call .statement() on the bank object.

### Example
```javascript
const Transaction = require('./transaction')
const transaction = new Transaction(1000, 'deposit')
const transaction2 = new Transaction(3000, 'deposit')
const transaction3 = new Transaction(500, 'withdrawal')

const Transactions = require('./transactions')
const transactions = new Transactions
transactions.add(transaction)
transactions.add(transaction2)
transactions.add(transaction3)

const Bank = require('./bank')
const bank = new Bank(transactions)
console.log(bank.statement())
```

### Output
```
date || credit || debit || balance
16/10/2022 || || 500.00 || 3500.00
15/10/2022 || 3000.00 || || 4000.00
14/10/2022 || 1000.00 || || 1000.00
```
* Output will vary depending on the date the transaction was created. The Transaction class program will automatically set the date as the current date on your local device the day the transaction was created.

## How to run the tests
1. Clone your this repository to your local machine
2. Install Node.js dependencies 
   ```
   ; npm install
   ```
3. Run jest:
   ```
   ; jest transaction.test.js
   ; jest transactions.test.js
   ; jest transactionsChecker.test.js
   ; jest dateChecker.test.js
   ; jest bank.test.js
   ```
