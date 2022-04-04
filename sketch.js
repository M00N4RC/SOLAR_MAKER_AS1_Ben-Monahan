//stating global variables
let img;
let brush;
let nebula;
let img1;
let img2;
let img3;

var c = []; //array for color's
var index = 0;
var size = 30;
var myColour;
let starsX = []; //array for star's
let starsY = [];
let posX;
let posY;
let myFont;

var fade;
var fadeAmount = 1;//stating specific amount for global variable

function setup() {
  fade = 0;
  createCanvas(800, 600);
  push();
  background(23, 29, 39);
  noStroke();
  textSize(12);
  
//needed to reference the p5 DOM library "libraries/p5.dom.js" in the HTML code. As the button is not part of the normal vanilla p5js library.
  var button = createButton("reset");
  button.position(10, 547);
  button.mousePressed(setup);
  //everytime the reset button is pushed it activates the setup function making the program start again
  
  //filling/assigning global variables with a vlue
  img = loadImage("Blackhole.png");
  nebula = loadImage("Nebula.png");
  
  myFont = loadFont("Orbitron.ttf");
  
  img2 = loadImage('BlackholeImg.png');

  brush = nebula;

  //sets mouse interaction point for custom brushes
  imageMode(CORNER);
  imageMode(CENTER);
  imageMode(CENTER);

  //assigning global variables to dimensions
  posX = random(width);
  posY = random(height);
  
//assigning the different colors to specifc numbers in the array's index.
  c[0] = color(245, 198, 60);
  c[1] = color(244, 127, 107);
  c[2] = color(187, 80, 152);
  c[3] = color(122, 81, 151);
  c[4] = color(83, 68, 169);
  c[5] = color(128, 96, 67);
  c[6] = color(80, 200, 120);
  c[7] = color(193, 7, 7);
  c[8] = color(135, 1, 1);
  c[9] = color(184, 228, 229);
  c[10] = color(244, 186, 180);
  c[11] = color(223, 71, 33);

  //assigning global variable to the start of the index
  myColour = c[0];

  //gives stars random values to appear on screen
  for (var i = 0; i < width; i += 20) {
    starsX[i] = random(0, width);
    starsY[i] = random(0, height);
  }
}

function draw() {
  push();//push function gives more control by seperating the code, ensuring that other random local variables don't appear.
  noStroke();
  fill(245, 198, 10, fade);
  textSize(50);
  textFont(myFont);
  text("Welcome to Solar Maker", 70, 250);
  textSize(20);
  fill(255, fade);
  text("click 'reset' to get started", 250, 300);
  //basic text and fill functions to display on screen

  //calls global variable, if 'fade' is greater then 255 (maximum visibilty) and assigns the other global varibale (fadeAmount) to be -5. It then uses a 'add assign' operator, which combines the addition with the assignment.
  if (fade > 100) fadeAmount = -10;
  fade += fadeAmount;
  pop();

  //calls array to generate stars
  fill(240);
  stroke(255);
  strokeWeight(0.05);
  for (var i = 0; i < width; i += 20) {
    circle(starsX[i], starsY[i], 2);
  }
//Gray tool bar boarder
  fill(90);
  noStroke();
  rect(0, 545, 800, 60);

  //text/instructions
  push();
  strokeWeight(0);
  fill(255);
  text("PLANET COLORS", 70, 563);
  text("KEYS 1 - 9", 630, 563);
  text("P = PLANETS", 710, 563);
  text("B = BLACKHOLE", 430, 563);
  text("N = NEBULA", 543, 563);
  text("S = STOP", 370, 590);
  text("T = SCREENSHOT", 250, 563);
  pop();

  //icons in the tool bar
  push();
   fill(239, 64, 176);
  stroke(84, 104, 255);
  strokeWeight(3);
  ellipse(580, 585, 30, 30);//nebula
  stroke(255,165,0);
  fill(0);
  ellipse(480, 585, 30, 30);//blackhole
  stroke(255);
  strokeWeight(0.9);
  fill(23, 29, 39);
  ellipse(663, 585, 30, 30);
  ellipse(663, 585, 15, 15);
  ellipse(750, 585, 30, 30);
  pop();
  
  //draw palette squares, using array, calling assigned global variables
  push();
  fill(c[0]);
  rect(0, height - size, size, size);
  fill(c[1]);
  rect(size * 1, height - size, size, size);
  fill(c[2]);
  rect(size * 2, height - size, size, size);
  fill(c[3]);
  rect(size * 3, height - size, size, size);
  fill(c[4]);
  rect(size * 4, height - size, size, size);
  fill(c[5]);
  rect(size * 5, height - size, size, size);
  fill(c[6]);
  rect(size * 6, height - size, size, size);
  fill(c[7]);
  rect(size * 7, height - size, size, size);
  fill(c[8]);
  rect(size * 8, height - size, size, size);
  fill(c[9]);
  rect(size * 9, height - size, size, size);
  fill(c[10]);
  rect(size * 10, height - size, size, size);
  fill(c[11]);
  rect(size * 11, height - size, size, size);
  pop();
//keyPressed function assigning the png image file and turning it into a custom brush by translating the image with the x and y axis of the mouse, only when the 'b' key is pressed 
  if (key === "b") {
    imageMode(CORNER);
    translate(mouseX, mouseY);
    rotate(random(0, 360));
    image(img, 0, 0, 30, 30);
  } else if (key === "s") {
    value = 0;
  }
    drawNebula(frameCount % 360, 80, 0.05); //calls global variable and roatates through the hues as well as rotating the brush
}

