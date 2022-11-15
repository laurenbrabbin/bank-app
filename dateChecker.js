class DateChecker {
  constructor(date) {
    this.date = date;
  }

  dateBrokenDown () {
    const date = {}
    const parts = this.date.split("/");
    date.day = parseInt(parts[0], 10);
    date.month = parseInt(parts[1], 10);
    date.year = parseInt(parts[2], 10);
    return date
  }

  invalidDateFormat() {
    if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(this.date)) {
      return true; }
  }

  monthAndYearChecker = (month, year) => {
    if(year < 1000 || year > 3000 || month == 0 || month > 12) {
      return true; }
  }

  leapYearChecker = (day, month, year) => {
    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;
    return day > 0 && day <= monthLength[month - 1];
   }

   isValidDate () {
    const date = this.dateBrokenDown()
    if (this.invalidDateFormat()) {
      return false;
    } else if (this.monthAndYearChecker(date.month, date.year)) {
      return false;
    } else if (!this.leapYearChecker(date.day, date.month, date.year)) {
      return false; 
    } 
  };
}

module.exports = DateChecker;