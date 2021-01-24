class Unicorn{
  constructor(){
    this.r = 120; 
    this.x = 0;
    this.y = height - 50;
    this.vy = 0 ; 
    this.gravity = 2  ;
     
  }
  show(){
    image(uImg,this.x, this.y , this.r , this.r );
     
  }
  
  jump(){ 
    //if (this.y == height - this.r ){
    this.vy = -25; 
    //}
  }
  
  hits(hurdle){
    return collideRectRect(this.x, this.y, this.r, this.r, hurdle.x, hurdle.y, hurdle.r, hurdle.r);

  }
  
  move(){
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y , 0 , height - this.r )
  
  }
   
 }