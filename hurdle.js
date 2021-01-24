class Hurdle{
  
  constructor(){
    this.r = 60;
    this.x = width;
    this.y = height - this.r;    
  }
   
  move(){
    this.x -= 16 ;  
  }
  
  show(){
    image(hImg , this.x, this.y, this.r, this.r);
    } 
  
 
  
} 