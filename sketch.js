var shuttleImg, asteroidImg, shuttle, asteroid, alien, kid, life, backImg;
var alienImg, kidImg ;
var lifeImg, back;  
var gameState = "play" 
var score = 0
var damage = 0

function preload(){
shuttleImg = loadImage("shuttle1.gif")
asteroidImg = loadImage("asteroid.png")
alienImg = loadImage("alien.png")
kidImg = loadImage("kid.png")
lifeImg = loadImage("life.png")
backImg = loadImage("back.png")
}

function setup() {
 createCanvas(600,600)

 back = createSprite(600,600)
 back.addImage(backImg)

console.log = score

 

 shuttle = createSprite(300,500)
 shuttle.addImage(shuttleImg)

back.velocityY = 3

 shuttle.scale = 0.3
 
 kidsGroup = new Group();
 asteroidGroup = new Group();
 lifeGroup = new Group();
 alienGroup = new Group();



 
 
}

function draw() {
     if (gameState ==="play") {

     

    background(200)
    
if(keyDown("d")){
    shuttle.x = shuttle.x+6
}
if(keyDown("a")){
    shuttle.x = shuttle.x-6
}
if(back.y > 600){
    back.y = 500
  }
   spawn()
  
  function spawn(){
    if(frameCount % 200===0){
   
 

    var alien = createSprite(200,-50)
    alien.x = Math.round(random(0,600));
    alien.addImage(alienImg)
    alien.scale = 0.03
    alien.velocityY = 5
    alienGroup.add(alien);
    alien.lifetime = 600
    if(alienGroup.isTouching(shuttle)){
       end()
       console.log(no)
    }


    var kid = createSprite(200,-50)
    kid.x = Math.round(random(0,600));
    kid.addImage(kidImg)
    kid.scale = 0.03
    kid.velocityY = 6
    kidsGroup.add(kid);
    kid.lifetime = 600

    if(kidsGroup.isTouching(shuttle)){
        score = score+1
       
    }
    
    var life = createSprite(200,-50)
    life.x = Math.round(random(0,600));
    life.addImage(lifeImg)
    life.scale = 0.1
    life.velocityY = 6
    lifeGroup.add(life);
    life.lifetime = 600
   
   }
}
     
   

    


}

function end(){
    back.velocityY = 0
}
shuttle.debug = true

alien.depth = shuttle.depth;
shuttle.depth = shuttle.depth+1
 drawSprites()
}
