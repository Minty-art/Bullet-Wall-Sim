var wall, thickness;
var bullet, speed, weight;
function setup() {
  createCanvas (1600,800);
  speed = random (223,321);
  weight = random(30, 52);
  bullet = createSprite(50, 200, 90,22);
  thickness = random(22,83);
  wall = createSprite(1200,300, thickness, height/2);
  bullet.velocityX = speed;
  
}

function draw() {
  background(0);
  if(bullet.isTouching(wall)) {
    bullet.velocityX = 0;
    var damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness)
    if(damage < 10){
      bullet.shapeColor= color(0, 255, 0);
    }
    if(damage > 10){
      bullet.shapeColor=color(255, 0 ,0);
    }
  }
  
  drawSprites();
}