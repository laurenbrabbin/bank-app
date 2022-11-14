const Transaction = require("./transaction")

describe('Transaction', () => {
  it('returns transaction amount', () => {
    const transaction = new Transaction(1000)
    expect(transaction.amount).toEqual(1000);
  });
  it('returns the date', () => {
    const transaction = new Transaction(1000, '10/01/2023')
    expect(transaction.date).toEqual('10/01/2023');
  });
  it('returns transaction type', () => {
    const transaction = new Transaction(1000, '10/01/2023', 'deposit')
    expect(transaction.type).toEqual('deposit');
  });
})