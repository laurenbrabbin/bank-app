class Bank {
  constructor(transactions) {
    this.balance = transactions.balance;
    this.transactions = transactions.byDate(); 
    this.sum = 0;
  }

  formatTransactions = (transaction) => {
    const amount = transaction.amount
    const date = transaction.date
    if (transaction.type === 'deposit') {
      return this.depositFormat(date, amount)
    } else { return this.withdrawalFormat(date, amount)};
  }

  depositFormat = (date, amount) => {
    this.sum -= amount;
    const balance = this.sum + amount;
    return `${date} || ${amount.toFixed(2)} || || ${(balance).toFixed(2)}\n`;
  }

  withdrawalFormat = (date, amount) => {
    this.sum += amount;
    const balance = this.sum - amount;
    return `${date} || || ${amount.toFixed(2)} || ${(balance).toFixed(2)}\n`;
  }

  statement () {
    this.sum = this.balance;
    const header = 'date || credit || debit || balance\n'
    return header + this.transactions.map(this.formatTransactions).join('');
  };
}

module.exports = Bank;


