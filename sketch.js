var tiger, tigerimg;
var arrow, arrowimg, arrowgroup;
var stone, stoneimg, stonegroup;
var forest, forestimg;
var ground;
var SurvivalTime;
var gameState = "play";

function preload(){
  forestimg = loadImage("jungle.jpg");
  tigerimg = loadImage("Tiger Image 1 .png");
  stoneimg = loadImage("Stone.png");
  arrowimg = loadImage("arrow.png");
  
  arrowgroup = new Group();
  stonegroup = new Group();
  
  SurvivalTime = 0;
}
function setup() {
  createCanvas(600, 600);
  forest = createSprite(300, 300, 600, 600);
  forest.addImage(forestimg);
  forest.velocityX = -3;
  
  tiger = createSprite(100, 100, 10, 10);
  tiger.addImage(tigerimg);
  tiger.scale = 0.3;
  
  ground = createSprite(200, 560, 400, 10);
  ground.visible = false;
  ground.velocityX = -7;
  
  
 
}

function draw() {
  background("white");
  drawSprites();
  
  stroke("cyan");
  textSize(20);
  fill("black");
   SurvivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time ="+SurvivalTime, 350, 50);
  
  if (gameState ==="play"){
    if (forest.x < 150){
      forest.x = 300;
      }
  if (keyDown("space")){
    tiger.velocityY = -12;
     }
  tiger.velocityY = tiger.velocityY + 0.5;
  tiger.collide(ground);
 if (ground.x <150){
   ground.x = 300;
 }

  ARROWS();
  STONES();
   if (tiger.isTouching (stonegroup) || tiger.isTouching(arrowgroup)){
     gameState = "end";
   }
    console.log(gameState);
  } else if (gameState === "end"){
    background("black");
    textSize(50);
    stroke("cyan");
    fill("black");
    text("GAMEOVER", 200, 200);
  }
  
 
}
function ARROWS(){
  if (frameCount % 200 === 0){
      arrow = createSprite(Math.round(random(600, 400)),Math.round(random(100, 300)), 20, 20)
    arrow.addImage("ARROWimg",arrowimg)
    arrow.velocityX = -7;
    arrow.scale = 0.5;
    arrow.lifetime = 70;
    arrowgroup.add(arrow);
    arrow.debug = false;
    arrow.setCollider("rectangle", 0, 0, 40, 40)
  }
}

function STONES(){
  if (frameCount % 80 === 0){
      stone = createSprite(600,500, 20, 20)
    stone.addImage("STONEimg",stoneimg)
    stone.velocityX = -7;
    stone.scale = 0.3;
    stone.lifetime = 90;
    stonegroup.add(stone);
    stone.debug =false;
    stone.setCollider("rectangle", 0, 0, 100, 100)
  }
}

