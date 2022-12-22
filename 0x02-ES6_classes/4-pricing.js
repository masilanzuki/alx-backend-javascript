export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this.amount;
  }

  set amount(amount) {
    this.amount = amount;
  }

  get currency() {
    return this.currency;
  }

  set currency(currency) {
    this.currency = currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
