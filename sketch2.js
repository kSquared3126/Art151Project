function setup(){
    createCanvas(windowWidth, windowHeight);
    background(255,246,227);
    //alert("Here goes the paragraph intro 'title, description, key element, user interface manual")
    balls = [];
    for(let w=0; w<windowWidth; w=+50){
        for(let h=0; h<windowHeight; h+50){
            balls.push(new Ball(w,h))
        }
    }
}

function draw(){
    for(let w=0; w<windowWidth; w=+50){
        for(let h=0; h<windowHeight; h+50){
            balls[w][h].show();
        }
    }

}

function Ball(x,y){
    this.pos = createVector(x,y);
    this.dir = createVector(0,0);
    this.speed = 5;


    this.show = function(){
        stroke(0);
        fill(255,0,0);
        ellipse(this.pos.x, this.pos.y, 50);

    }   

}

//if some var =0, balls dont move; if var=1, balls repel; if var=2, balls attract
//when done, submit git.hub link and link to live website