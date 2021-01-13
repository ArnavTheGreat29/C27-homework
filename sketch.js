var roof, rope;
var render;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
  world = engine.world;
  
  

render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });



	//Create the Bodies Here.

	roof = new Roof(400,100);

	bobObject1 = new Bob(100,300);
	rope1= new Rope(bobObject1.bob,roof.roof,-250,0)
	bobObject2 = new Bob(200,300);
	rope2= new Rope(bobObject2.bob,roof.roof,-150,0)
  bobObject3 = new Bob(300,300);
	rope3= new Rope(bobObject3.bob,roof.roof,-50,0)
	bobObject4 = new Bob(400,300);
	rope4= new Rope(bobObject4.bob,roof.roof,50,0)
	bobObject5 = new Bob(500,300);
	rope5= new Rope(bobObject5.bob,roof.roof,150,0)

	


  Engine.run(engine);
  Render.run(render);
  
}


function draw() {
  background(255);


  rectMode(CENTER);

  roof.display()

  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  stroke (0)
 
 

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.applyForce(bobObject1.bob, bobObject1.bob.position, {x:-175,y:305})
	}
	
	
	}

