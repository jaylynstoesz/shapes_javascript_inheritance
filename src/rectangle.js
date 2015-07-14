var Shape = require("./shape");

// Add the constructor for rectangle and the methods that
// need to be overwritten.  Keep in mind that a rectangle

function Rectangle(side1, side2, color) {
  Shape.call(this, 4, color, 6);
  this.side1 = side1;
  this.side2 = side2;
}
// has more than just 1 side length.
Rectangle.prototype = new Shape();

Rectangle.prototype.area = function() {
  return this.side1 * this.side2;
};

Rectangle.prototype.perimeter = function() {
  return (this.side1 + this.side2) * 2;
};

Rectangle.prototype.string = function() {
  return this.toString();
};

Rectangle.prototype.drawThis = function() {
  return this.draw();
};

module.exports = Rectangle;
