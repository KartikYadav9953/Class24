class ground {

constructor(x, y, w, h) {

var op = {
 
    isStatic : true

}




this.body = Bodies.rectangle(x, y, w, h, op)
World.add(world, this.body);
this.width = w
this.heigth = h

}


display(){
    var pos =this.body.position;
    rectMode(CENTER);
    push();
    fill("brown");
    rect(pos.x, pos.y, this.width, this.heigth);
    pop();
  }





}