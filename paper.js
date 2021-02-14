class Paper{
    constructor (x,y,width,height){
        var options = {
            isStatic:false,
            'restitution':0.3,
            'density':1.2,
            'friction':0.5

        }

        this.Image = loadImage("paper.png")
        this.body = Bodies.rectangle(x,y,width,height,options) 
        this.width = width;
        this.height = height;
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;        
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        image(this.Image,150,-75,100,100);
        pop();
    }
}