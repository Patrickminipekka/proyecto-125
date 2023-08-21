function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    Canvas=createCanvas(550,500);
    Canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function modelLoaded(){
  console.log("poseNet se inicializo");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        rightWristX=results[0].pose.rightWrist.x;
        leftWristX=results[0].pose.leftWrist.x;
        difference=leftWristX-rightWristX;
    }
}


function draw(){
    background("#E44A5A");
    textSize(difference);
    fill("purple");
    text("Patrick :D",30,100);
 
}
