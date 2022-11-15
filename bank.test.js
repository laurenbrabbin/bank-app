const Bank = require("./bank")

describe('Bank', () => {
  it('returns a formatted bank statement with one transaction', () => {
    const transactionsDouble = { 
      orderedByDate: [
      { date: '14/01/2023', amount: 500, type: 'withdrawal' }
      ], 
      balance: 2500
    };

    const bank = new Bank(transactionsDouble);
    expect(bank.statement()).toBe('date || credit || debit || balance\n14/01/2023 || || 500.00 || 2500.00\n');
  });
  it('returns a formatted bank statement with more than one transaction', () => {
    const transactionsDouble = { 
      orderedByDate: [
      { date: '14/01/2023', amount: 500, type: 'withdrawal' },
      { date: '13/01/2023', amount: 2000, type: 'deposit' },
      { date: '10/01/2023', amount: 1000, type: 'deposit' }
      ], 
      balance: 2500
    };

    const bank = new Bank(transactionsDouble);
    expect(bank.statement()).toBe('date || credit || debit || balance\n14/01/2023 || || 500.00 || 2500.00\n13/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00\n');
  });
  it('allows bank statement to be printed more than once', () => {
    const transactionsDouble = { 
      orderedByDate: [
      { date: '14/01/2023', amount: 500, type: 'withdrawal' }
      ], 
      balance: 2500
    };

    const bank = new Bank(transactionsDouble);
    bank.statement();
    expect(bank.statement()).toBe('date || credit || debit || balance\n14/01/2023 || || 500.00 || 2500.00\n');
  });
})