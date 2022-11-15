const DateChecker = require("./dateChecker")

class TransactionChecker {
  constructor(transaction) {
    this.date = transaction.date;
    this.amount = transaction.amount;
    this.type = transaction.type;
  }

  check () {
    if (this.isEmpty() === true || (this.isNumerical() !== true)) {
      return 'invalid'; 
    } else if (this.isValidType() === false || this.isValidDate() === false) {
      return 'invalid'
    } else { return 'valid' };
  }

  isEmpty () {
    if (this.date === null || this.amount === null || this.type === null) {
      return true;
    } else if (this.date === "" || this.amount === "" || this.type === "null") {
      return true;
    } else { return false };
  }

  isValidType () {
    if (this.type == 'deposit' || this.type == 'withdrawal') {
      return true;
    } else {
      return false;
    }
  }

  isNumerical () {
    if (typeof this.amount == "boolean" || typeof this.amount == 'string') {
      return false;
    } else if (!isNaN(this.amount)) {
      return true;
    } 
  }

   isValidDate () {
    const dateChecker = new DateChecker(this.date);
    return dateChecker.isValidDate()
  };
}

module.exports = TransactionChecker;