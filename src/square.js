var Shape = require("./shape");

function Square(sideLength, color) {
  Shape.call(this, 4, color);
  this.sideLength = sideLength;
}

Square.prototype = new Shape();

Square.prototype.area = function() {
  return this.sideLength * this.sideLength;
};

Square.prototype.perimeter = function() {
  return this.sideLength * 4;
};

Square.prototype.string = function() {
  return this.toString();
};

Square.prototype.drawThis = function() {
  return this.draw();
};

module.exports = Square;
