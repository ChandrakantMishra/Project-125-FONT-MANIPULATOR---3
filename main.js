leftwristx=0;
rightwristx=0;
difference=0;


function setup(){
    video = createCapture(VIDEO);
    video.size(550,500); 

    canvas = createCanvas(550,500);
    canvas.position(550,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",GotPoses);
}

function draw(){
    background("black");
    document.getElementById("square_sides").innerHTML="Width and height of the text is = "+difference+"px";
    textSize(difference);
    fill('#FFE787');
    text('Peter',50,400);
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}
function GotPoses(results){
    if(results.length > 0){
    console.log(results);
    leftwristx = results[0].pose.leftWrist.x;
    rightwristx = results[0].pose.rightWrist.x;
    difference= floor(leftwristx-rightwristx);
    console.log("leftwristx = "+leftwristx+"rightwristx = "+rightwristx+"difference = "+difference);
    }
}