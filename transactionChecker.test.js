const TransactionChecker = require("./transactionChecker")

describe('Transaction', () => {
  it('returns valid if transaction is valid', () => {
    const transactionDouble = { date: '10/01/2023', amount: 1000, type: 'deposit'};
    const transactionChecker = new TransactionChecker(transactionDouble)
    expect(transactionChecker.check()).toEqual('valid');
  });
})