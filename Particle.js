class Particle {
  constructor(x, y) {
    this.position = new Vector(x, y);
    this.velocity = new Vector(0, 0);
    this.acceleration = new Vector(0, 0);

    this.q = 0.01;
    this.canMove = true;

    particles.push(this);
  }

  HooksLaw() {
    let k = .008;

    for (let p of particles) {
      if (this === p) {continue;}

      let separationVec = p.position.minus(this.position);
      let direction = separationVec.normalized();

      let r = separationVec.magnitude();

      r = max(r, 20);
      let force = k * r;

      let forceVector = direction.times(force);
      this.acceleration.add(forceVector);
    }
  }

  ColoumbsLaw() {
    let k = -20;

    for (let p of particles) {
      if (this === p) {continue;}

      let separationVec = p.position.minus(this.position);
      let direction = separationVec.normalized();
      let r = separationVec.magnitude();

      r = max(r, 20);
      let force = k * this.q * this.q / (r * r);

      let forceVector = direction.times(force);
      this.acceleration.add(forceVector);
    }
  }

  move() {
    if (!this.canMove) {return;}

    this.HooksLaw();
    this.ColoumbsLaw();

    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);

    this.velocity.mult(0.9);
  }

  draw() {
    fill(255, 255, 255);
    ellipse(this.position.x, this.position.y, 10, 10);
  }

  update() {
    this.move();
    this.draw();
  }
}
