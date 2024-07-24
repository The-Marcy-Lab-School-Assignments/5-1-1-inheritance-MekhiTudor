class Quadrilateral {
  constructor(side1, side2, side3, side4) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.side4 = side4;
  }
  getPerimeter() {
    return this.side1 + this.side2 + this.side3 + this.side4;
  }
}

class Rectangle extends Quadrilateral {
  constructor(long, short) {
    super(long, short, long, short);
  }
  getArea() {
    return this.side1 * this.side2;
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
    this.length = length;
  }

  getDiagonal() {
    return Math.sqrt(2 * this.getArea());
  }
}
const square = new Square(10);
square.getDiagonal();
/* Be creative with this one! */
class Person {}

module.exports = {
  Quadrilateral,
  Rectangle,
  Square,
  Person,
};
