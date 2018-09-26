var particles = [];

function setup() {
  createCanvas(500, 500);
  noStroke();

  new Particle(250, 350);
  new Particle(150, 200);

  let gravityNode = new Particle(250,250);
  gravityNode.q = 10;
  gravityNode.canMove = false;
}

function draw() {
  background(0);

  for(let p of particles) {
    p.update();
  }
}
