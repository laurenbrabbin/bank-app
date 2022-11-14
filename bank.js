class Bank {
  constructor() {
    this.balance = 0
    this.transactions = [];
  }

  add(transaction){
    this.transactions.push(transaction);
    if (transaction.type === 'deposit') {
      this.balance += transaction.amount
    } else {
      this.balance -= transaction.amount
    }
  }

  formatTransactions = (transaction) => {
    if (transaction.type === 'deposit') {
      this.sum -= transaction.amount
      return `${transaction.date} || ${transaction.amount} || || ${this.sum + transaction.amount}\n`
    } else {
      this.sum += transaction.amount
      return `${transaction.date} || || ${transaction.amount} || ${this.sum - transaction.amount}\n`
    }
  }

  byDate () { 
    return [].concat(this.transactions).sort((a, b) => b.date - a.date).reverse();
  }

  statement () {
    this.sum = this.balance
    return 'date || credit || debit || balance\n' + this.byDate().map(this.formatTransactions).join('')
  }
}

module.exports = Bank