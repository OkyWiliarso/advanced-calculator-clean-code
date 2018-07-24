class Calculator {
  constructor(value = 1) {
    this.value = value;
  }

  add(input) {
    this.value += input;
    return this;
  }

  substract(input) {
    this.value -= input;
    return this;
  }

  multiply(input) {
    this.value *= input;
    return this;
  }

  divide(input) {
    this.value /= input;
    return this;
  }

  square() {
    this.value **= 2;
    return this;
  }

  squareRoot() {
    this.value = Math.sqrt(this.value);
    return this;
  }
}

/** note : you can use several features from ecmascript, such as:
 * - Classes
 * - Default Parameters
 * - Destructured Assignment
 * - Template Literals
 * - Method Chaining
 */

module.exports = { Calculator };
