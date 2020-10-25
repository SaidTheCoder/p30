class Blocks {
    constructor(x, y) {
      var options = {
          'restitution':0.1,
          'friction':0.3,
          'density':0.01
      }
      this.body = Bodies.rectangle(x, y,50,50, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
      this.visibility=255;
    }
    display(){
      //console.log(this.body.speed);
      if(this.body.speed<4){

      
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
      
    }
    else{
      World.remove(world,this.body)
      push()
      this.visibility=this.visibility-5;
      pop()
    }
  }
  };
  