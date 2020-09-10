function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(241, 196, 15);
  
  fill (243, 156, 18);
  stroke(0);
  strokeWeight(1);
  ellipse(width/2,height/2, width, height)

  // rect(x, y, w, h);
  // quad(x1, y1, x2, y2, x3, y3, x4, y4);
  // rect(0,0,100,400);
  fill (211, 84, 0);
  triangle(0, 0, width/2, 0, 0, height/2);
  triangle(0, height/2, width/2, height, width, height/2);
  noStroke()
  triangle(0, height/2, width/2, 0, width, height/2);
  // quad(0,0,100,0,0,400,100,400);
}