leftwristxX=0;
rightwristX=0;
difference=0;


function setup(){
    video = createCapture(VIDEO);
    video.size(550,500); 

    canvas = createCanvas(550,500);
    canvas.position(550,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}
function gotPoses(results){
    if(results.length > 0){
    console.log(results);
    leftwristX = results[0].pose.leftWrist.x;
    rightwristX = results[0].pose.rightWrist.x;
    difference = floor(leftwristX-rightwristX);
    console.log("leftwristx = "+leftwristx+"rightwristx = "+rightwristx+"difference = "+difference);
    }
}

function draw(){
    background("black");
    document.getElementById("square_sides").innerHTML="Width and height of the text is = "+difference+"px";
    textSize(difference);
    fill('#FFE787');
    text('Chandrakant',50,400);
}