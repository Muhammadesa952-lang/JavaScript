// 04 - Classes, inheritance, getters, private fields
class Account {
  #balance = 0;

  constructor(owner, initial = 0) {
    this.owner = owner;
    this.#balance = initial;
  }

  deposit(amount) {
    if (amount <= 0) throw new Error("Amount must be positive");
    this.#balance += amount;
    return this;
  }

  withdraw(amount) {
    if (amount > this.#balance) throw new Error("Insufficient funds");
    this.#balance -= amount;
    return this;
  }

  get balance() {
    return this.#balance;
  }
}

class SavingsAccount extends Account {
  constructor(owner, initial, rate) {
    super(owner, initial);
    this.rate = rate;
  }
  addInterest() {
    return this.deposit(this.balance * this.rate);
  }
}

const acc = new SavingsAccount("Sam", 1000, 0.05);
acc.deposit(500).withdraw(200).addInterest();
console.log(`${acc.owner}: ${acc.balance.toFixed(2)}`);
