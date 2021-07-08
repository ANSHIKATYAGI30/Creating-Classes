const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball;
var groundWall;
var topWall, leftWall, rightWall;
var button1, button2;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  button1 = createImg("right.png");
  button1.position(200,100);
  button1.size(50,50);
  button1.mouseClicked(hForce);

  button2 = createImg("up.png");
  button2.position(100,100);
  button2.size(50,50);
  button2.mouseClicked(vForce);

  groundWall= new Ground(200,390, 400,20);
  topWall = new Ground(200, 10,400,20);
  leftWall = new Ground(10,200,20,400);
  rightWall= new Ground(390,200,20,400);

  var ball_options={
      restitution: 0.5,
      frictionAir: 0.01
  }
   ball= Bodies.circle(100,100,20,ball_options);
   World.add(world,ball);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  groundWall.display();
  topWall.display();
  leftWall.display();
  rightWall.display();
  ellipse(ball.position.x, ball.position.y, 20);
}

function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0}, {x:0.05,y:0});
}

function vForce(){
  Matter.Body.applyForce(ball, {x:0,y:0},{x:0,y:-0.05});
}