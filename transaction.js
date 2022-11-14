// The decimal points are missing on the end of the numbers and The tests only pass today, because the dates aren't mocked or passed in as arguments
class Transaction {
  constructor (amount, type) { 
    this.amount = amount.toFixed(2)
    this.type = type
    this.date = this.formatDate(new Date())
  }

  padTo2Digits = (num) => {
    return num.toString().padStart(2, '0');
  }
  
  formatDate = (date) => {
    return [
      this.padTo2Digits(date.getDate()),
      this.padTo2Digits(date.getMonth()),
      date.getFullYear(),
    ].join('/');
  }
}

module.exports = Transaction

const transaction = new Transaction(1000)
console.log(transaction.amount)