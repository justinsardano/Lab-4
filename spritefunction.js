function setup() {
  createCanvas(400, 400);
 
}

function draw() {
  background(220);
  
addSprite(0,50,1)
 if (mouseIsPressed) {
    fill("purple");
  } else if(mouseX<1000) {
    fill("red");}
}
function addSprite(x,y,size){
  translate(x,y)
  scale(size)
    noStroke()
  rect(100,100,125,200)
  ellipse(160,100,225)
  fill ("black")
  ellipse (120,120,40)
  ellipse (200,120,40)
  rect(125,200,10,100)
   rect(155,200,10,100)
   rect(185,200,10,100)
  
}
