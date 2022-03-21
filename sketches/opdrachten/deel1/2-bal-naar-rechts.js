// let x = 60;
// let x = 0; // oplossing 4
// let x = 200; // oplossing 5
// let y = 0; // oplossing 6
// let y = 200; // oplossing 7

// eindopdracht
let x = 0;
let y = 0;
let w = 0;
let h = 0;

function setup() {
  //   size(250, 200);
  size(300, 200); // oplossing 1
}

function draw() {
  //   ellipse(x, 50, 40, 30);
  //   ellipse(x, 50, 40, 40); // oplossing 2
  //   ellipse(150, y, 40, 40); // oplossing 6
  ellipse(x, y, w, h); // eindopdracht
  //   x = x + 1;
  //   x = x + 2; // oplossing 3
  //   x = x - 1; // oplossing 5
  //   y = y + 1; // oplossing 6
  // y = y - 2; // oplossing 7

  // eindopdracht
  x = x + 1;
  y = y + 1;
  w = w + 1;
  h = h + 1;
}
