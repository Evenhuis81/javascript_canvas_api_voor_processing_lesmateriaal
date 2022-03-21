const Star = () => {
  let x = random(-width / 2, width / 2);
  let y = random(-height / 2, height / 2);
  let z = random(width);

  const update = () => {
    z = z - 10;
    if (z < 1) z = width;
  };
  const show = () => {
    fill(255);
    noStroke();

    const sx = map(x / z, 0, 1, 0, width);
    const sy = map(y / z, 0, 1, 0, height);
    const r = map(z, 0, width, 16, 0);
    circle(sx + width / 2, sy + height / 2, r);
  };
  return { update, show };
};

const stars = [];

function setup() {
  size(800, 800);
  for (let i = 0; i < 800; i++) {
    stars.push(Star());
  }
}

function draw() {
  background(0);
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}
