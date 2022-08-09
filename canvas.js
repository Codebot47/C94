canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

color = "red";

function square(){
    x = document.getElementById("X").value;
    y = document.getElementById("Y").value;
    size = document.getElementById("size");
    console.log(x);
    console.log(y);
    console.log("square");
    ctx.beginPath();
    ctx.strokeStyle = "color";
    ctx.lineWidth = 2;
    ctx.rect(x, y, 40, 40);
    ctx.stroke();
}

function rectangle(){
    x = document.getElementById("X").value;
    y = document.getElementById("Y").value;
    size = document.getElementById("size");
    console.log(x);
    console.log(y);
    console.log("rectangle");
    ctx.beginPath();
    ctx.strokeStyle = "color";
    ctx.lineWidth = 2;
    ctx.rect(x, y, 60, 40);
    ctx.stroke();
}

function triangle(){
    x = document.getElementById("X").value;
    y = document.getElementById("Y").value;
    size = document.getElementById("size");
    console.log(x);
    console.log(y);
    console.log("triangle");
    ctx.beginPath();
    ctx.strokeStyle = "color";
    ctx.lineWidth = 2;
    ctx.triangle(x, y, 40, 40, 40);
    ctx.stroke();
}

function circle(){
    x = document.getElementById("X").value;
    y = document.getElementById("Y").value;
    size = document.getElementById("size");
    console.log(x);
    console.log(y);
    console.log("circle");
    ctx.beginPath();
    ctx.strokeStyle = "color";
    ctx.lineWidth = 2;
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.stroke();  
}