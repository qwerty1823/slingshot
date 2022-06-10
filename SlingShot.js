class SlingShot{
    constructor(bodyA,pointB){
        var option = {
         bodyA : bodyA,
         pointB : pointB,
         stiffness : 0.01,
         length : 15
        }
        this.sling = Constraint.create(option)
        World.add(world,this.sling)
        this.pointB=pointB
    }
    display(){
        if (this.sling.bodyA){
        var pointA = this.sling.bodyA.position
        var pointB = this.pointB 
        strokeWeight(4)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
    }
    fly(){
        this.sling.bodyA = null 
    }
}