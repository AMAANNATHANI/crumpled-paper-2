
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper,dustbinL,dustbinR,dustbinB;

function preload(){	
}

function setup() {
	createCanvas(1200,600);

	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
   ground = new Ground(600,580,1200,40);
   paper  = new Paper(100,500,50);
   dustbinB=new DustbinBase(1000,550,160,20);
   dustbinR=new Dustbin(1080,500,7,100);
   dustbinL=new Dustbin(920,500,7,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  ground.display();
  paper.display ();
 // dustbinB.display ();
  dustbinR.display ();
  dustbinL.display ();
  dustbinB.display ();
  drawSprites();
 
}


function keyPressed() {
	 if (keyCode === UP_ARROW) {
		  Matter.Body.applyForce(paper.body,paper.body.position,{x:55,y:-60});
		 } 
		}
