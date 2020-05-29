const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var boxes,sling;
function preload(){

}
function setup(){
    var canvas = createCanvas(1400,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);

    slingshot=new Slingshot(bird.body,{x:200,y:100});
}
function draw(){
    background(0);
    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    slingshot.display();

    function mouseDragged(){
        Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
    }
    function mouseReleased(){
    slingshot.fly();    
    }
}

