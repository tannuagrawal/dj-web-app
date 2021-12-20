leftwristx=""
leftwristy=""
rightwristx=""
rightwristy=""
song=""
function preload(){
song=loadSound("music.mp3")
}
function draw(){
image(video,0,0,500,500)
fill("red")
circle(leftwristx,leftwristy,20)
circle(rightwristx,rightwristy,20)
convertleftwristy=Number(leftwristy)
removedecimal=floor(convertleftwristy)
volume=removedecimal/500
document.getElementById("volume").innerHTML=volume
song.setVolume(volume)
if(rightwristy>0 && rightwristy<=100){
    song.rate(0.5)
    document.getElementById("speed").innerHTML="0.5x"
}
if(rightwristy>100 && rightwristy<=200){
    song.rate(1)
    document.getElementById("speed").innerHTML="1x"
}
if(rightwristy>200 && rightwristy<=300){
    song.rate(1.5)
    document.getElementById("speed").innerHTML="1.5x"
}
if(rightwristy>300 && rightwristy<=400){
    song.rate(2)
    document.getElementById("speed").innerHTML="2x"
}
if(rightwristy>400 && rightwristy<=500){
    song.rate(2.5)
    document.getElementById("speed").innerHTML="2.5x"   
}
}
function setup(){
    canvas=createCanvas(500,500)
    canvas.position(340,150)
    video=createCapture(VIDEO)
    video.hide()
    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on('pose',gotPoses)
}
function play_button(){
 song.play()
 song.setVolume(1)
 song.rate(1)
}
function modelLoaded(){
    console.log("I made it work")
}
function gotPoses(result){
    if(result.length>0){
    console.log(result)
   leftwristx=result[0].pose.leftWrist.x
   leftwristy=result[0].pose.leftWrist.y
   rightwristx=result[0].pose.rightWrist.x
   rightwristy=result[0].pose.rightWrist.y
    }   
}

