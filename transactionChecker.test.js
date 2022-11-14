const TransactionChecker = require("./transactionChecker")

describe('Transaction', () => {
  it('returns valid if transaction is valid', () => {
    const transactionDouble = { date: '10/01/2023', amount: 1000, type: 'deposit'};
    const transactionChecker = new TransactionChecker(transactionDouble)
    expect(transactionChecker.check()).toEqual('valid');
  });
  it('returns invalid if date is empty', () => {
    const transactionDouble = { date: null, amount: 1000, type: 'deposit'};
    const transactionChecker = new TransactionChecker(transactionDouble)
    expect(transactionChecker.check()).toEqual('invalid');
  });
  it('returns invalid if amount is empty', () => {
    const transactionDouble = { date: null, amount: null, type: 'deposit'};
    const transactionChecker = new TransactionChecker(transactionDouble)
    expect(transactionChecker.check()).toEqual('invalid');
  });
  it('returns invalid if type is empty', () => {
    const transactionDouble = { date: null, amount: null, type: null };
    const transactionChecker = new TransactionChecker(transactionDouble)
    expect(transactionChecker.check()).toEqual('invalid');
  });
})