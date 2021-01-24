let unicorn;
let uImg;
let hImg ;
let bImg; 
let hurdles = []; 
 
function preload(){
  uImg = loadImage('unicorn.png');
  hImg = loadImage('hurdle.png.png');
  bImg = loadImage ('background2.jpg');
}

function setup() {
  createCanvas(800, 450);
  unicorn = new Unicorn();
}

function draw() {
  if (random(1) < 0.01){
      hurdles.push(new Hurdle());
    }
  
  background(bImg);
  unicorn.show(); 
  unicorn.move();
  
  for (let t of hurdles){
      t.move();
      t.show();
    if (unicorn.hits(t)){
      console.log('game over');
      noLoop();
    }
  }
  
}
 function keyPressed(){
  if ( key == ' '){
      unicorn.jump();
      unicorn.move();
  }
     
     
 }
  
