// JavaScript source code
class square {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    get sx() {
        return this.x;
    }
    get sy() {
        return this.y;
    }
    get swidth() {
        return this.width;
    }
    get sheight() {
        return this.height;
    }
    get scolor() {
        return this.color;
    }

    set sx(x) {
        this.x = x;
    }
    set sy(y) {
        this.y = y;
    }
    set swidth(width) {
        this.width = width;
    }
    set sheight(height) {
        this.height = height;
    }
    set scolor(color) {
        this.color = color;
    }
}
function drawAutoSquare(x, y, width, height, color) {
    ctx.fillStyle = '#fa4b2a';;
    ctx.fillRect(x, y, width, height,);
}
function drawUserSquare(x, y, width, height) {
    ctx.fillRect(x, y, width, height);
}
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var size = 20;
let colors = ["white", "yellow", "aqua"];
let num = 0;
var audio = new Audio('warmLight.mp3');
audio.play();
obj1 = new square(50, 50, 20, 20);
obj2 = new square(300, 100, 20, 20);
drawAutoSquare(obj1.sx, obj1.sy, obj1.swidth, obj1.sheight, "blue");
drawUserSquare(obj2.sx, obj2.sy, obj2.swidth, obj2.sheight, "#00000");
let check = true;
let decrementX = false;
let decrementY = false;

setInterval(update, 1000 / 60);

$(document).ready(function () {
    $(this).keypress(function (event) {
        getKey(event);
    });
});

function getKey(event) {
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if (actualLetter == "w") {
        ctx.clearRect(obj2.sx, obj2.sy, size, size);
        moveUp();
    }
    else if (actualLetter == "s") {
        ctx.clearRect(obj2.sx, obj2.sy, size, size);
        moveDown();
    }
    else if (actualLetter == "d") {
        ctx.clearRect(obj2.sx, obj2.sy, size, size);
        moveRight();
    }
    else if (actualLetter == "a") {
        ctx.clearRect(obj2.sx, obj2.sy, size, size);
        moveLeft();
    }

    drawUserSquare(obj2.sx, obj2.sy, size, size);
}

function moveUp() {
    if (obj2.sy == 0) {
        window.alert("oops can't travel outside of canvas");
    }
    else
        obj2.sy -= 10;
}
function moveDown() {
    let num = 600 - size;
    if (obj2.sy == num) {
        window.alert("oops can't travel outside of canvas");
    }
    else
        obj2.sy += 10;
}
function moveLeft() {
    if (obj2.sx == 0) {
        window.alert("oops can't travel outside of canvas");

    }
    else
        obj2.sx -= 10;
}
function moveRight() {
    if (obj2.sx == 800-size) {
        window.alert("oops can't travel outside of canvas");

    }
    else
        obj2.sx += 10;
}

function update() {
    if (hasCollided(obj1, obj2)) {
        if (num === 2) {
            num = 0;
        }
        else
            num += 1;
        ctx.clearRect(0, 0, 800, 600);
        size += 10
        if (decrementX)
            obj1.sx -= size;
        else
            obj1.sx += size;
        if (decrementY)
            obj1.sy -= size;
        else
            obj1.sy += size;
        document.getElementById("myCanvas").style.background = colors[num];
        drawUserSquare(obj2.sx, obj2.sy, size, size);
        console.log("COLLISION");
        console.log(num);
    }
    ctx.clearRect(obj1.sx, obj1.sy, 20, 20);
    if (check) {
        obj1.sx += 1;
        obj1.sy += 1;
    }
    else {
        if (decrementX) {
            obj1.sx -= 1;
        }
        else {
            obj1.sx += 1;
        }
        if (decrementY) {
            obj1.sy -= 1;
        }
        else {
            obj1.sy += 1;
        }
       
    }
    if (obj1.sx == 780) {
        check = false;
        decrementX = true;
        obj1.sx -= 10;
    }
    else if (obj1.sx == 0) {
        check = false;
        decrementX = false;
        obj1.sx += 10;
    }
    else if (obj1.sy == 580) {
        check = false;
        decrementY = true;
        obj1.sy -= 10;
    }
    else if (obj1.sy == 0) {
        check = false;
        decrementY = false;
        obj1.sy += 10;
    }
    drawAutoSquare(obj1.sx, obj1.sy, 20, 20);
}

function hasCollided(object1, object2) {
    return !(
        ((object1.sy + object1.sheight) < (object2.sy)) ||
        (object1.sy > (object2.sy + object2.sheight)) ||
        ((object1.sx + object1.swidth) < object2.sx) ||
        (object1.sx > (object2.sx + object2.swidth))
    );
}
