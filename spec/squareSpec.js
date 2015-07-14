var Square = require("../src/square");

var square;

describe("Square", function() {
  beforeEach(function() {
    square = new Square(2, "red");
  });

  describe("Area", function() {
    it("should be 4 for a square", function() {
      expect(square.area()).toEqual(4);
    });
  });

  describe("Perimeter", function() {
    it("should be 8 for a square with side length 2", function() {
      expect(square.perimeter()).toEqual(8);
    });
  });

  describe("To String", function() {
    it("should list shape sides and color", function() {
      expect(square.string()).toEqual( "[Shape sides:4, color:red ]");
    });
  });

  describe("Draw", function() {
    it("should tell you to draw a shape with n sides", function() {
      expect(square.drawThis()).toEqual("A shape with 4 sides");
    });
  });

});
