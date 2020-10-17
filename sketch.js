var damage;
var bullet,wall;
var speed,weight;
var thickness;
function setup() {
  createCanvas(1600,400);
  speed=random(322,321);
  weight=random(30,52);
  bullet=createSprite(50,200,30,50);
  wall=createSprite(1500,200,60,height/2);
  thickness=random(22,83)
  bullet.velocityX=speed;
  bullet.shapeColor=color("white");
  wall.shapeColor=color(1200,200,thickness,height/2);
}
function draw() {
  background(0);
  if(hasCollided(bullet,wall)){
    bullet.x-=6;
    bullet.velocityX=0;
    damage=0.5*weight*speed*(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
}
  drawSprites();
}
function hasCollided(Sp1,Sp2){
  var bulletRightEdge=Sp1.x+Sp1.width
  var wallLeftEdge=Sp2.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }else{
      return false;
  }
}