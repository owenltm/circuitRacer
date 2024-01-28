class Vehicle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.maxSpeed = 5;
    this.maxForce = 0.5;
    this.r = 16;
  }

  seek(target) {
    //calculate heading
    let force = p5.Vector.sub(target, this.pos);
    force.sub(this.vel);
    this.vel.add(force);
  }

  follow(path) {
    
  }

  update() {
    //update movement sets
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
  }

  show() {
    //show current heading
    fill(255);
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    rect(-20, -10, 40, 20);
    pop();
  }

  edges() {
    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
    } else if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }
    if (this.pos.y > height + this.r) {
      this.pos.y = -this.r;
    } else if (this.pos.y < -this.r) {
      this.pos.y = height + this.r;
    }
  }
}