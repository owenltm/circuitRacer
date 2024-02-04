class Vehicle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.maxSpeed = 5;
    this.maxForce = 0.5;

    this.limitTurningAngle = 45;
    this.turningAngle = 0;
    this.targetAngle = 0;
  }

  seek(target) {
    //calculate heading
    let force = p5.Vector.sub(target, this.pos);
    
    this.targetAngle = this.vel.angleBetween(force)
    this.turningAngle = this.vel.angleBetween(force);

    force.sub(this.vel);
    force.limit(this.maxForce);
    
    this.vel.add(force);
  }

  follow(path) {
    
  }

  update() {
    //update movement sets

    //limit the distance of movement over 1 loop, there for limiting speed
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
  
    
    //show heading angle
    fill("#F00");
    rotate(this.targetAngle);
    noStroke();
    rect(0, 0, 40, 2);
    rotate(-this.targetAngle);

    //show heading angle
    fill("#0F0");
    rotate(this.turningAngle);
    noStroke();
    rect(0, 0, 40, 2);
    pop();
  }

  edges() {
    if (this.pos.x > width) {
      this.pos.x = 0;
    } else if (this.pos.x < 0) {
      this.pos.x = width;
    }
    if (this.pos.y > height + 0) {
      this.pos.y = 0;
    } else if (this.pos.y < 0) {
      this.pos.y = height;
    }
  }
}