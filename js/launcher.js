class launcher{
constructor(body,point){
  var options= {
      bodyA: body, 
      pointB: point,
      stiffness:0.004,
      length:4
  }  
  this.pointB = point
  this.bodyA= body;
  this.launcher = Constraint.create(options);
  World.add(world, this.launcher);
}
fly(){
    this.launcher.bodyA = null;
}
attach(body){
    this.launcher.bodyA= body;
}
display(){
    if(this.launcher.bodyA){
       
        var pointA = this.launcher.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(4);
        stroke(48,22,8);
        line(pointA.x, pointA.y, pointB.x, pointB.y); 
     
      
        pop(); 
    }
}

}
