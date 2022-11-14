const Transactions = require("./transactions")

describe('Transactions', () => {
  it('initially returns 0 transactions', () => {
    const transactions = new Transactions
    expect(transactions.all).toEqual([]);
  });
  it('adds 1 transaction and returns that one transaction', () => {
    const transactions = new Transactions
    const transactionDouble = { date: '10/01/2023', amount: 1000, type: 'deposit'};
    transactions.add(transactionDouble)
    expect(transactions.all.length).toEqual(1);
    expect(transactions.all[0].amount).toEqual(1000);
  });
  it('adds more than 1 transaction and returns all transactions', () => {
    const transactions = new Transactions
    const transactionDouble = { date: '10/01/2023', amount: 1000, type: 'deposit'};
    const transactionDouble2 = { date: '13/01/2023', amount: 2000, type: 'deposit'};
    const transactionDouble3 = { date: '14/01/2023', amount: 500, type: 'withdrawal'};
    transactions.add(transactionDouble)
    transactions.add(transactionDouble2)
    transactions.add(transactionDouble3)
    expect(transactions.all.length).toEqual(3);
  });
  it('it returns the transactions in desending order by date', () => {
    const transactions = new Transactions
    const transactionDouble = { date: '13/01/2023', amount: 2000, type: 'deposit'};
    const transactionDouble2 = { date: '10/01/2023', amount: 1000, type: 'deposit'};
    const transactionDouble3 = { date: '14/01/2023', amount: 500, type: 'withdrawal'};
    transactions.add(transactionDouble)
    transactions.add(transactionDouble2)
    transactions.add(transactionDouble3)
    expect(transactions.byDate()[0].date).toEqual('14/01/2023');
    expect(transactions.byDate()[1].date).toEqual('13/01/2023');
    expect(transactions.byDate()[2].date).toEqual('10/01/2023');
  });
  it('it returns the balance', () => {
    const transactions = new Transactions
    const transactionDouble = { date: '13/01/2023', amount: 2000, type: 'deposit'};
    const transactionDouble2 = { date: '10/01/2023', amount: 1000, type: 'deposit'};
    const transactionDouble3 = { date: '14/01/2023', amount: 500, type: 'withdrawal'};
    transactions.add(transactionDouble)
    transactions.add(transactionDouble2)
    transactions.add(transactionDouble3)
    expect(transactions.balance).toEqual(2500);
  });
  it('transaction will not be added if details are incorrect', () => {
    const transactions = new Transactions
    const transactionDouble = { date: 'invalid', amount: 'invalid', type: 'invalid'};
    transactions.add(transactionDouble)
    expect(transactions.all.length).toEqual(0);
  });
})