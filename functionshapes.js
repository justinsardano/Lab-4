function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  myTriangle(50,50,50,50,50,50)
  myCircle(0,0,0)
 myArc(0,0,0,0,0,0,)
}
function myTriangle(x1,y1,x2,y2,x3,y3){
  triangle (20,40,60,4,50,100)

}
function myCircle(x,y,diameter){
  ellipse(100,100,100)

}
function myArc(x,y,x2,y2,x3,y3){
  arc(300,300,100,100,100,10)
}
