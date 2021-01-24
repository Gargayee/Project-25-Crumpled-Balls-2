class Paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            friction:0.5,
            restitution:0.3,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=20;
        this.body=Bodies.circle(this.x,this.y,20,options);
       this.image=loadImage("paper.png");
        World.add(world,this.body);
        
    }

    display(){

        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
};