function setup() {
  createCanvas(300, 300);
  background(233)
  cursor(CROSS)
  stroke(255, 255, 255)
  fill(255, 255, 255)
  rect(0, 0, 300, 65)
  stroke(255, 0, 0)
  fill(255, 0, 0)
  ellipse(30, 40, 30, 30)
  text('Red', 18, 20)
  stroke(0, 250, 0)
  fill(0, 230, 0)
  ellipse(80, 40, 30, 30)
  text('Green', 62, 20)
  stroke(0, 0, 255)
  fill(0, 0, 255)
  ellipse(130, 40, 30, 30)
  text('Blue', 117, 20)
  stroke(0, 0, 0)
  fill(0, 0, 0)
  ellipse(180, 40, 30, 30)
  text('Black', 167, 20)
  text('White', 217, 20)
  fill(255, 255, 255)
  ellipse(230, 40, 30, 30)
  fill(180, 180, 180)
  ellipse(280, 50, 25, 25)
  ellipse(280, 20, 25, 25)
  fill(0, 0, 0)
  text('E', 277, 55)
  text('C', 275, 25)
}

function draw() {


}


function mousePressed() {
  if (mouseY < 69) {
    if (mouseX > 10 && mouseX < 50) {
      stroke(255, 0, 0)
      fill(255, 0, 0)
    } else if (mouseX > 50 && mouseX < 100) {
      stroke(0, 255, 0)
      fill(0, 255, 0)
    } else if (mouseX > 100 && mouseX < 150) {
      stroke(0, 0, 255)
      fill(0, 0, 255)
    } else if (mouseX > 150 && mouseX < 200) {
      stroke(0, 0, 0)
      fill(0, 0, 0)
    } else if (mouseX > 200 && mouseX < 250) {
      stroke(255, 255, 255)
      fill(255, 255, 255)
    } else if (mouseX > 250 && mouseX < 300 && mouseY > 40) {
      stroke(233)
      fill(233)
    } else if (mouseX > 250 && mouseX < 300 && mouseY < 40) {
      stroke(233)
      fill(233)
      rect(0, 66, 300, 300)
      stroke(0, 0, 0)
      fill(0, 0, 0)
    }
  }
}

function mouseDragged() {
  if (mouseY > 70) {
    ellipse(mouseX, mouseY, 10, 10)
  }
}
