function preload(){
}

function setup(){
    canvas=createCanvas(480,480);
    canvas.center();
    webcam=createCapture(VIDEO);
    webcam.size(480,480)
    webcam.hide()
}

function draw(){
    image(webcam, 0, 0, 480, 480)
    stroke("turquoise")
    noFill()
    strokeWeight(100)
    circle(240, 240, 577)
}

function take_snapshot(){
    save("framing_fun.png")
}