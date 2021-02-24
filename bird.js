class bird {
    constructor(x, y ) {
      var options = {
          'restitution':0.2,
          'friction':1.0,
          'density':1.0,
      }
      this.body = Bodies.rectangle(x, y, 50, 50 ,options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX 
      pos.y = mouseY
      
      push();
      rectMode(CENTER)
      //angleMode(RADIAN);
      translate( pos.x, pos.y);
      rotate(this.body.angle);
      fill("red");
      rect(0, 0,  50, 50);
      pop();
    }
  };
  