function setup(){
  createCanvas(800,800)
  b1 = createButton("Start")
  b1.position(250, 150)
  b1.mouseClicked(function(){
    alert("Click")   
  }
  )
  element = createElement("h6","Welcome to Coding")
  element.position(200, 30)
}
function draw(){
  if(keyIsDown(UP_ARROW)){
    background("purple")
  }
  if(keyIsDown(RIGHT_ARROW)){
    background("orange")
  }
  if(keyIsDown(DOWN_ARROW)){
    background("blue")
  }
  if(keyIsDown(LEFT_ARROW)){
    background("yellow")
  }
  fill("red")
  rect(200, 200, 50, 100)
  fill("green")
  ellipse(100, 100, 80)
}