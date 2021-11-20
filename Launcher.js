class Launcher{
    constructor(body, ancho){
        var options = {
            bodyA: body,
            pointB: ancho,
            stiffness: 0.004,
            length: 1
        }
        this.bodyA = body
        this.pointB = ancho
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

    attach(body){
 this.launcher.bodyA= body;

    }

    fly(){
        this.launcher.bodyA = null;
    }

    display(){
         if(this.stone.bodyA){
            var pointA = this.stone.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.launcher,pointA.x -30, pointA.y -10,15,30);
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.stone,pointA.x + 25, pointA.y -10,15,30);
            }
           
            
            pop();
        }
    }
    
}