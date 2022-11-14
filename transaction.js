class Transaction {
  constructor (amount, date) { 
    this.amount = amount
    this.date = date
  }

  amount () {
    return this.amount
  }

  date () {
    return new Date(this.date)
  }
}

module.exports = Transaction