var Natwarlal= createSprite(85,364,30,30);
Natwarlal.setAnimation("natwarlal");
Natwarlal.scale= 0.6

var treasure = createSprite(360,20,20, 20);
treasure.setAnimation("diamond");
treasure.scale= 0.1




 var laser1 = createSprite(100,0,200,5);
laser1.shapeColor="red"
laser1.velocityY=2;

var laser2 = createSprite(300,400,200,5);
laser2.shapeColor="red"
laser2.velocityY=3;

 var Obstacle= createSprite(326,197,20,20);
 Obstacle.setAnimation("obstacle");
 



for (var i =20; i < 400; i=i+30) {
var sidetrap = createSprite(400,i,20, 20); 
sidetrap.setAnimation("side trap");
}

for (var i =20; i < 400; i=i+30) {
var sidetrap2 = createSprite(0,i,20, 20); 
sidetrap2.setAnimation("side trap 2");
}

var floorspiketrap= createSprite(200,400,2,2);
floorspiketrap.setAnimation("floor spikes");
floorspiketrap.scale=0.3

var toptrap= createSprite(168,0,20, 20);
toptrap.setAnimation("stone trap");















function draw() {
background("black");



createEdgeSprites();
laser1.bounceOff(edges);
laser2.bounceOff(edges);
Natwarlal.bounceOff(toptrap);
Natwarlal.bounceOff(edges);
Natwarlal.bounceOff(Obstacle);



if (keyDown('LEFT_ARROW')) {
Natwarlal.velocityX =-4 ;
Natwarlal.velocityY =0;
}

if (keyDown('RIGHT_ARROW')) {
 Natwarlal.velocityX =4;
 Natwarlal.velocityY=0;
}

if (keyDown('UP_ARROW')) {
  Natwarlal.velocityX=0;
  Natwarlal.velocityY=-4;
}

if (keyDown('DOWN_ARROW')) {
  Natwarlal.velocityX=0;
  Natwarlal.velocityY=4;
}
if (Natwarlal.isTouching(laser1)) {
Natwarlal.velocityX=0;
Natwarlal.velocityY=0;
laser1.velocityY=0;
laser1.velocityX=0;
 laser2.velocityY=0;
laser2.velocityX=0;
textSize(22);
text("Thief caught",121, 170);
                
}
if (Natwarlal.isTouching(laser2)) {
 Natwarlal.velocityX=0;
 Natwarlal.velocityY=0;
 laser2.velocityY=0;
laser2.velocityX=0;
laser1.velocityY=0;
laser1.velocityX=0;
textSize(22);
text("Thief caught",121, 170); 
}
if (Natwarlal.isTouching(sidetrap)) {
 Natwarlal.velocityX=0;
Natwarlal.velocityY=0;
laser1.velocityY=0;
laser1.velocityX=0;
laser2.velocityY=0;
laser2.velocityX=0;
textSize(22);
text("Thief caught",121, 170); 
}
if (Natwarlal.isTouching(sidetrap2)) {
Natwarlal.velocityX=0;
Natwarlal.velocityY=0;
laser1.velocityY=0;
laser1.velocityX=0;
laser2.velocityY=0;
laser2.velocityX=0;
textSize(22);
text("Thief caught",121, 170);  
}
if (Natwarlal.isTouching(floorspiketrap)) {
 Natwarlal.velocityX=0;
Natwarlal.velocityY=0;
laser1.velocityY=0;
laser1.velocityX=0;
laser2.velocityY=0;
laser2.velocityX=0;
textSize(22);
text("Thief caught",121, 170); 
}

if (Natwarlal.isTouching(treasure)) {
Natwarlal.velocityX=0;
Natwarlal.velocityY=0;
laser1.velocityY=0;
laser1.velocityX=0;
laser2.velocityY=0;
laser2.velocityX=0;
textSize(22);
text("Diamond Stolen",158,170);
}




















drawSprites();
    
}
