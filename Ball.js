 class Ball {
     constructor(x, y, r) 
     {
       let options = {
        isStatic:false,
        restiution:0.3,
        friction:0,
        density:1.2
       }
       
       this.body = Bodies.circle(x, y, r, options);
       this.r = r;
       World.add(world, this.body);
     }

     show() {
       let pos = this.body.position;
   
       push();
       ellipseMode(CENTER);
       stroke(255);
       fill(127);
       ellipse(pos.x, pos.y, this.r);
       pop();
 }
}