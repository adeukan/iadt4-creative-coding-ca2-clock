let clockRadius;

function setup() {
    createCanvas(500, 500);
    clockRadius = width / 2.5;
    angleMode(DEGREES);
    strokeCap(SQUARE);
}

function draw() {

    var minStroke = 2;
    var hourStroke = 5;

    translate(width / 2, height / 2);

    ellipse(0, 0, clockRadius * 2, clockRadius * 2);

    let x1 = cos(0) * clockRadius;
    let y2 = sin(0) * clockRadius;
    let x2 = x1 * 0.95;
    let y2 = y1 * 0.95;


    for (i = 0; i < 60; i++) {

        if (i % 5 == 0) strokeWeight(hourStroke);
        else            strokeWeight(minStroke);
        
        push();
        rotate(6 * i);
        line(x1, x2, y1, y2);
        pop();
    }

    let secX1 = cos(0) * clockRadius * .95;
    let secY1 = sin(0) * clockRadius * .95;
    let secX2 = cos(180) * clockRadius * .2;
    let secY2 = sin(180) * clockRadius * .2;

    let minX1 = // same as previous
    let minY1 = 
    let minX2 = 
    let minY2 = 

    let hourX1 = // same as previous
    let hourY1 = 
    let hourX2 = 
    let hourY2 = 


    push();
    rotate(second() * angle);
    line(secX1, secY1, secX2, secY2);
    pop();

    push();
    rotate(minute() * angle);
    line(minX1, minY1, minX2, minY2);
    pop();

    push();
    rotate(hour() * 5 * angle);
    line(hourX1, hourY1, hourX2, hourY2);
    pop();
}