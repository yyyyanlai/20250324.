let img1, img2, img3;
let frame1 = 0, frame2 = 0, frame3 = 0;
let showImg1 = false, showImg2 = false, showImg3 = false;
let iframe;

function preload() {
  img1 = loadImage('01.png');
  img2 = loadImage('02.png');
  img3 = loadImage('03.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  let button1 = createButton('自我介紹');
  button1.position(150, 50);
  button1.size(100, 50);
  button1.style('font-size', '20px');
  button1.mouseOver(() => showImg1 = true);
  button1.mouseOut(() => showImg1 = false);
  button1.mousePressed(() => {
    if (!iframe) {
      iframe = createElement('iframe');
      iframe.attribute('src', 'https://yyyyanlai.github.io/20250317/');
      iframe.position(windowWidth * 0.1, windowHeight * 0.2);
      iframe.size(windowWidth * 0.8, windowHeight * 0.6);
    } else {
      iframe.attribute('src', 'https://yyyyanlai.github.io/20250317/');
    }
  });

  let button2 = createButton('測驗題');
  button2.position(280, 50);
  button2.size(100, 50);
  button2.style('font-size', '20px');
  button2.mouseOver(() => showImg2 = true);
  button2.mouseOut(() => showImg2 = false);
  button2.mousePressed(() => {
    if (!iframe) {
      iframe = createElement('iframe');
      iframe.attribute('src', 'https://yyyyanlai.github.io/20250310/');
      iframe.position(windowWidth * 0.1, windowHeight * 0.2);
      iframe.size(windowWidth * 0.8, windowHeight * 0.6);
    } else {
      iframe.attribute('src', 'https://yyyyanlai.github.io/20250310/');
    }
  });

  let button3 = createButton('筆記說明');
  button3.position(410, 50);
  button3.size(100, 50);
  button3.style('font-size', '20px');
  button3.mouseOver(() => showImg3 = true);
  button3.mouseOut(() => showImg3 = false);
}

function draw() {
  background(220);

  if (showImg1) {
    let sx = (frame1 % 3) * 53;
    let sy = Math.floor(frame1 / 3) * 103;
    image(img1, 50, 50, 53, 103, sx, sy, 53, 103);
    if (frameCount % 10 === 0) frame1 = (frame1 + 1) % 9;
  }

  if (showImg2) {
    let sx = (frame2 % 3) * 39;
    let sy = Math.floor(frame2 / 3) * 64;
    image(img2, 50, 50, 39, 64, sx, sy, 39, 64);
    if (frameCount % 10 === 0) frame2 = (frame2 + 1) % 6;
  }

  if (showImg3) {
    let sx = (frame3 % 3) * 37;
    let sy = Math.floor(frame3 / 3) * 66;
    image(img3, 50, 50, 37, 66, sx, sy, 37, 66);
    if (frameCount % 10 === 0) frame3 = (frame3 + 1) % 5;
  }
}
