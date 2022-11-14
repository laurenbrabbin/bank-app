class Transactions {
  constructor() {
    this.all = []
    this.balance = 0
  }

  add(transaction){
    this.all.push(transaction);
    if (transaction.type === 'deposit') {
      this.balance += transaction.amount
    } else if (transaction.type === 'withdrawal') {
      this.balance -= transaction.amount
    } else (
      console.log('please ensure transaction type is either withdrawal or deposit')
    )
  }

  byDate () { 
    return [].concat(this.all).sort(function(a, b){
      a = a.date.split('/').reverse().join('');
      b = b.date.split('/').reverse().join('');
      return a < b ? 1 : a > b ? -1 : 0;
    });
  }
}

module.exports = Transactions
