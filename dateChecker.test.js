const DateChecker = require("./dateChecker")

describe('Transaction', () => {
  it('invalidDateFormat returns true if date is not in DD/MM/YYYY formatt', () => {
    const dateChecker = new DateChecker('15-01-2022');
    expect(dateChecker.invalidDateFormat()).toEqual(true);
    expect(dateChecker.isValidDate()).toEqual(false);
  });
  it('isValidDate returns false if year is unsuitable', () => {
    const dateChecker = new DateChecker('15/01/5000');
    expect(dateChecker.isValidDate()).toEqual(false);
  });
  it('isValidDate returns false if month is unsuitable', () => {
    const dateChecker = new DateChecker('15/13/2022');
    expect(dateChecker.isValidDate()).toEqual(false);
  });
  it('isValidDate returns false if leap year does not exist', () => {
    const dateChecker = new DateChecker('29/02/2022');
    expect(dateChecker.isValidDate()).toEqual(false);
  });
  it('isValidDate does not returns false if leap year exists', () => {
    const dateChecker = new DateChecker('29/02/2020');
    expect(dateChecker.isValidDate()).not.toEqual(false);
  });
})