var clockRadius;
var angle = 6;
let hourHandStartWidth = 20;
let hourHandTaper = 6;
let minHandStartWidth = 20;
let minHandTaper = 6;

function setup() {
    createCanvas(500, 500);
    clockRadius = width / 2.5;
    angleMode(DEGREES);
    strokeCap(SQUARE);
}

function draw() {

    let minStroke = 2;
    let hourStroke = 5;

    clear();
    fill(0);
    stroke(0);
    translate(width/2, height/2);

    // ellipse(0, 0, clockRadius * 2, clockRadius * 2);

    let x1 = cos(0) * clockRadius;
    let y1 = sin(0) * clockRadius;
    let x2 = x1 * 0.95;
    let y2 = y1 * 0.95;

    for (let i = 0; i < 60; i++) {

        if (i % 5 == 0) strokeWeight(hourStroke);
        else            strokeWeight(minStroke);
        
        push();
        rotate(angle * i);
        line(x1, y1, x2, y2);
        pop();
    }

    // digits (optional)
    for (let i = -3; i < 9; i++) {

        let x = cos(angle * i * 5) * clockRadius * 1.15;
        let y = sin(angle * i * 5) * clockRadius * 1.15;

        strokeWeight(width / 250);
        textAlign(CENTER);
        textSize(width / 16);

        let digit;
        if(i == -3) digit = 12;
        else digit = i + 3; 

        text(digit, x, y + width / 50);
        strokeWeight(width / 100);
    }


    let secX1 = cos(0) * clockRadius * .9;
    let secY1 = sin(0) * clockRadius * .9;
    let secX2 = cos(180) * clockRadius * .2;
    let secY2 = sin(180) * clockRadius * .2;

    let minX1 = cos(0) * clockRadius * .9;
    let minY1 = sin(0) * clockRadius * .9;
    let minX2 = cos(180) * clockRadius * .2;
    let minY2 = sin(180) * clockRadius * .2;

    let hourX1 = cos(0) * clockRadius * .7;
    let hourY1 = sin(0) * clockRadius * .7;
    let hourX2 = cos(180) * clockRadius * .2;
    let hourY2 = sin(180) * clockRadius * .2;


    push();
    rotate((hour() - 3) * 5 * angle);
    // strokeWeight(14);
    // line(hourX1, hourY1, hourX2, hourY2);
    beginShape();
    vertex(hourX1, hourY1 - (hourHandStartWidth - hourHandTaper) / 2);
    vertex(hourX1, hourY1 + (hourHandStartWidth - hourHandTaper) / 2);
    vertex(hourX2, hourY2 + hourHandStartWidth/2);
    vertex(hourX2, hourY2 - hourHandStartWidth/2);
    endShape();
    pop();


    push();
    rotate((minute() - 15) * angle);
    // strokeWeight(10);
    // line(minX1, minY1, minX2, minY2);
    beginShape();
    vertex(minX1, minY1 - (minHandStartWidth -  minHandTaper) / 2);
    vertex(minX1, minY1 + (minHandStartWidth -  minHandTaper) / 2);
    vertex(minX2, minY2 +  minHandStartWidth/2);
    vertex(minX2, minY2 -  minHandStartWidth/2);
    endShape();
    pop();


    push();
    rotate((second() - 15) * angle);
    strokeWeight(3);
    stroke("red");
    fill("red");
    line(secX1, secY1, secX2, secY2);
    ellipse(0, 0, 15, 15);
    ellipse(secX1 * .8, secY1 * .8, 8, 8);
    pop();
}