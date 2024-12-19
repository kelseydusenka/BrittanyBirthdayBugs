let bugs = [];

function preload() {
  let bug0 = loadImage("img/bug0.gif");
  let bug1 = loadImage("img/bug1.gif");
  let bug2 = loadImage("img/bug2.gif");
  let bug3 = loadImage("img/bug3.gif");
  let bug4 = loadImage("img/bug4.gif");
  let bug5 = loadImage("img/bug5.gif");
  let bug6 = loadImage("img/bug6.gif");
  let bug7 = loadImage("img/bug7.gif");
  let bug8 = loadImage("img/bug8.gif");
  let bug9 = loadImage("img/bug9.gif");
  let bug10 = loadImage("img/bug10.gif");
  let bug11 = loadImage("img/bug11.gif");
  let bug12 = loadImage("img/bug12.gif");
  let bug13 = loadImage("img/bug13.gif");
  bugs = [
    bug0,
    bug1,
    bug2,
    bug3,
    bug4,
    bug5,
    bug6,
    bug7,
    bug8,
    bug9,
    bug10,
    bug11,
    bug12,
    bug13,
  ];
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  for (let i = 0; i < 30; i += 1) {
    frameRate(i);
    let randomBug = random(bugs);
    image(randomBug, random(-20, windowWidth), random(-20, windowHeight));
    // rotate(random(0,359));
  }
}
