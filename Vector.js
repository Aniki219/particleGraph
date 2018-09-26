class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(other) {
    this.x += other.x;
    this.y += other.y;
  }

  mult(scalar) {
    this.x *= scalar;
    this.y *= scalar;
  }

  plus(other) {
    let newX = this.x + other.x;
    let newY = this.y + other.y;

    return new Vector(newX, newY);
  }

  minus(other) {
    let newX = this.x - other.x;
    let newY = this.y - other.y;

    return new Vector(newX, newY);
  }

  times(scalar) {
    let newX = this.x * scalar;
    let newY = this.y * scalar;

    return new Vector(newX, newY);
  }

  magnitude() {
    return sqrt(this.x * this.x + this.y * this.y);
  }

  normalize() {
    this.x /= this.magnitude();
    this.y /= this.magnitude();
  }

  normalized() {
    let newX = this.x / this.magnitude();
    let newY = this.y / this.magnitude();

    return new Vector(newX, newY);
  }
}
