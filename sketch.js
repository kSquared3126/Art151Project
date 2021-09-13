function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,203,164);
  balls = [];
  portals = [];
}

function draw() {
  background(255,203,164);

  line(200,0,200,windowHeight)

for(let i=0; i< balls.length; i++){
  balls[i].update();
  balls[i].show();
}
for(let i=0; i< portals.length; i++){
  portals[i].show();
  portals[i].tele();
}
}


function mousePressed(){
  r = random(0,252);
  g = random(0,252);
  b = random(0,252);
  balls.push(new Ball(mouseX,mouseY,r,g,b));
  }

function keyPressed(){
  portals.push(new Portal(mouseX,mouseY));  
  }
  

function Ball(x,y,r,g,b){
  this.pos = createVector(x,y);
  //this.dir = createVector(random(-1,1), random(-1,1));
  this.dir = createVector(-1, random(-1,1));
  this.speed = random(1,10);
  this.colors = [r,g,b];

  this.update = function(){
    uPos = p5.Vector.mult(this.dir, this.speed);
    this.pos.add(uPos);

    if(this.pos.x >= windowWidth-15 || this.pos.x <= 15){
      this.dir.x*=-1;
    }
    if(this.pos.y >= windowHeight-15 || this.pos.y <= 15){
      this.dir.y*=-1;
    }
      if(portals.length > 0){
        if(this.pos.x <= 200){
        this.pos.x = portals[0].x;
        this.pos.y = portals[0].y;
      }
    }
  }
  this.show = function(){
    //noStroke();
    stroke(0);
    fill(this.colors[0], this.colors[1], this.colors[2], 63);
    ellipse(this.pos.x, this.pos.y, 30,30);
  } 
}

function Portal(x,y){
  this.show = function(){
    stroke(1);
    fill(255,0,0, 0);
    ellipse(x,y, 50, 50);

  this.tele = function(){
    if(balls[0].x >= 200){
      balls[0].pos.x = 300;
      balls[0].pos.y = 300;
    }
  }
  }
}

