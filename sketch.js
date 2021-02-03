//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;

function setup() {
  myEngine = Engine.create();
  myWorld = myEngine.world;
  createCanvas(400,400);

 box1 = new Box(200,100,50,100);
 box2 = new Box(210,10,50,50);
 ground =new Ground(200,390,400,20);
}

function draw() {
Engine.update(myEngine);

  background(255,255,255);  
 box1.display();
 box2.display();
 ground.display();
}