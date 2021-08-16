var shipImage,ship,sea,seaImage;


function preload(){
  shipImage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  
  background("blue");

  sea = createSprite(400,200)
  sea.addImage(seaImage)
  sea.scale=(0.3)

  ship=createSprite(130,200,30,30)
  ship.addAnimation("mooving ship",shipImage)
ship.scale=(0.3)
}

function draw() {
  background(0);
 drawSprites()
}