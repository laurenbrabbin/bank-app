const TransactionChecker = require("./transactionChecker")

class Transactions {
  constructor() {
    this.all = [];
    this.balance = 0;
  }

  add(transaction){
    const transactionChecker = new TransactionChecker(transaction);
    if (transactionChecker.check() === 'valid') {
      this.all.push(transaction);
      this.updateBalance(transaction);
    } else {
      console.log('That transaction is invalid and has not been submitted')
    }
  }

  byDate () { 
    return [].concat(this.all).sort(function(a, b){
      a = a.date.split('/').reverse().join('');
      b = b.date.split('/').reverse().join('');
      return a < b ? 1 : a > b ? -1 : 0;
    });
  }

  updateBalance(transaction) {
    if (transaction.type === 'deposit') {
      this.balance += transaction.amount;
    } else if (transaction.type === 'withdrawal') {
      this.balance -= transaction.amount;
    } ;
  }
}

module.exports = Transactions;