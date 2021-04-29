img = '';
status = "";
function preload(){
    img = loadImage("dog.jpg");
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', loaded);
    document.getElementById("status").innerHTML = "Status: Detecting Object";
}
function draw(){
    image(img, 0, 0, 640, 420);
    fill('red');
    textSize(20);
    textStyle(BOLD);
    text("Dog", 10+20, 70+20);
    noFill();
    stroke('red');
    rect(10, 70, 250, 300);
    //cat
    fill("red");
    text("Cat", 330, 120);
    noFill();
    stroke("red");
    rect(310, 100, 300, 250);
 }
function loaded(){
    console.log("Cocossd is loaded.");
    status = true;
    objectDetector.detect(img, gotObject);
}
function gotObject(results, error){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}
