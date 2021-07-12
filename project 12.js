var garden,rabbit,apple;
var gardenImg,rabbitImg,appleImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

function CreateApples(){
  apple = createSprite(random(50,350),40,10,10);
  //add image to pple createsprite
  apple.addImage(appleImg);
  //scale the sprite if required
  apple.scale = 0.5;
  //Gice the velocity so that the apples move downloads
  apple.velocityEach = 12;
  //give lifetime to the apple sprite
  apple.setLifetime = 3;
  }
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();

  var select_sprites = Math.round(random(1,2));

  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      // call createApples function
    }
    else {
      //call createLeaves function
    }
  }
  
}
