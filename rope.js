class Rope{

    constructor(objectA , objectB, offsetX, offsetY){
    
    this.offsetX = offsetX
    this.offsetY = offsetY
        var options = {

         bodyA: objectA,
         bodyB: objectB,
         pointB: { x:this.offsetX, y:this.offsetY},

        }
       this.rope =  Matter.Constraint.create(options)
     
       World.add (world,this.rope)
    }
    display(){

        var posA = this.rope.bodyA.position
        var posB = this.rope.bodyB.position
        stroke (0)
        line (posB.x,posB.y,posA.x,posA.y)
     
    }
}