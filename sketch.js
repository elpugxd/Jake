var path,boy,cash;
var pathImg,boyImg


function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Jake1.png,Jake2.png,jake3.png,jake4.png,jake5.png");
  
}

function setup(){
  
  createCanvas(400,600);
// Mover el fondo
  
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//crear sprite de niño corriendo
boy = createSprite(70,580,20,20);
boy.addAnimation("jakeRunning",boyImg);
boy.scale=0.08;
  
}

function draw() {

 
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
 
}
