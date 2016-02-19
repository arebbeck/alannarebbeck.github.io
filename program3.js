// PROGRAM 3

//is there a way to undo an action once the mouse is released? -- if dragging the mouse makes a line, can that line go away when I release the mouse?

//have smaller circles change color with keyboard also

var x;
var black = 0;
var white = 255;

function setup() {
  createCanvas(700, 700);
  x = width / 2;
  y = height / 2;
  strokeWeight(4);

  line(0, 50, 700, 80);
  line(0, 300, 700, 100);
  line(0, 500, 700, 150);
  line(0, 690, 700, 400);
  line(0, 160, 700, 550);
}

function mouseDragged() {
  noStroke();
  fill(mouseX, 0, 100, 3);
  ellipse(mouseX, mouseY, 100, 100);
}

//function mouseReleased(){
//background(255);
//}

function draw() {

  if (mouseX > x) {
    x = x + 1;
  } else if (mouseX < x) {
    x = x - 1;
  }
  if (mouseY > y) {
    y = y + 1;
  } else if (mouseY < y) {
    y = y - 1;
  }
  if (x < 30 || x > 670) {
    x = width / 2;
  }
  if (y < 30 || y > 670) {
    y = height / 2;
  }

  fill(white);
  stroke(black);
  strokeWeight(1);
  ellipse(x, y, 50, 50);

  fill(mouseX, mouseY, 100, 20);
  strokeWeight(0.4);
  stroke(0, 40, 100);
  ellipse(x - 100, y + 100, 10, 10);

  stroke(100, 0, 50);
  fill(mouseX, mouseY, 100, 30);
  ellipse(x + 100, y - 100, 10, 10);

  stroke(black);
  strokeWeight(0.04);
  line(0, 650, 700, 600);
  line(0, 100, 700, 300);
  line(10, 10, 700, 700);
  line(0, 300, 700, 100);
  line(0, 400, 700, 200);

  textSize(32);
  textFont("eurostile");
  fill(100,0,50);
  text("a      s      d      f      g      h      j      k      l", 130, 680);
}

function keyTyped() {
  if (key == "a") {
    black = (0);
    white = (255);
  }
  if (key == "s") {
    black = (30);
    white = (220);
  }
  if (key == "d") {
    black = (60);
    white = (190);
  }
  if (key == "f") {
    black = (90);
    white = (160);
  }
  if (key == "g") {
    black = (120);
    white = (130);
  }
  if (key == "h") {
    black = (150);
    white = (100);
  }
  if (key == "j") {
    black = (180);
    white = (90);
  }
  if (key == "k") {
    black = (210);
    white = (30);
  }
  if (key == "l") {
    black = (255);
    white = (0);
  }
}
