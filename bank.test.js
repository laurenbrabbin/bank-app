const Bank = require("./bank")

describe('Bank', () => {
  it('initially displays empty bank statement', () => {
    const bank = new Bank
    expect(bank.statement()).toEqual('date || credit || debit || balance\n');
  });
  it('returns a formatted bank statement with one transaction', () => {
    const bank = new Bank
    const transactionDouble = { date: '10/01/2023', amount: 1000, type: 'deposit'};
    bank.add(transactionDouble)
    expect(bank.statement()).toBe('date || credit || debit || balance\n10/01/2023 || 1000 || || 1000\n');
  });
  it('returns transactions in decending order', () => {
    const bank = new Bank
    const transactionDouble = { date: () => '10/01/2023'};
    const transactionDouble2 = { date: () => '13/01/2023'};
    const transactionDouble3 = { date: () => '14/01/2023'};
    bank.add(transactionDouble)
    bank.add(transactionDouble2)
    bank.add(transactionDouble3)
    expect(bank.byDate()[0].date()).toEqual('14/01/2023');
    expect(bank.byDate()[1].date()).toEqual('13/01/2023');
    expect(bank.byDate()[2].date()).toEqual('10/01/2023');
  });
})