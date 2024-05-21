//The setup function only happens once
var salut=0;

function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  background(151,salut,255);
}

//The draw function happens over and over again
function draw() {
   //an RGB color for the canvas' background
  //circle
  stroke(255,25,127) // an RGB color for the circle's border
  strokeWeight(3);
  fill(mouseX,255,255,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(random(width),random(height),25,25); // center of canvas, 20px dia
  fill(255,255,0)
  strokeWeight(3);
  ellipse(mouseX,mouseY,50,50);
  fill(0,255,255);
  stroke(0,0,0);
  strokeWeight(3);
  textSize(salut);
  textFont('Garamond');
  text('Welcome',170,200);
  text('to',200,230);
  text('Party World',230,250);
  stroke(0,0,0);
  
}

function mousePressed(){

if (salut>=100){
  salut=0;
  }else{
  salut=salut+5;
}
}






