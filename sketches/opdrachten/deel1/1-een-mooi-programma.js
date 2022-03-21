function setup() {
  size(256, 256);
}

function draw() {
  fill(mouseX, mouseY, mouseX + mouseY);
  circle(mouseX, mouseY, 50);
  fill(mouseY, mouseX, 255);
  circle(mouseY, mouseX, 50);
}
