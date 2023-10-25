status="";

function preload(){

}
function setup(){
    canvas = createCanvas(480,390);
    video =createCapture(VIDEO);
    canvas.center();
    video.hide();
}
function draw(){
    image(video,0,0,480,390);
}
function start(){
objectDetector = ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML ="STATUS : FLYING PYROS!!!";
}
function modelLoaded(){
    console.log("Guuvh Jovh");
    status=true;
}