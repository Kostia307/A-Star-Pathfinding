var cols = 5;
var rows = 5;
var grid = new Array(cols);

var openSet = [];
var closedSet = [];
var start;
var end;

function Spot(){
    this.f = 0;
    this.g = 0;
    this.h = 0;
}

function setup(){
    createCanvas(400, 400);
    console.log("A*");

    for(var i = 0; i < cols; i++){
        grid[i] = new Array(rows);
    }

    for(var i = 0; i < cols; i++){
        for(var j = 0; j < cols; i++){
            grid[i][j] = new Spot();
        }
    }

    start = grid[0][0];
    end = grid[cols - 1][rows - 1];

    openSet.push(start);
}

function draw(){
    
    if(openSet.length > 0){

    } else {

    }
    background(0);
}