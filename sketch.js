
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4,
bobObject5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

var bobDiametr = 40;
function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
  
	bobObject1 = new Bob(200,400,20);
		// create 4 more bob objects at same y position but different x position say 240,
		//280,320....

	
	roof = new Ground(360,200,350,20);

	rope1 = new Rope(bobObject1.body,roof.body,-bobDiametr*2,10);
	//create 4 more rope objects and 3rd parameter will be different like
	// -bobDiametr, 0, -bobDiametr,-bobDiametr*2

}


function draw() {
	Engine.update(engine);

  rectMode(CENTER);
  background("yellow");
  bobObject1.display();
  // display all bobObjects below

  rope1.display();
  //display all rope objects below

  roof.display();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW ){
		// Use Matter.Body.applyForce for bobObject1 woth a negative x and y force,,
		// refer to crumpled balls project as hint
	}
}
