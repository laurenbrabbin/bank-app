const Transaction = require("./transaction")

describe('Transaction', () => {
  it('returns transaction amount', () => {
    const transaction = new Transaction(500.00)
    expect(transaction.amount).toEqual(500.00);
  });
  it('returns the date in DD/MM/YYYY formatt', () => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date(2023, 1, 10))
    const transaction = new Transaction(1000)
    expect(transaction.date).toEqual('10/01/2023');
  });
  it('returns transaction type', () => {
    jest.setSystemTime(new Date(2023, 1, 10))
    const transaction = new Transaction(1000, 'deposit')
    expect(transaction.type).toEqual('deposit');
  });
})