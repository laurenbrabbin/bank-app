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
})