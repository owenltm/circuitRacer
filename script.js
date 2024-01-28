let path;
let vehicle;
let target;
let targetReachedRadius = 30;
let pause = false;
let pauseFrameDelay = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  angleMode(DEGREES);

  vehicle = new Vehicle(random(window.innerWidth), random(window.innerHeight));
  vehicle.vel = createVector(4, 0);


  target = new Target(random(window.innerWidth), random(window.innerHeight));
}


function draw() {
  if(pause){
    if(pauseFrameDelay < 5){
      pauseFrameDelay++
    } else {
      return;
    }
  }

  background("#212121");

  vehicle.seek(target.pos);
  vehicle.update();
  vehicle.edges();
  vehicle.show();
  
  target.show();  

  if(Math.abs(vehicle.pos.x - target.pos.x) < targetReachedRadius && Math.abs(vehicle.pos.y - target.pos.y) < targetReachedRadius){
    target.pos = createVector(random(window.innerWidth), random(window.innerHeight));
    // pause = true;
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