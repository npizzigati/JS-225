// Project: Banking with Objects and Closures
// In this assignment, we'll build a small banking application
// and look at how we can use closures to control access to the
// application's data. We'll proceed through this assignment
// using some example code and then you will write code that
// satisfies it.

function makeBank() {
  const accounts = [];
  let accountIDCounter = 0;
  return {
    openAccount() {
      accountIDCounter += 1;
      const account = makeAccount(accountIDCounter);
      accounts.push(account);
      return account;
    },
    transfer(source, destination, amount) {
      source.withdraw(amount);
      destination.deposit(amount);
    }
  };
}

function makeAccount(number) {
  let balance = 0;
  const transactions = [];
  return account = {
    deposit(amount) {
      balance += amount;
      const transaction = { type: 'deposit', amount };
      transactions.push(transaction);
      return balance;
    },
    withdraw(amount) {
      if (balance < amount) {
        amount = balance;
      }
      balance -= amount;
      const transaction = { type: 'withdrawal', amount };
      transactions.push(transaction);
      return balance;
    },
    balance() {
      return balance;
    },
    number() {
      return number;
    },
    transactions() {
      return transactions;
    },
  };
}
