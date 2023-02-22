function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  myTriangle(50,50,50,50,50,50)
  myCircle()
  myRect()
}
function myTriangle(x1,y1,x2,y2,x3,y3){
triangle (20,40,60,4,50,100)

}
function myCircle(x,y,diameter){
ellipse(100,100,100)

}
function myRect(x,y,rectWidth,rectHeight){
  rect(200,200,50,300)
  
}
