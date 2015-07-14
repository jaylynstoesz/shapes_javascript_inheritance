var Rectangle = require("../src/rectangle");

var rectangle;

describe("Rectangle", function() {
  beforeEach(function() {
    rectangle = new Rectangle(4,6, "blue");
  });

  describe("Area", function() {
    it("should be 24 for a rectangle with sides of 4 and 6", function() {
      expect(rectangle.area()).toEqual(24);
    });
  });

  describe("Perimeter", function() {
    it("should be 20 for a square with side lengths 4,6", function() {
      expect(rectangle.perimeter()).toEqual(20);
    });
  });

  describe("To String", function() {
    it("should list shape sides and color", function() {
      expect(rectangle.string()).toEqual( "[Shape sides:4, color:blue ]");
    });
  });

  describe("Draw", function() {
    it("should tell you to draw a shape with n sides", function() {
      expect(rectangle.drawThis()).toEqual("A shape with 4 sides");
    });
  });
});
