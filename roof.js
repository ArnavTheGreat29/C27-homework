class Roof{

    constructor(x,y){

    var options = {
      isStatic: true
    }
     
  
    this.roof= Bodies.rectangle(x,y,700,15,options)
    World .add(world,this.roof)
  }
  display(){
  
      //rectMode(CENTER)
      fill ("grey")
      rect(this.roof.position.x,this.roof.position.y,700,15)
  }
  }