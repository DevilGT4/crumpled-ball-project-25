class Paper 
{
    constructor(x,y,r)
	{
		var options = {
            isStatic: false,
           ' restitution':0, 
           'friction':0,
           ' density':1.2  }

this.body=Bodies.circle(x,y,(r-20)/2,options)
this.r=r
        World.add(world,this.body)
        this.image = loadImage("paper.png")
       
   

    }
   
   
    display(){

imageMode(CENTER);


image(this.image,this.body.position.x,this.body.position.y,this.r,this.r);
        







        
    }
		
		

	}
