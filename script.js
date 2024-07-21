var cols = 5;
var rows = 5;
var grid = new Array(cols);

var openSet = [];
var closedSet = [];
var start;
var end;
var w,h;

function Spot(i,j){
    this.x = i;
    this.y = j;
    this.f = 0;
    this.g = 0;
    this.h = 0;

    this.show = function(){
        fill(255);
        stroke(0);
        rect(this.x * w, this.y * h, w, h);
    }
}

function setup(){
    createCanvas(400, 400);
    w = width / cols;
    h = height / rows;
    console.log("A*");

    for(var i = 0; i < cols; i++){
        grid[i] = new Array(rows);
    }

    for(var i = 0; i < cols; i++){
        for(var j = 0; j < cols; i++){
            grid[i][j] = new Spot(i,j);
        }
    }

    start = grid[0][0];
    end = grid[cols - 1][rows - 1];

    openSet.push(start);
}

function draw(){
    
    if(openSet.length > 0){
        //keep going
    } else {
        //no solution
    }
    background(0);

    for(var i = 0; i < cols; i++){
        for(var j = 0; i < cols; j++){
            grid[i][j].show();
        }
    }
}