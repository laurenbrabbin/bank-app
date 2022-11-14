const Transaction = require("./transaction")

describe('Transaction', () => {
  it('returns transaction amount', () => {
    const transaction = new Transaction(1000)
    expect(transaction.amount).toEqual(1000);
  });
})