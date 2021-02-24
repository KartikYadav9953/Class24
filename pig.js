class pig {
    constructor(x, y) {
      var options = {
          'restitution':0.2,
          'friction':0.3,
          'density':1.0,
      }
      this.body = Bodies.rectangle(x, y,50, 50 , options);
      //this.width = width;
      //this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      push();
      rectMode(CENTER)
      //angleMode(RADIAN);
      translate( pos.x, pos.y);
      rotate(this.body.angle);
      fill("green");
      rect(0, 0,  50, 50);
      pop();
    }
  };
  