const Engine = Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;


var engine, world ;
var ground;
var ball;


function setup() {
    var canvas = createCanvas (400,400);
    
  engine = Engine.create();
  world = engine.world;



  ground = Bodies.rectangle(200,390,200,20,{isStatic:true});  
  World.add(world,ground);
  console.log(ground.type);

  
  ball = Bodies.circle(200,100,20,{restitution:3, isStatic:true});
  World.add(world,ball)
  }
  
  function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect (ground.position.x, ground.position.y, 400, 20);
    ellipseMode(CENTER);
    ellipse(ball.position.x,ball.position.y,50,50);
    

  } 


function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    ball = Bodies.circle(200, 100 , 20 , {restitution:3, isStatic:false});
	World.add(world, ball);
  }

  

}




