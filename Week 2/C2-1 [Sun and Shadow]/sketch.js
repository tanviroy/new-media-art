function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(52, 152, 219);
  
  stroke(0);
  strokeWeight(2);
  strokeCap(SQUARE);
  line(width/2, (height/2)-1, 400 - mouseX, (height/2)-1);
  
  stroke(200, 150, 150);
  strokeWeight(20);
  strokeCap(SQUARE);
  line(width/2, height/2, width/2, 100);
  
  fill(241, 196, 15);
  stroke(0,0,0,10);
  strokeWeight(1);
  ellipse(mouseX,mouseY,50,50);
}