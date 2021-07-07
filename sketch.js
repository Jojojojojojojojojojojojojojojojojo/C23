
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball;
var block1;
var block2;
var ground;
var engine;
var world;

function preload()
{
   
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball = new Ball(200, 300, 40);
    ground = new Ground(400, 680, 800, 10);
    block1 = new Blocks(550, 630, 10, 100);
	block2 = new Blocks(650, 630, 10, 100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  Engine.update(engine);

ball.show();
ground.show();
block1.show();
block2.show();
   drawSprites();
  
}

function keyPressed()
{
  if(keyCode===UP_ARROW)
    {
      Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0.05,y:-0.01});
    }
}



