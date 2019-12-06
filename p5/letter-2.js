let canvas;
let colors;
function setup() {
  var canvas = createCanvas(500,700);
  canvas.parent('p5-sketch-holder');
  colorMode(HSL);

  //noStroke();

  background(38,100,50);
  colors =
    [color(0,0,50),color(0,0,10),
     color(0,0,0),color(0,0,20)]
    // [color(205,76,40),color(205,76,30),
    //  color(205,76,20),color(205,76,10)]
    // [color(25,76,31),color(205,76,31),color(21,41,25),
    // color(58,100,20)]
  //let i = 50;//increment

  let y = 200;
  drawRect(0,y,width-y,height-y);


}

function drawRect(x,y,w,h){
  noStroke();
  //stroke(255);
  //strokeWeight(2);
  fill(random(colors));
  rect(x,y,w,h);
  if(x<500 && y<550 && w>200 && h>100){
  //drawRect(x+30,y+50,w-70,h-70);
  drawRect(x-random(10,15),y+random(50,60),w-30,h-50);
}

  fill(255);
  //ellipseMode(CORNER);s
  let r = 15;
  ellipse(r+10,700-r-10,r*2,r*2);

}
