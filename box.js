class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.2,
        'friction':1.0,
        'density':1.0,
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    
    push();
    rectMode(CENTER)
    //angleMode(RADIAN);
    translate( pos.x, pos.y);
    rotate(this.body.angle);
    fill(225);
    rect(0, 0,  this.width, this.height);
    pop();
  }
};