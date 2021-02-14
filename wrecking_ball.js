class wrecking_ball{
    constructor(x,y){
    var options = {density:1,frictionAir:0.006}
    this.body = Bodies.circle(x,y,50,options);
    World.add(world,this.body);
    }
    display(){
       var pos =this.body.position;
       push();
       translate(pos.x, pos.y);;
       fill("blue");
       ellipse(0,0,50,50);
       pop();
   }
   }