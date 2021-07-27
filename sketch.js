var bow, arrow, background, greenBalloon, redBalloon, pinkBalloon, blueBalloon;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage, blue_balloonImage, backgroundImage;
var score = 0

function preload() {

  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
}

function setup() {
  createCanvas(400,400);

  //creating background
  scene = createSprite(0, 0, 400, 400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5

  // creating bow to shoot arrow
  bow = createSprite(380, 220, 20, 50);
  bow.addImage(bowImage);
  bow.scale = 1;

  
  for(var i=60; i<400; i=i+60){
   redBalloon=createSprite(50,i,i,i)
   redBalloon.addImage(red_balloonImage)
   redBalloon.scale=0.1;
  }

  for(var i=110; i<360; i=i+60){
    blueBalloon=createSprite(100,i,i,i)
    blueBalloon.addImage(blue_balloonImage)
    blueBalloon.scale=0.1;
  }


  for(var i=150; i<360; i=i+60){
    greenBalloon=createSprite(150,i,i,i)
    greenBalloon.addImage(green_balloonImage)
    greenBalloon.scale=0.1;
  }
  
  
  for(var i=200; i<280; i=i+60){
    pinkBalloon=createSprite(200,i,i,i)
    pinkBalloon.addImage(pink_balloonImage)
    pinkBalloon.scale=0.1;
  }

}

function draw() {
  background(0);
 
  score += Math.round(frameCount / 150);

  // moving ground
  scene.velocityX = -3

  if (scene.x < 0) {
    scene.x = scene.width / 2;
  }

  //moving bow
  bow.y = World.mouseY

  // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();

  }

  drawSprites();
  textSize(30)
  fill("white")
  text("score:" + score, 270, 20);
  
}

function createArrow() {
  // Creating  arrows for bow
  var arrow = createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y = bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}

