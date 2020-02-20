/*
@author Tommy Boonchuaysream
This application displays a slideshow of 6 different images
Each slideshow displays a random shape being produced
You can press the mouse to see another output
Press key 1 to 6 to get the different images
*/

var regularImg; // Declare variable 'img'.
var inverseImg;
var bRegular = true;
var imageList = [];

var startMillis;
var randomWidth;
var randomHeight;
var shape;

var state;		// variable we change
var stateBurningMan = 1;
var stateEdc = 2;
var stateOutsideLands = 3;
var stateTomorrowland = 4;
var stateUltraMusic = 5;
var stateCoachella = 6;
var stateList = [1,2,3,4,5,6];

// preload() will execture before setup()
function preload() {
  imageList[0] = loadImage('assets/image1.jpg');	// stateOne		
  imageList[1] = loadImage('assets/image2.jpg');	// stateTwo
  imageList[2] = loadImage('assets/image3.jpg');	// stateThree
  imageList[3] = loadImage('assets/image4.jpg');	// stateFour
  imageList[4] = loadImage('assets/image5.jpg');	// stateFive
  imageList[5] = loadImage('assets/image6.jpg');	// stateSix
}

function setup() {
  print("imageSequenceP5 Example");

	imageMode(CENTER);

  chooseNewState();
  
	createCanvas(1024, 800);

  startMillis = millis();
}

function draw() {
	background(0);

  	// When timer expires, after 1000ms, choose a new random image
  	if( millis() > startMillis + 1000 ) {	
   	 chooseNewState();
    	startMillis = millis();

    	//random width and height to be used later
    	randomWidth = random(1024);
		randomHeight = random(800);
 	}


  //the different states for each condition, there will be different mouse pressed outcomes and random shapes
  //depending on which image is currently being displayed
  	if(state == stateBurningMan){
 		drawBurningMan();
	}
 	else if (state == stateEdc){
 		drawEdc();
 	} else if (state == stateOutsideLands){
 		drawOutsideLands();
 	} else if (state == stateTomorrowland){
 		drawTomorrowland();
 	} else if (state == stateUltraMusic){
 		drawUltraMusic();
 	} else if (state == stateCoachella){
 		drawCoachella();
 	}
}

// chooses a new items from the array, select a random
// index 0 to length of array-1
function chooseNewState() {
  state = random(stateList);
}

function drawBurningMan(){
	// draw our 1st image from array
	image(imageList[0], width/2, height/2);

	//random ellipse on the screen
	fill(224, 52, 250);
	ellipse(randomWidth, randomHeight, 500, 300);

	//shows rainbow rectangle on screen when mouse is pressed
	if(mouseIsPressed){
		fill(random(255), random(255), random(255));
		rect(mouseX-20,mouseY-20,100,100);
	}

}

function drawEdc(){
	// draw 2nd image from array
	image(imageList[1], width/2, height/2);

	//random rainbow rectangle on the screen
	fill(random(255), random(255), random(255));
	rect(randomWidth, randomHeight, 500, 300);
	
	//shows EDC on the screen when mouse is pressed
	if(mouseIsPressed){
		fill(224, 52, 250);
		textSize(32);
		text('EDC', mouseX, mouseY);
	}

}

function drawOutsideLands(){
	// draw 3rd image from array
	image(imageList[2], width/2, height/2);

	//random rainbow ellipse on the screen
	fill(random(255), random(255), random(255));
	ellipse(randomWidth, randomHeight, 200, 200);

	//shows Outside Lands on screen when mouse is pressed
	if(mouseIsPressed){
		fill(241,196,15);
		textSize(40);
		text('Outside Lands', mouseX, mouseY);
	}

}

function drawTomorrowland(){
	// draw 4th image from array
	image(imageList[3], width/2, height/2);

	//random rainbow ellipse on the screen
	fill(random(255), random(255), random(255));
	ellipse(randomWidth, randomHeight, 400, 100);

	//shows Tomorrowland on the screen when mouse is pressed
	if(mouseIsPressed){
		fill(46,204,113);
		textSize(45);
		text('Tomorrowland', mouseX, mouseY);
	}

}

function drawUltraMusic(){
	// draw 5th image from array
	image(imageList[4], width/2, height/2);

	//shows Ultra Music on the screen when Ultra Music is pressed
	if(mouseIsPressed){
		fill(231,76,60);
		textSize(50);
		text('Ultra Music', mouseX, mouseY);
	}

}

function drawCoachella(){
	// draw 6th image from array
	image(imageList[5], width/2, height/2);

	//shows random rectangle on screen when mouse is pressed
	if(mouseIsPressed){
		fill(230,126,34);
		rect(mouseX,mouseY,500,300);
	}

}

//--- INTERFACE ----
function keyPressed() {
 if(key == "1"){
 	state = stateBurningMan;
 }else if (key == "2"){
 	state = stateEdc;
 } else if (key == "3"){
 	state = stateOutsideLands;
 } else if (key == "4"){
 	state = stateTomorrowland;
 } else if (key == "5"){
 	state = stateUltraMusic;
 } else if (key == "6"){
 	state = stateCoachella;
 }
}
