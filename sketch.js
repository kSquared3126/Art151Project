function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0,130,220);
  
  line(175,250,175,300);//legs
  line(225,250,225,300);
  
  fill(220,220,220)
  rect(150,150,100,120,5);//body
  line(150,250,250,250);
  
  triangle(190,250,210,250,200,255);//tie
  quad(200,255,190,260,200,270,210,260);
  
  line(100,170,150,210);//arms
  line(300,170,250,210);
  
  line(170,230,230,230);//mouth and teeth
  square(180,230,10);
  square(210,230,10)
  
  circle(175,180,25);//eyes
  circle(225,180,25);
  circle(180,185,5);
  circle(220,175,5);
  
  circle(200,210,10);//nose
  
  fill(220,150,0);
  rect(100,100,20,200);//pencil
  fill(210,180,140);
  triangle(100,100,120,100,110,80);
  fill(0,0,0);
  triangle(110,80,111,81,109,81);
  fill(220,180,170);
  rect(100,300,20,15,3);
  
  fill(220,165,0);//pineapple house
  bezier(310,100,325,10,350,10,389,100);
  fill(0,220,0);
  //triangle(337,10)
  
}