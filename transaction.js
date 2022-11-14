class Transaction {
  constructor (amount, date, type) { 
    this.amount = amount
    this.date = date
    this.type = type
  }

  amount () {
    return this.amount
  }

  date () {
    return new Date(this.date)
  }

  type () {
    return this.type
  }
}

module.exports = Transaction