
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var box, box1, box2, box3;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	
	box1Sp = createSprite(900,580, 150, 20)
	box1Sp.shapeColor = color("red")

	box2Sp = createSprite(830,500, 20, 200)
	box2Sp.shapeColor = color("red")

	box3Sp = createSprite(970,500, 20, 200)
	box3Sp.shapeColor = color("red")

    //Create the Bodies Here.

	Engine.run(engine);

	paper1 = new Paper(60, 50)
	ground = new Ground(600, 600, 1200, 20)

	box1 = Bodies.rectangle(900, 590, 100, 20, {isStatic:true} );
	World.add(world, box1);

	box2 = Bodies.rectangle(830, 500, 20, 200 , {isStatic:true} );
	World.add(world, box2);
	 
	box3 = Bodies.rectangle(970, 500, 20, 200 , {isStatic:true} );
 	World.add(world, box3);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  drawSprites();
 paper1.display();
 ground.display();
 
}

function keyPressed(){
if(keyCode = UP_ARROW){
Matter.Body.applyForce(paper1.body, paper1.body.position,{x:85, y:-85})

}

}