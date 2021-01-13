class Bob {
    constructor(x, y) {
      var options = {

          isStatic: false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.bob = Bodies.circle(x, y, 50, options);
     
      
      
      World.add(world, this.bob);
      
    }
    display(){
      var pos =this.bob.position;
      rectMode(CENTER);
      
     
      circle(pos.x, pos.y,100);
      
      
      
    }
  };