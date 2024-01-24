let path;
let vehicle;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  vehicle = new Vehicle(100, 100);

  path = new Path();
  path.addPoint(window.innerWidth * 1/8, window.innerHeight * 1/5);
  path.addPoint(window.innerWidth * 1/8, window.innerHeight * 4/5);
  path.addPoint(window.innerWidth * 7/8, window.innerHeight * 4/5);
  path.addPoint(window.innerWidth * 7/8, window.innerHeight * 1/5);
}


function draw() {
  background("#212121");
  path.show();

  target = createVector(mouseX, mouseY);
  fill("#FFF");
  circle(target.x, target.y, 32);

  vehicle.seek(target);
  vehicle.applyForce();
  vehicle.update();
  vehicle.show()

}