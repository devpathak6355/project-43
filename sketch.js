var hr,mn,sc;
var hrAngle,scAngle,mnAngle;

function setup() {
  createCanvas(800,500);
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);
  push();
  translate(400,200);
  rotate(-90);

  hr=hour();
  mn=minute();
  sc=second();


  scAngle=map(sc,0,60,0,360);
  mnAngle=map(mn,0,60,0,360);
  hrAngle=map(hr%12,0,12,0,360);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);
  stroke("lime");
  strokeWeight(7);
  line(0,0,80,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("blue") ;
  strokeWeight(7);
  line(0,0,60,0);
  pop();

  push();
  strokeWeight(10);
  noFill();
  stroke(255,0,0);
  arc(0,0,380,380,0,scAngle);
  pop();

  push();
  strokeWeight(10);
  noFill();
  stroke("lime");
  arc(0,0,360,360,0,mnAngle);
  pop();

  push();
  strokeWeight(10);
  noFill();
  stroke("blue");
  arc(0,0,340,340,0,hrAngle);
  pop();

  pop();
  fill(10);
  stroke(0);
  strokeWeight(1);
  text("1 2",395,50);

  fill(10);
  stroke(0);
  strokeWeight(1);
  text("1",470,70);

  fill(10);
  stroke(0);
  strokeWeight(1);
  text("2",530,120);

  fill(10);
  stroke(0);
  strokeWeight(1);
  text("3",545,200);

  fill(10);
  stroke(0);
  strokeWeight(1);
  text("4",525,290);

  fill(10);
  stroke(0);
  strokeWeight(1);
  text("5",470,335);

  fill(10);
  stroke(0);
  strokeWeight(1);
  text("6",395,355);

  fill(10);
  stroke(0);
  strokeWeight(1);
  text("7",330,340);

  
  strokeWeight(1);
  text("8",265,290);

  fill(10);
  stroke(0);
  strokeWeight(1);
  text("9",240,200);

   
  strokeWeight(1);
  text("1 0",260, 120);

  fill(10);
  stroke(0);
  strokeWeight(1);
  text("1 1",310,70);

  drawSprites();
} 