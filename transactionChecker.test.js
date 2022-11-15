const TransactionChecker = require("./transactionChecker")

describe('Transaction', () => {
  it('checker returns valid if transaction is valid', () => {
    const transactionDouble = { date: '10/01/2023', amount: 1000, type: 'deposit'};
    const transactionChecker = new TransactionChecker(transactionDouble);
    expect(transactionChecker.check()).toEqual('valid');
  });
  it('checker returns invalid if date is empty', () => {
    const transactionDouble = { date: null, amount: 1000, type: 'deposit'};
    const transactionChecker = new TransactionChecker(transactionDouble);
    expect(transactionChecker.check()).toEqual('invalid');
  });
  it('checker returns invalid if amount is empty', () => {
    const transactionDouble = { date: '10/01/2023', amount: null, type: 'deposit'};
    const transactionChecker = new TransactionChecker(transactionDouble);
    expect(transactionChecker.check()).toEqual('invalid');
  });
  it('checker returns invalid if type is empty', () => {
    const transactionDouble = { date: '10/01/2023', amount: null, type: null };
    const transactionChecker = new TransactionChecker(transactionDouble);
    expect(transactionChecker.check()).toEqual('invalid');
  });
  it('isNumerical returns true if amount is a number', () => {
    const transactionDouble = { date: '10/01/2023', amount: 500, type: 'deposit' };
    const transactionChecker = new TransactionChecker(transactionDouble);
    expect(transactionChecker.isNumerical()).toEqual(true);
  });
  it('isNumerical returns false if amount is not a number', () => {
    const transactionDouble = { date: '10/01/2023', amount: "string", type: 'deposit' };
    const transactionChecker = new TransactionChecker(transactionDouble);
    expect(transactionChecker.isNumerical()).toEqual(false);
  });
  it('isNumerical returns false if amount is a boolean', () => {
    const transactionDouble = { date: '10/01/2023', amount: "string", type: 'deposit' };
    const transactionChecker = new TransactionChecker(transactionDouble);
    expect(transactionChecker.isNumerical()).toEqual(false);
  });
  it('isNumerical returns false if amount is in string formatt', () => {
    const transactionDouble = { date: '10/01/2023', amount: "1000", type: 'deposit' };
    const transactionChecker = new TransactionChecker(transactionDouble);
    expect(transactionChecker.isNumerical()).toEqual(false);
  });
  it('isNumerical returns false if amount is anything but an integer number', () => {
    const transactionDouble = { date: '10/01/2023', amount: {amount: 'ivalid'}, type: 'deposit' };
    const transactionChecker = new TransactionChecker(transactionDouble);
    expect(transactionChecker.isNumerical()).toEqual(false);
  });
  it('checker returns invalid if amount is not a number', () => {
    const transactionDouble = { date: '10/01/2023', amount: "string", type: 'deposit' };
    const transactionChecker = new TransactionChecker(transactionDouble);
    expect(transactionChecker.check()).toEqual('invalid');
  });
  it('checker returns invalid if amount is a boolean', () => {
    const transactionDouble = { date: '10/01/2023', amount: true, type: 'deposit' };
    const transactionChecker = new TransactionChecker(transactionDouble);
    expect(transactionChecker.check()).toEqual('invalid');
  });
  it('checker returns valid if amount is number in string format', () => {
    const transactionDouble = { date: '10/01/2023', amount: '1000', type: 'deposit' };
    const transactionChecker = new TransactionChecker(transactionDouble);
    expect(transactionChecker.check()).toEqual('invalid');
  });
  it('checker returns invalid if type is neither deposit or withdrawal', () => {
    const transactionDouble = { date: '10/01/2023', amount: 1000, type: 'unrecognised' };
    const transactionChecker = new TransactionChecker(transactionDouble);
    expect(transactionChecker.check()).toEqual('invalid');
  });
  it('checker returns invalid if date formatt is incorrect', () => {
    const transactionDouble = { date: '10th March 2022', amount: 1000, type: 'deposit' };
    const transactionChecker = new TransactionChecker(transactionDouble);
    expect(transactionChecker.check()).toEqual('invalid');
  });
  it('checker returns invalid if date formatt is incorrect', () => {
    const transactionDouble = { date: '10-01-2023', amount: 1000, type: 'deposit' };
    const transactionChecker = new TransactionChecker(transactionDouble);
    expect(transactionChecker.check()).toEqual('invalid');
  });
  it('isValidType returns true if type is deposit', () => {
    const transactionDouble = { date: '10/01/2023', amount: 1000, type: 'deposit' };
    const transactionChecker = new TransactionChecker(transactionDouble);
    expect(transactionChecker.isValidType()).toEqual(true);
  });
  it('isValidType returns true if type is withdrawal', () => {
    const transactionDouble = { date: '10/01/2023', amount: 1000, type: 'withdrawal' };
    const transactionChecker = new TransactionChecker(transactionDouble);
    expect(transactionChecker.isValidType()).toEqual(true);
  });
  it('isValidType returns false if type is neither deposit or withdrawal', () => {
    const transactionDouble = { date: '10/01/2023', amount: 1000, type: 'invalid' };
    const transactionChecker = new TransactionChecker(transactionDouble);
    expect(transactionChecker.isValidType()).toEqual(false);
  });
  it('isValidDate returns false if date is not in DD/MM/YYYY formatt', () => {
    const transactionDouble = { date: '10-01-2023', amount: 1000, type: 'invalid' };
    const transactionChecker = new TransactionChecker(transactionDouble);
    expect(transactionChecker.isValidDate()).toEqual(false);
  });
  it('isValidDate returns false if month is not in 1-12 range', () => {
    const transactionDouble = { date: '10/13/2023', amount: 1000, type: 'invalid' };
    const transactionChecker = new TransactionChecker(transactionDouble);
    expect(transactionChecker.isValidDate()).toEqual(false);
  });
  it('isValidDate returns false if year is insuitable', () => {
    const transactionDouble = { date: '10/11/5055', amount: 1000, type: 'invalid' };
    const transactionChecker = new TransactionChecker(transactionDouble);
    expect(transactionChecker.isValidDate()).toEqual(false);
  });
  it('isValidDate returns true for a leap year', () => {
    const transactionDouble = { date: '29/02/2020', amount: 1000, type: 'invalid' };
    const transactionChecker = new TransactionChecker(transactionDouble);
    expect(transactionChecker.isValidDate()).toEqual(true);
  });
})