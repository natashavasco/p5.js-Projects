var timer = 20
var score = 0

function setup() {
  createCanvas(400, 400);
  player = new Player();
  food = new Food();
}

function draw() {
  background(220);
  player.show();
  player.update();
  food.show();
  player.eat();
  fill(0)
  textAlign(LEFT, CENTER)
  textSize(16);
  text("Time Left: " + timer, 8, 12)
  
  if(frameCount % 60 == 0 && timer > 0){
    timer --;
  }
  
  if(timer==0){
    textAlign(CENTER, CENTER)
    textSize(40);
    text("You Scored:" + score, width/2, height/2+80);
    textSize(70);
    fill(255,0,0)
    textFont('Georgia')
    text("Game Over", width/2, height/2)
    player.x = -10;
    player.y = -10;
    //food.x = -10;
   // food.y = -10;
    playAgain();
  }
}

function Food(){ 
  this.x = random(width+1);
  this.y = random(height+1);
  this.show = function(){
    fill(255,234,0)
    circle(this.x, this.y, 10)
  }
}

function Player(){
  this.x = 20 
  this.y = 20
  this.xmove = 0
  this.ymove = 0
  this.show = function(){
    fill(255)
    circle(this.x, this.y, 10)
  }
  

  this.direction = function(x,y){
  player.xmove = x
  player.ymove = y
  }
  
  this.eat = function(){
    var loc = dist(this.x,this.y,food.x,food.y);
    if (loc < 10){
      food.x = random(width);
      food.y = random(height);
      score ++
    }
  }
  
    this.update = function() {
    this.x = this.x + this.xmove;
    this.y = this.y + this.ymove;   
    this.x = constrain(this.x, 0, width)
    this.y = constrain(this.y, 0, height)
}
}

function keyPressed() {
    if (keyCode === RIGHT_ARROW) {
        player.direction(3, 0);
    } else if (keyCode === DOWN_ARROW) {
        player.direction(0, 3);
    } else if (keyCode === UP_ARROW) {
        player.direction(0, -3);
    } else if (keyCode === LEFT_ARROW) {
        player.direction(-3, 0);
    }
}

function mousePressed(){
  if(timer == 0){
    if(mouseY < 70 && mouseX > 270){
      timer = 20
      score = 0
    }
  }
}

function playAgain(){
  rect(270, 0, 130, 70, 15, 15, 15, 15);
  fill(0);
  textSize(20);
  text("Play Again?", 335, 30);
  textSize(15);
  text("Click here!", 335, 50 );
}