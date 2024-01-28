let path;
let vehicle;
let target;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  vehicle = new Vehicle(random(window.innerWidth), random(window.innerHeight));
  vehicle.vel = createVector(4, 0);


  target = new Target(random(window.innerWidth), random(window.innerHeight));
}


function draw() {
  background("#212121");

  vehicle.seek(target.pos);
  vehicle.update();
  vehicle.edges();
  vehicle.show();
  
  target.show();  

  if((vehicle.pos.x == target.pos.x) && (vehicle.pos.y == target.pos.y)){
    target.pos = createVector(random(window.innerWidth), random(window.innerHeight));
  }
}

class Target{
  constructor(x, y) {
    this.pos = createVector(x, y);
  }

  show() {
    fill("#FFF");
    push();
    circle(this.pos.x, this.pos.y, 32);
    pop();
  }
}