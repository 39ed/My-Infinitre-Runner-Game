var rocketImg, rocket;
var meteorImg, meteor, meteorsGroup;
var starImg, star, starsGroup;
var resetImg, reset;
var starBgImg, starBg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var score

function preload(){
    rocketImg = loadImage("RocketShipCartoon.png");
    meteorImg = loadImage("FieryMeteor.png");
    starImg = loadImage("MarioStar.png");
    starBgImg = loadImage("starBg.png");

}

function setup() {
    createCanvas(600,800)
    starBg = createSprite(300, 300)
    starBg.addImage("starBg", starBgImg)
    starBg.velocityY = 1

    
    starsGroup = createGroup();
    meteorsGroup = createGroup();

    rocket = createSprite(width/2, 500, 50, 50);
    rocket.scale = 0.3;
    rocket.addImage("rocket", rocketImg);

    drawSprites()
}

function draw() {
 background("black ");
 text("score: "+ score, 500, 50);
  if (gameState === "play") {
    if(keyDown("left_arrow")){
      rocket.x = rocket.x -7 
    }
    if(keyDown("right_arrow")){
      rocket.x = rocket.x + 7
    }
    if(keyDown("space")){
      rocket.velocityY = -10
    }
    rocket.velocityY = rocket.velocityY +0.8

    if(starBg.y > 900){
      starBg.y = 400
    }
    spawnMeteors();

    if(meteorsGroup.isTouching(rocket)){
      rocket.velocity = 0
    }
    if(meteorsGroup.isTouching(rocket) || rocket.y > 800){
      rocket.destroy();
      gameState = "end"
    }
    drawSprites()
  }

  if(gameState === "end"){
    stroke("white");
    fill("red");
    textSize(45);
    text("Game Over", 200,250);
  }
  

}

function spawnMeteors() {
  if(frameCount%240===0){
    var meteor = createSprite(200, 200)
    meteor.velocityY = 5 
    var rand = Math.round(random());
    meteor.x = random(50, 600)
    meteor.addImage(meteorImg)

    meteor.scale = 0.2;
    meteor.lifetime = 300;

    meteorsGroup.add(meteor)

    meteor.setCollider('circle',0,0,45)

  }
}

function spawnStars() {
  
}