function drawNebula(col, nebulaSize, speed) {//places variables into a function creating a more interactive custom brush, this was specifically to replicate the style of a nebula. Same process applies with the 'keyPressed' function besides the frameCount.
  if (key === "n") {
    // tint our brush
    tint(col, 50, 100, 10);//different hues/tints of color
    push();
    translate(mouseX, mouseY);
    scale(sin(frameCount * speed) + 1.5);
    imageMode(CENTER);//makes png stay with the center of the mouse/point
    rotate(frameCount * 0.1);//how quickly it expands in and out
    image(brush, 0, 0, nebulaSize, nebulaSize);
    pop();
  } else if (keyCode === "s") { //both functions stop once 's' is pressed
    value = 0;
  }
}

function mousePressed() {
  // detect if palette square is clicked
  if (mouseY > height - size) {
    if (mouseX < size * 13) {
      myColour = get(mouseX, mouseY);
    }
  }
  //fills the mouse with the current color
  fill(myColour);
  noStroke();
  circle(mouseX, mouseY, 10);
}
//drags the color with the mouse creating a drawing tool
function mouseDragged() {
  // draw a circle with current colour
  fill(myColour);
  noStroke();
  circle(mouseX, mouseY, 10);
}


//assinging the different solar rings to certain keys.
function keyTyped() {
  if (key == "1") {
    fill(234, 147, 0);
    stroke(255, 100, 0);
    strokeWeight(2);
    ellipse(400, 300, 100, 100);
  }
  if (key == "2") {
    noFill();
    stroke(255);
    strokeWeight(2);
    ellipse(400, 300, 120, 120);
  }
  if (key == "3") {
    noFill();
    stroke(255);
    strokeWeight(2);
    ellipse(400, 300, 170, 170);
  }
  if (key == "4") {
    noFill();
    stroke(255);
    strokeWeight(2);
    ellipse(400, 300, 230, 230);
  }
  if (key == "5") {
    noFill();
    stroke(255);
    strokeWeight(2);
    ellipse(400, 300, 290, 290);
  }
  if (key == "6") {
    noFill();
    stroke(255);
    strokeWeight(2);
    ellipse(400, 300, 500, 500);
  }
  if (key == "7") {
    noFill();
    stroke(255);
    strokeWeight(2);
    ellipse(400, 300, 600, 600);
  }
  if (key == "8") {
    noFill();
    stroke(255);
    strokeWeight(2);
    ellipse(400, 300, 700, 700);
  }
  if (key == "9") {
    noFill();
    stroke(255);
    strokeWeight(2);
    ellipse(400, 300, 800, 800);
  }
  
  if (key == "0") {
    noFill();
    stroke(255);
    strokeWeight(2);
    ellipse(400, 300, 900, 900);
  }
  
  if (key === 't' || key === 'T') {
    saveCanvas('myCanvas', 'jpg');
    print("saving image");
  }
  return false;
}

//creates circles in random areas and with random sizes
function keyPressed() {
  let m = map(900, 800, 300, 300, 200);
  if (key == "p") {
    noFill();
    stroke(255);
    strokeWeight(1);
    let size = random(100);
    ellipse(random(width), random(height), size, size);
  }
}