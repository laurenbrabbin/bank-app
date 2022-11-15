class Bank {
  constructor(transactions) {
    this.balance = transactions.balance;
    this.transactions = transactions.byDate(); 
    this.sum = 0;
  }

  formatTransactions = (transaction) => {
    if (transaction.type === 'deposit') {
      this.sum -= transaction.amount;
      return `${transaction.date} || ${transaction.amount.toFixed(2)} || || ${(this.sum + transaction.amount).toFixed(2)}\n`;
    } else {
      this.sum += transaction.amount;
      return `${transaction.date} || || ${transaction.amount.toFixed(2)} || ${(this.sum - transaction.amount).toFixed(2)}\n`;
    };
  }

  statement () {
    this.sum = this.balance;
    return 'date || credit || debit || balance\n' + this.transactions.map(this.formatTransactions).join('');
  };
}

module.exports = Bank;


