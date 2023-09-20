// Initialize helper functions
function createButtonDiv() {
    buttonDiv = createDiv();
    buttonDiv.addClass('button-div');
    buttonDiv.size(0.8 * width, 75);
    buttonDiv.position(width*0.5, height - 100);
    buttonDiv.center('horizontal');
    
}
function createAButton() {
    startButton = createButton('A');    
    startButton.mousePressed(changeBG);
    startButton.parent(buttonDiv);
    startButton.size(100, 75);
    startButton.style('font-size', '20px');
}
function createBButton() {
    startButton = createButton('B');    
    startButton.mousePressed(changeBG);
    startButton.parent(buttonDiv);
    startButton.size(100, 75);
    startButton.style('font-size', '20px');
}



//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// Main entry point
function setup() {
    canvas1 = createCanvas(windowWidth * 0.95, windowHeight * 0.95);
    createButtonDiv();
    createAButton();
    createBButton()
}


function draw() {

}





//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// Game related function
function changeBG() {
    let val = randomRGBA();
    background(val[0],val[1],val[2],val[3]);
}

function randomRGBA() {
    var o = Math.round, r = Math.random, s = 255;
    return [o(r()*s) , o(r()*s) , o(r()*s) , r().toFixed(1) ];
}




// Responsive
function windowResized() {
    canvas1 = resizeCanvas(windowWidth * 0.95, windowHeight * 0.95);

    buttonDiv.size(0.8 * width, 75);
    buttonDiv.position(width*0.5, height - 100);
    buttonDiv.center('horizontal');
    
}
