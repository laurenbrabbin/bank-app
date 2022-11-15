class Transaction {
  constructor (amount, type) { 
    this.amount = amount; 
    this.type = type;
    this.date = this.formatDate(new Date());
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

module.exports = Transaction;
