const canvas = document.getElementById("dojo-canvas");
const context = canvas.getContext("2d");
let wrapper = document.getElementById("app");
let canvasRect;

window.mouseX = 0;
window.mouseY = 0;
let doFill = true;
let doStroke = true;
window.width = canvas.width;
window.height = canvas.height;

const constants = {
  TWO_PI: Math.PI * 2,
};

window.map = (value, start1, stop1, start2, stop2) =>
  ((value - start1) / (stop1 - start1)) * (stop2 - start2) + start2;

const init = () => {
  console.log(context.font);
  context.fillStyle = "white";
  context.strokeStyle = "black";
  canvasRect = canvas.getBoundingClientRect();
};
init();

window.fullScreen = () => {
  window.width = innerWidth;
  window.height = innerHeight;
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  init();
};

window.textSize = (size) => {
  const font = context.font.split(" ");
  context.font = `${size}px ${font[1]}`;
};

window.size = (w, h) => {
  canvas.width = w;
  canvas.height = h;
  width = w;
  height = h;
  init();
};

window.background = (...color) => {
  const tmp = context.fillStyle;
  context.fillStyle = colorToString(color);
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = tmp;
};

window.random = (min, max) => {
  if (!max) return Math.random() * min;
  if (min > max) {
    const tmp = min;
    min = max;
    max = tmp;
  }
  return Math.random() * (max - min) + min;
};

window.fill = (...color) => {
  doFill = true;
  context.fillStyle = colorToString(color);
};

window.stroke = (...color) => {
  doStroke = true;
  context.strokeStyle = colorToString(color);
};

window.noStroke = () => (doStroke = false);

window.line = (x1, y1, x2, y2) => {
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  if (doStroke) context.stroke();
};

window.rect = (x, y, w, h) => {
  context.rect(x, y, w, h);
  drawIt();
};

window.point = (x, y) => {
  context.beginPath();
  context.arc(x, y, context.lineWidth / 2, 0, constants.TWO_PI);
  if (doStroke) context.stroke();
};

window.text = (txt, x, y) => {
  context.fillText(txt, x, y);
};

window.ellipse = (x, y, w, h) => {
  context.beginPath();
  context.ellipse(x, y, w / 2, h / 2, 0, 0, constants.TWO_PI);
  drawIt();
};

window.circle = (x, y, r) => {
  context.beginPath();
  context.arc(x, y, r / 2, 0, constants.TWO_PI);
  drawIt();
};

const drawIt = () => {
  if (doFill) context.fill();
  if (doStroke) context.stroke();
};

const colorToString = (color) => {
  let string;
  if (color.length === 1) string = `rgb(${color[0]}, ${color[0]}, ${color[0]})`;
  if (color.length === 3) string = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
  return string;
};

canvas.addEventListener("mousemove", (evt) => {
  mouseX = evt.pageX - canvasRect.left;
  mouseY = evt.pageY - canvasRect.top;
});

const loop = () => {
  draw();

  requestAnimationFrame(loop);
};

if (typeof window.setup === "function") {
  setup();
}

if (typeof window.draw === "function") {
  loop();
}
