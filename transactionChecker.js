class TransactionChecker {
  constructor(transaction) {
    this.date = transaction.date;
    this.amount = transaction.amount;
    this.type = transaction.type;
  }

  check () {
    if (this.isEmpty() === true || this.isNumerical() === false || this.isValidType() === false || this.isValidDate() === false){
      return 'invalid'; 
    } else {
      return 'valid';
    };
  }

  isEmpty () {
    if (this.date == null || this.date == "" || this.amount == null || this.amount == "" || this.type == null || this.type == "") {
      return true;
    } else {
      return false;
    };
  }

  isNumerical () {
    if (this.amount === true || this.amount === false || typeof this.amount === 'string') {
      return false;
    } else if (!isNaN(this.amount)) {
      return true;
    } else {
      return false;
    };
  }

  isValidType () {
    if (this.type == 'deposit' || this.type == 'withdrawal') {
      return true;
    } else {
      return false;
    }
  }

  isValidDate () {
    if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(this.date)) {
        return false; }

    var parts = this.date.split("/");
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[2], 10);

    if(year < 1000 || year > 3000 || month == 0 || month > 12) {
        return false;}

    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
        monthLength[1] = 29;
    return day > 0 && day <= monthLength[month - 1]; }
};
}

module.exports = TransactionChecker;