function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,246,227);
  balls = [];
  portals = [];
  portals.push(new Portal(random(25,windowWidth-25),random(25,windowHeight-25)));
  portals.push(new Portal(random(25,windowWidth-25),random(25,windowHeight-25)));

//  alert("Here goes the paragraph intro 'title, description, key element, user interface manual")
}

function draw() {
  //background(255,246,227);
line((windowWidth-200),0,(windowWidth-200),windowHeight)

for(let i=0; i< balls.length; i++){
  balls[i].update();
  balls[i].show();
  if(balls[i].pos.x>windowWidth-200){
    balls[i].tele(i);
  }
}
for(let i=0; i< portals.length; i++){
  portals[i].show();
}
} 


function mousePressed(){
  r = random(0,252);
  g = random(0,252);
  b = random(0,252);
  balls.push(new Ball(mouseX,mouseY,r,g,b));
  }

function keyPressed(){
  // portals.push(new Portal(random(25,windowWidth-25),random(25,windowHeight-25)));
  // portals.push(new Portal(random(25,windowWidth-25),random(25,windowHeight-25)));
  // portals.splice(0,2);
  portals[0].x = random(25,windowWidth-25);
  portals[0].y = random(25,windowHeight-25);
  portals[1].x = random(25,windowWidth-25);
  portals[1].y = random(25,windowHeight-25);
}
  

function Ball(x,y,r,g,b){
  this.pos = createVector(x,y);
  //this.dir = createVector(random(-1,1), random(-1,1));
  this.dir = createVector(1, 0);
  this.speed = random(5,6);
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
  }
  this.show = function(){
    noStroke();
    stroke(0);
    fill(this.colors[0], this.colors[1], this.colors[2], 63);
    ellipse(this.pos.x, this.pos.y, 30,30);
  } 
  this.tele = function(i){
    tempx = portals[0].x;
    tempy = portals[0].y;
    balls[i].pos.x = tempx;
    balls[i].pos.y = tempy;  
    }
        
  }


function Portal(x,y){
  this.show = function(){
    stroke(1);
    fill(255,0,0, 5);
    ellipse(x,y, 50, 50);
    }
  }
//pressing a key randomly changes pos of 2 portals

