// The decimal points are missing on the end of the numbers and The tests only pass today, because the dates aren't mocked or passed in as arguments
class Transaction {
  constructor (amount, date, type) { 
    this.amount = amount
    this.date = date
    this.type = type
  }
}

module.exports = Transaction