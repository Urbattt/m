nose_x=0;
nose_y=0;
function preload(){
clown_nose= loadImage('https://i.postimg.cc/HLkcNzKt/m.png');

}

function setup() {
canvas=createCanvas(400,400);
canvas.center();
video=createCapture(VIDEO);
video.size(400,400);
video.hide();
poseNet=ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotposes);

}

function gotposes(results){
if(results.length>0){
console.log(results);
nose_x=results[0].pose.nose.x;
nose_y=results[0].pose.nose.y;
console.log("nose x= "+nose_x);
console.log("nose y="+nose_y);

}
}

function modelloaded(){
console.log("poseNet working");

}

function draw(){
image(video,0,0,400,400);
image(clown_nose,nose_x-30,nose_y,70,30);
}

function takesnapshot(){
save("clown_nose_image.jpg");

}

