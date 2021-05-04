img = '';
status = "";
object = [];
function preload(){
    img = loadImage("bears.jpg");
}
function setup(){
    canvas = createCanvas(700, 450);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', loaded);
    document.getElementById("status").innerHTML = "Status: Detecting Object";
}
function draw(){
    image(img, 0, 0, 700, 450);
    if(status != ""){
        for( i = 0; i < object.length; i++){
            document.getElementById("status").innerHTML = "Status: Object Detected";

            fill("red");
            x = object[i].x;
            y = object[i].y;
            w = object[i].width;
            h = object[i].height;
            percentage = Math.floor(object[i].confidence * 100);
             text(object[i].label + " " + percentage + "%", x+10, y+20);
             textStyle(BOLD);
             textSize(20);
             stroke("red");
             noFill();
             rect(x, y, w, h);
             
        }
    }
 }
function loaded(){
    console.log("Cocossd is loaded.");
    status = true;
    objectDetector.detect(img, gotObject);
}
function gotObject(error, results){
    if (error){
        console.log(error);
    }
    else{
        console.log(results);
        object = results;
    }
    
}
