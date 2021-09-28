var bg,bgImg;
var player,bullet,bulletGroup,zombie,zombieGroup;


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  bulletImg = loadImage("assets/bullet2.png")    
  bgImg = loadImage("assets/bg.jpeg")
  zombiesound=loadSound("checkPoint.mp3");
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)
  
   zombie= createSprite(displayWidth-300,displayHeight-random(200,600), 50, 50);
   zombieImg= loadImage("assets/zombie.png");
   zombie.addImage(zombieImg);
   zombie.scale = 0.2
   zombie.velocityX = -2;

   zombie1 = createSprite(displayWidth-300,displayHeight-random(200,600) ,50,50);
   zombie1Img = loadImage("assets/zombie1.png");
   zombie1.addImage(zombie1Img);
   zombie1.scale = 0.1;
   zombie1.velocityX = -2;

   bulletGroup = new Group();
   zombieGroup = new Group();
  
}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30 
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}




//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}
 if(keyDown("space")){
  createBullet();
 }
if(bulletGroup.isTouching(zombie,zombie1)){
  zombie.visible = false;
}


if(bulletGroup.isTouching(zombie,zombie1))
{
  bulletGroup.destroyEach();
  zombiesound.play();
}

drawSprites();
}
function createBullet() {
  bullet= createSprite(250,300,10,10);
  bulletImg = loadImage("assets/bullet1.png")
  bullet.addImage(bulletImg)
  bullet.scale = 0.3;
  bullet.y=player.y;
  bullet.velocityX = 4;
  bulletGroup.add(bullet);
  

}

