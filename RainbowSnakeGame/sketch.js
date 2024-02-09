var timer = 20;
var score1 = 0;
var score2 = 0;
function setup() {
  createCanvas(600, 600);
  player1 = new Player();
  player2 = new Player();
  food1 = new Food();
  food2 = new Food();

}

function draw() {
  background(210);
  player1.show();
  player1.update();
  player2.show();
  player2.update();
  food1.show();
  food2.show();
  player1.eat();
  player2.eat();
  
    
  fill(0)
  textAlign(LEFT, CENTER)
  textSize(16);
  textStyle(BOLD)
  text("Time Left: " + timer, 8, 12)
  
  if(frameCount % 60 == 0 && timer > 0){
    timer --;
  }
  
  if(timer==0){
    textAlign(CENTER, CENTER)
    textSize(90)
    textFont("Courier")
    textStyle(BOLDITALIC)
    text("Game Over", width/2, height/2)
    textSize(40);
    text("Player 1 Scored:" + score1, width/2, height/2+70);
    text("Player 2 Scored:" + score2, width/2, height/2+120)
    player1.x = 20;
    player1.y = 20;
    player2.x = 20;
    player2.y = 20;
    food1.x = -10;
    food1.y = -10;
    food2.x = -10;
    food2.y = -10;
  }
}

function Food(){
  this.x = random(width+1)
  this.y = random(height+1)
  this.show = function(){
    fill(255,200,123)
    circle(this.x,this.y,25)
  }
}

function Player(){
  this.x = random(width+1)
  this.y = random(height+1)
  this.xmove = 0
  this.ymove = 0

  this.update = function() {
    this.x = this.x + this.xmove;
    this.y = this.y + this.ymove;   
    this.x = constrain(this.x, 0, width)
    this.y = constrain(this.y, 0, height)
    
}
    this.show = function(){
    fill(random(256),random(256),random(256))
    circle(this.x, this.y, 40)
 
  }
  this.direction = function(x,y){
  this.xmove = x  //this was originally player.xmove
  this.ymove = y  //this was originally player.ymove
  }
  
  this.eat = function(){
    var loc = dist(this.x, this.y, food1.x, food1.y)
    var loc2 = dist(this.x, this.y, food2.x, food2.y)
    if(loc < 25){
      food1.x = random(width+1)
      food1.y = random(height+1)
      score1++
    }
    if(loc2 < 25){
      food2.x = random(width+1)
      food2.y = random(height+1)
      score2++
    }
  }
}

function keyPressed() {
    if (keyCode === RIGHT_ARROW) {
        player1.direction(3, 0);
    } else if (keyCode === DOWN_ARROW) {
        player1.direction(0, 3);
    } else if (keyCode === UP_ARROW) {
        player1.direction(0, -3);
    } else if (keyCode === LEFT_ARROW) {
        player1.direction(-3, 0);
    } else if (key === 'd') {
        player2.direction(3, 0);
    } else if (key === 's') {
        player2.direction( 0, 3);
    } else if (key === 'w') {
        player2.direction(0, -3);
    } else if (key === 'a') {
        player2.direction(-3, 0);
    }
}

