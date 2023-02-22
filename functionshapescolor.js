function setup(hsla) {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  myTriangle(50,50,50,50,50,50,('hsla(180, 100%, 50%, 0.5)'))
  myCircle(0,0,0,('hsla(50,100%,50%,0.5)'))
 myArc(0,0,0,0,0,0,('hsla(270,200%,40%,0.5)'))
}
function myTriangle(x1,y1,x2,y2,x3,y3,myColor){
fill(myColor)
  triangle (20,40,60,4,50,100)

}
function myCircle(x,y,diameter,myColor){
  fill(myColor)
  ellipse(100,100,100)

}
function myArc(x,y,x2,y2,x3,y3,myColor){
 fill(myColor)
  arc(300,300,100,100,100,10)
}
