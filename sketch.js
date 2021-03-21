
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

Hammer = new hammer(100,100,20,70);
storm = new Done(100,100,100,100);
ground = new Ground(400,695,800,20);
rubber=new Rubber(600,100,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  Hammer.display();
 storm.display();
  ground.display();
  rubber.display();
  drawSprites();
 
}



