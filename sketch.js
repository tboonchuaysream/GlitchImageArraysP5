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
var img

var startMillis;
var randomWidth;
var randomHeight;
var shape;

var state;		// variable we change
var stateOne = 1;
var stateTwo = 2;

// preload() will execture before setup()
function preload() {
  imageList[0] = loadImage('assets/image1.jpg');			
  imageList[1] = loadImage('assets/image2.jpg');
  imageList[2] = loadImage('assets/image3.jpg');
  imageList[3] = loadImage('assets/image4.jpg');
  imageList[4] = loadImage('assets/image5.jpg');
  imageList[5] = loadImage('assets/image6.jpg');
}

function setup() {
  print("imageSequenceP5 Example");

	imageMode(CENTER);

  chooseNewImage();
  
	createCanvas(1024, 800);

  startMillis = millis();
}

function draw() {

	background(0);

  // When timer expires, after 1000ms, choose a new random image
  if( millis() > startMillis + 1000 ) {	
    // Displays the image at center point
    //image(img, width/2, height/2, random(mouseX), random(mouseY));
    chooseNewImage();
    startMillis = millis();

    //random width and height to be used later
    randomWidth = random(1024);
	randomHeight = random(800);

	//reset the key to nothing
	key = "";

 }

 //the image will go directly to the assigned image if you press any keys from 1 to 6
 //each image is bind to a different key
 if(key == "1"){
 	state = state
 	img = imageList[0];
 	image(img, width/2, height/2);
 } else if (key == "2"){
 	img = imageList[1];
 	image(img, width/2, height/2);
 } else if (key == "3"){
 	img = imageList[2];
 	image(img, width/2, height/2);
 } else if (key == "4"){
 	img = imageList[3];
 	image(img, width/2, height/2);
 } else if (key == "5"){
 	img = imageList[4];
 	image(img, width/2, height/2);
 } else if (key == "6"){
 	img = imageList[5];
 	image(img, width/2, height/2);
 }

  // draw the image
  image(img, width/2, height/2);

  //the different states for each condition, there will be different mouse pressed outcomes and random shapes
  //depending on which image is currently being displayed
  if(img == imageList[0]){
 		imageOne();
 	} else if (img == imageList[1]){
 		imageTwo();
 	} else if (img == imageList[2]){
 		imageThree();
 	} else if (img == imageList[3]){
 		imageFour();
 	} else if (img == imageList[4]){
 		imageFive();
 	} else if (img == imageList[5]){
 		imageSix();
 	}

}

// chooses a new items from the array, select a random
// index 0 to length of array-1
function chooseNewImage() {
  img = random(imageList);
  print(img);
}

function imageOne(){

	//random ellipse on the screen
	fill(224, 52, 250);
	ellipse(randomWidth, randomHeight, 500, 300);

	//shows rainbow rectangle on screen when mouse is pressed
	if(mouseIsPressed){
		fill(random(255), random(255), random(255));
		rect(mouseX-20,mouseY-20,100,100);
	}

}

function imageTwo(){

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

function imageThree(){

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

function imageFour(){

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

function imageFive(){

	//shows Ultra Music on the screen when Ultra Music is pressed
	if(mouseIsPressed){
		fill(231,76,60);
		textSize(50);
		text('Ultra Music', mouseX, mouseY);
	}

}

function imageSix(){

	//shows random rectangle on screen when mouse is pressed
	if(mouseIsPressed){
		fill(230,126,34);
		rect(mouseX,mouseY,500,300);
	}

}
