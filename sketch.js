const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;
     
    g1 = new ground(500, 600, 1000, 20);
    box1 = new Box(900,300,70,70);
    b2 = new Box(600, 300, 70, 70);
    p1 = new pig(750, 250);
    l1 = new loge(750, 200, 400, 20, PI/1);
    box3 = new Box(900,170,70,70);
    b4 = new Box(600, 170, 70, 70);
    p2 = new pig(750, 170);
    l2 = new loge(750, 100, 400, 20, PI/1);
    b5 = new Box(800, 80, 70, 70);
    l3 = new loge(700, 50, 200, 20, -PI/7);
    l4 = new loge(800, 50, 200, 20, PI/7); 
    b1 = new bird(100, 300);

}

function draw(){
    background(0);
    Engine.update(engine);
    g1.display();
    box1.display();
    b2.display();
   p1.display();
   l1.display();
   box3.display();
    b4.display();
   p2.display();
   l2.display();
   b5.display(); 
   l3.display();
   l4.display();
   b1.display();
 

}