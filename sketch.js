const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(800,700);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  ground1 = new ground(400,680,800,20);

 block1 = new blocks(600,645,50,50);
 block2 = new blocks(600,595,50,50);
 block3 = new blocks(600,545,50,50);
 block4 = new blocks(600,495,50,50);
 block5 = new blocks(600,445,50,50);
 block6 = new blocks(600,395,50,50);
 block7 = new blocks(600,345,50,50);
 block8 = new blocks(600,295,50,50);

 block1b = new blocks(690,645,50,50);
 block2b = new blocks(690,595,50,50);
 block3b = new blocks(690,545,50,50);
 block4b = new blocks(690,495,50,50);
 block5b = new blocks(690,445,50,50);
 block6b = new blocks(690,395,50,50);
 block7b = new blocks(690,345,50,50);
 block8b = new blocks(690,295,50,50);

 block1c = new blocks(510,645,50,50);
 block2c = new blocks(510,595,50,50);
 block3c = new blocks(510,545,50,50);
 block4c = new blocks(510,495,50,50);
 block5c = new blocks(510,445,50,50);
 block6c = new blocks(510,395,50,50);
 block7c = new blocks(510,345,50,50);
 block8c = new blocks(510,295,50,50);

 wreckingball = new wrecking_ball(400,400);

 rope1 = new Rope(wreckingball.body,{x:400,y:100})
}

function draw(){
background(255);
Engine.update(engine);

ground1.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();

block1b.display();
block2b.display();
block3b.display();
block4b.display();
block5b.display();
block6b.display();
block7b.display();
block8b.display();

block1c.display();
block2c.display();
block3c.display();
block4c.display();
block5c.display();
block6c.display();
block7c.display();
block8c.display();

wreckingball.display();
rope1.display();
}

function mouseDragged(){
	  Matter.Body.setPosition(wreckingball.body,{x:mouseX,y:mouseY});
}

