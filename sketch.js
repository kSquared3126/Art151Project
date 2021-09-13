function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0,130,220);
}

function Ball(x,y){
  this.x = 30;
  this.y = 30;

  this.dir = createVector(random(-1,1), random(-1,1));
  }
