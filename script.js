function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(220);
  target = createVector(mouseX, mouseY);
  fill("#212121");
  circle(target.x, target.y, 32);
}