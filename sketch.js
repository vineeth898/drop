var r=0,g=0,b=0;
var state="r";
function setup() {
  createCanvas(800,400);
}

function draw() {
background("yellow");
  for(var x=10;x<400;x=x+10){
    a=random(0,800);
    fill("red");
   var x=createSprite(a,0,5,20);
    x.setVelocity(0,5);
    drawSprites();
  } 
}