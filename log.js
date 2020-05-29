class Log extends BaseClass{
    constructor(x,y,height,angle){
     var boxes=  createSprite(100,100,50,50);
      super(x,y,20,height,angle);
    
      Matter.Body.setAngle(this.body, angle);
    }
  }