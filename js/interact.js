//Global Variables

let colOfLight = "yellow";
let colOfPower = "red";
let colOfAngle = "red";
let colOfRiLight = "rgb(255, 255, 255)";
let shade = false;
let powerUsage = '60 Watts';
let angOfExpo = '360 Degrees';
let explain = 0;

//Setup

function setup(){
    let canvas = createCanvas(1300,300);
    canvas.parent("drawings");
    angleMode(DEGREES);
    colorMode(RGB);
}

function windowResized(){
    resizeCanvas(windowWidth, 300);
}

//Draw

function draw(){
    background(0);
    drawLight();
    
    if(shade){
        drawShade();
    }
    
    if(shade === false){
        drawPowerUnshade();   
    }
    
    drawPowerAngle();

    if(explain === 0 && shade === true && colOfLight === "white"){
        drawText();   
    }
    
    drawRightLight();
    drawRightText();
    
}

//GEOMETRY

function drawLight(){
    fill(210);
    noStroke();
    rect(300, 100, 100, 25);
    fill(colOfLight);
    noStroke();
    rect(325,125,50,55);
    ellipse(350,185,75,75);
}

function drawShade(){
    noFill();
    stroke("gray");
    strokeWeight(5);
    quad(300, 125, 400, 125, 425, 225, 275, 225);
    line(310,125,285,225);
    line(330,125,305,225);
    line(350,125,325,225);
    line(370,125,345,225);
    line(390,125,365,225);
    line(405,152,385,225);
    line(413,175,400,225);
    line(418,200,413,225);
    stroke(colOfLight);
    strokeWeight(5);
    noFill();
    arc(350, 250, 160, 50, 360, 180, OPEN);
    arc(350, 260, 180, 50, 360, 180, OPEN);
}

function drawPowerUnshade(){
    stroke(colOfLight);
    strokeWeight(5);
    noFill();
    arc(350, 175, 200, 200, 340, 200, OPEN);
    arc(350, 190, 230, 208, 340, 200, OPEN);
}

function drawPowerAngle(){
    fill(210);
    noStroke();
    strokeWeight(1);
    textSize(20);
    text('Power Usage:', 50, 50);
    text('Angle of Exposure:', 50, 80);
    fill(colOfPower);
    noStroke();
    strokeWeight(1);
    textSize(20);
    text(powerUsage, 180, 50);
    fill(colOfAngle);
    noStroke();
    strokeWeight(1);
    textSize(20);
    text(angOfExpo, 225, 80);
}

function drawText(){
    fill(210);
    noStroke();
    textSize(15);
    text("  A shaded LED light is ideal because ", 20, 120);
    text("it's power efficient and doesn't cause, ", 20, 140);
    text("or at least highly minimizes, the main ",20, 160);
    text("components of light pollution being: ",20, 180);
    text("glare, light trespass, and skyglow.",20, 200);
}

function drawRightLight(){
    fill(210);
    noStroke();
    rect(800, 100, 100, 25);
    fill(colOfRiLight);
    noStroke();
    rect(825,125,50,55);
    ellipse(850,185,75,75);
    //Shade
    noFill();
    stroke("gray");
    strokeWeight(5);
    quad(800, 125, 900, 125, 925, 225, 775, 225);
    line(810,125,785,225);
    line(830,125,805,225);
    line(850,125,825,225);
    line(870,125,845,225);
    line(890,125,865,225);
    line(905,152,885,225);
    line(913,175,900,225);
    line(918,200,913,225);
    stroke(colOfRiLight);
    strokeWeight(5);
    noFill();
    arc(850, 250, 160, 50, 360, 180, OPEN);
    arc(850, 260, 180, 50, 360, 180, OPEN);
}

function drawRightText(){
    fill(210);
    noStroke();
    textSize(15);
    text('Our app allows the user to adjust', 950, 120);
    text('the temperature of their LED lightbulb to their', 950, 140);
    text('preference. Although, we highly recommend that ', 950, 160);
    text('users use higher temperatures, like amber, over ', 950, 180);
    text('lower temperatures, like blue, in order to avoid ', 950, 200);
    text('as much blue light as possible.', 950, 220);
    text('*Hint: Turn the red all the way up, the blue all', 950, 260);
    text('the way down, and only adjust the green.', 950, 280);
}

//BUTTONS

function drawShadeButton(){
    if(shade === false){
    shade = true;
    angOfExpo = 'Less than 90 Degrees'
    colOfAngle = 'green'
    }
}

function drawUnshadeButton(){
    if(shade === true){
    shade = false;
    angOfExpo = '360 Degrees';
    colOfAngle = 'red'
    }
}

function chngeLightCol(){
    if(colOfLight === "yellow"){
        
        colOfLight = "white";
        powerUsage = '15 Watts';
        colOfPower = "green";
        
    }else{
        
        colOfLight = "yellow";
        powerUsage = '60 Watts';
        colOfPower = "red"
        
    }
}

//ColorSliderStuff

var input = document.querySelectorAll("input");

for(var i = 0; i < input.length; i++){
    input[i].addEventListener("input", function(){
        var red = document.getElementById("red").value,
            green = document.getElementById("green").value,
            blue = document.getElementById("blue").value;
        
        colOfRiLight = "rgb(" + red + "," + green + "," + blue + ")";

    })
};