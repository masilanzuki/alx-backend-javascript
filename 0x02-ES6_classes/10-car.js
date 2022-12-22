export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    return this.brand;
  }

  set brand(brand) {
    this.brand = brand;
  }

  get motor() {
    return this.motor;
  }

  set motor(motor) {
    this.motor = motor;
  }

  get color() {
    return this.color;
  }

  set color(color) {
    this.color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    return new this.constructor[Symbol.species]();
  }
}
