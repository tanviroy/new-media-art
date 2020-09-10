function setup() {
  createCanvas(400, 400);
  background(241, 196, 15);
  frameRate(10);
}

x1 = 400
y1 = 0
x2 = 400
y2 = 400
x3 = 0
y3 = 400
x4 = 0
y4 = 0

function draw() {
  fill(231, 76, 60, 10);
  triangle(x1, y1, x2, y2, x3, y3);
  
  y1 += 10
  x2 -= 10
  y3 -= 10

  
  if (y1>400) {
    noLoop();
  }
  
}