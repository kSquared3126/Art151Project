function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,246,227);
  balls = [];
  // Set up an array of portals for the left and right
  leftportals = [];
  rightportals = [];
  
  //made new variable for line
  linelimit = windowWidth/2;
  
  //Probably should just hard code this rather than pushing them into the arrays
  leftportals.push(new Portal(random(25,windowWidth-25),random(37,windowHeight-37)));
  rightportals.push(new Portal(random(linelimit,windowWidth-25),random(37,windowHeight-37)));

//  alert("Here goes the paragraph intro 'title, description, key element, user interface manual")
}

function draw() {

for(let i=0; i< balls.length; i++){
  balls[i].update();
  balls[i].show();

  if(balls[i].pos.x > (leftportals[0].x-24) && balls[i].pos.x < (leftportals[0].x+24) && balls[i].pos.y > (leftportals[0].y-36) && balls[i].pos.y < (leftportals[0].y+36)){
    balls[i].tele(i,l); //goes throught left portal
  }

  if(balls[i].pos.x > (rightportals[0].x-24) && balls[i].pos.x < (rightportals[0].x+24) && balls[i].pos.y > (rightportals[0].y-36) && balls[i].pos.y < (rightportals[0].y+36)){
    balls[i].tele(i,r); //goes through right portal
  }
}
for(let i=0; i< rightportals.length; i++){
  rightportals[i].show();
  leftportals[i].show();
}
} 


function mousePressed(){
  r = random(0,252);
  g = random(0,252);
  b = random(0,252);
  balls.push(new Ball(mouseX,mouseY,r,g,b));
  }

function keyPressed(){

   leftportals[0].x = random(25,windowWidth-linelimit);
   leftportals[0].y = random(37,windowHeight-37);
   rightportals[0].x = random(linelimit,windowWidth-25);
   rightportals[0].y = random(37,windowHeight-37);
  
}
  

function Ball(x,y,r,g,b){
  this.pos = createVector(x,y);
  this.dir = createVector(random(-1,1), random(-1,1));
  //this.dir = createVector(1, 0);
  this.speed = random(4,7);
  //this.speed = 10;
  this.colors = [r,g,b];

  this.update = function(){
    uPos = p5.Vector.mult(this.dir, this.speed);
    this.pos.add(uPos);

      if(this.pos.x >= windowWidth-15 || this.pos.x <= 15){ //to make balls bounce
        this.dir.x*=-1;
      }
    
    
     if(this.pos.y >= windowHeight-15 || this.pos.y <= 15){
       this.dir.y*=-1;
     }
  }
  this.show = function(){
    noStroke();
    //stroke(0);
    fill(this.colors[0], this.colors[1], this.colors[2], 63);
    ellipse(this.pos.x, this.pos.y, 30,30);
  } 

  this.tele = function(i,z){  
    tempx = windowWidth/2;
    tempy = windowHeight/2;
    if(z===r){ //right portal
      if(this.dir.x<0){ //going left
        tempx = leftportals[0].x-25;
        if(this.dir.y<0){ //going down
          tempy = leftportals[0].y+25;
        }
        else{ //going up
          tempy = leftportals[0].y-25;
        }
      }
      else{ //going right
        tempx = leftportals[0].x+25;
        if(this.dir.y<0){ //going down
          tempy = leftportals[0].y+25;
        }
        else{ //going up
          tempy = leftportals[0].y-25;
        }
      }
      balls[i].pos.x = tempx;
      balls[i].pos.y = tempy; 
    }
    else{ //left portal
      if(this.dir.x<0){ //going left
        tempx = rightportals[0].x-25;
        if(this.dir.y<0){ //going down
          tempy = rightportals[0].y+25;
        }
        else{ //going up
          tempy = rightportals[0].y-25;
        }
      }
      else{ //going right
        tempx = rightportals[0].x+25;
        if(this.dir.y<0){ //going down
          tempy = rightportals[0].y+25;
        }
        else{ //going up
          tempy = rightportals[0].y-25;
        }
      }
      balls[i].pos.x = tempx;
      balls[i].pos.y = tempy; 
    }
    
  }
        
}


function Portal(x,y){
  this.x = x;
  this.y = y;
  this.show = function(){
    stroke(1);
    if(this.x > linelimit){
      fill(255,165,0, 5);
    }
    else{
      fill(0,0,255,5);
    }
    //gotta call this.x and this.y
    ellipse(this.x,this.y, 50, 75,);
  }
}
//pressing a key randomly changes pos of 2 portals