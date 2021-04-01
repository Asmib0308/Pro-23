var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	redBox1 = Bodies.rectangle(400,650,230,20, {isStatic:true});
	World.add(world,redBox1);
	redBox2 = Bodies.rectangle(300,610,20,100, {isStatic:true});
	World.add(world,redBox2);
	redBox3 = Bodies.rectangle(500,610,20,100, {isStatic:true});
	World.add(world,redBox3);

	ellipseMode(CENTER);

	packageBody = Bodies.circle(width/2 , 200 , 20 , {restitution:0.8,isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x = packageBody.position.x ;
  packageSprite.y = packageBody.position.y;

  Engine.update(engine);
  fill("red");
  rect(redBox1.position.x,redBox1.position.y,200,20)
  rect(redBox2.position.x,redBox2.position.y,20,100)
  rect(redBox3.position.x,redBox3.position.y,20,100)

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
    Body.setStatic(packageBody,false);
  }
}



