import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  displayFullPrice() {
    return (`${this._amount} ${this._currency._name} (${this._currency._code}`));
  }

  convertPrice(amount, conversionRate) {
    return (this._amount * conversionRate);
  }
}