## Bank Application

## Features:
- You can interact with this code via a REPL or Node. 
- You can make deposits and withdrawals.
- You can view an account statement which includes transaction date, transaction amount and balance).

## Example

# Customer activity:
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

## Technologies:
1. The application is written in Javascript
2. The application is tested using Jest