function Circle(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  };
  
  Circle.prototype.isOverlapped = function(obj) {
    var c1c2 = Math.sqrt(Math.pow((this.x - obj.x), 2) + Math.pow((this.y - obj.y), 2));
  
    if (c1c2 == (this.r + obj.r)) {
      return 0;
    }
    if (c1c2 > (this.r + obj.r)) {
      return 1;
    }
    if (c1c2 < (this.r + obj.r)) {
      return -1;
    }
  };
  
  module.exports = Circle;