function setup() {
  createCanvas(400, 400);
  background(220);
  r = 0;
  g = 0;
  b = 0;
}

function draw() {
  fill(r,g,b);
  noStroke();
}

function mouseDragged(){
  ellipse(mouseX, mouseY, 10, 10);
}

function keyPressed(){
  if(key === 'w'){
    r = 255;
    g = 255;
    b = 255;
  }
  else if (key === 'r'){
    r = 255;
    g = 0;
    b = 0;
  }
  else if (key === 'p'){
    r = 128;
    g = 0;
    b = 128;
  }
  else if (key === 'a'){
    r = 127;
    g = 255;
    b = 212;
  }  
}
