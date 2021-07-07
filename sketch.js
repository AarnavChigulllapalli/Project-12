var pathimg
var path
var jaxon
var jaxonimg
var invisiblewall1
var invisiblewall2
function preload(){
  //pre-load images
  pathimg = loadImage("path.png")
  jaxonimg = loadAnimation("Runner-1.png","Runner-2.png")

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  invisiblewall1=createSprite(300,200,400,100);
  invisiblewall1.visible = false;
  invisiblewall2=createSprite(100,200,400,100);
  invisiblewall2.visible = false;
  path=createSprite(200,200);
  path.addImage(pathimg);
  path.velocityY=4;
  path.scale=1.2;
  jaxon=createSprite(200,350,100,100);
  jaxon.addAnimation("Runner-1.png","Runner-2.png",jaxonimg)
  jaxon.scale=0.1;
  
}  
function draw() {
 background(0);
 jaxon.x = World.mouseX;
 console.log(jaxon.X)
 
 
 
 
 
  if(path.y > 400){
    path.y = height/2;
  }
 drawSprites();
}
