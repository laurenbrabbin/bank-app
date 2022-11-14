class TransactionChecker {
  constructor(transaction) {
    this.date = transaction.date;
    this.amount = transaction.amount; // should it be byDate()
    this.type = transaction.type
  }

  check () {
    if (this.empty() === true || this.isNumerical() === false){
      return 'invalid' 
    } else {
      return 'valid'
    }
  }

  empty () {
    if (this.date == null || this.date == "" || this.amount == null || this.amount == "" || this.type == null || this.type == "") {
      return true
    } else {
      return false
    }
  }

  isNumerical () {
    if (this.amount === true || this.amount === false) {
      return false
    } else if (!isNaN(this.amount)) {
      return true
    } else {
      return false
    }
  }
}

module.exports = TransactionChecker