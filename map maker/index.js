var canvas = document.getElementById("canvas");
canvas.width = window.innerHeight;
canvas.height = window.innerHeight;
canvas.style.left = (window.innerWidth / 2) - (canvas.width / 2) + "px";
var c = canvas.getContext("2d");
var mouseX = mouseY = pmouseX = pmouseY = 0, scale = 1.0, selectedTileID = 0;
var cam = new Vector(0, 0);
var tiles = [], keys = [];
var mouseIsPressed = false, panEnabled = true;
var Screen = "Editor";

function draw() {

    c.fillStyle = "rgb(255, 255, 255)";
    c.fillRect(0, 0, canvas.width, canvas.height);

    switch(Screen) {

        case "Editor":

            c.lineWidth = 3;
            c.strokeStyle = "rgb(0, 0, 0)";

            c.save();
            c.translate(cam.x, cam.y);
            c.scale(scale, scale);

            for(var i = 0; i < 15 + 1; i++) {
                line(i * (canvas.width / 15), 0, i * (canvas.width / 15), canvas.height);
                line(0, i * (canvas.width / 15), canvas.width,  i * (canvas.width / 15), canvas.height);
            }

            tiles.forEach(function(e) {
                e.show();
            });

            c.restore();
            break;

        case "PlayTest":

            c.save();

            tiles.forEach(function(e) {
                e.update();
                e.show();
            });

            c.restore();
            break;

    }

    if(mouseIsPressed) {
        if(panEnabled) {
            cam.x -= pmouseX - mouseX;
            cam.y -= pmouseY - mouseY;
        } else {
            tiles.push(new Tile(Math.round((mouseX - cam.x) / (canvas.height / 15)) * (canvas.height / 15), Math.round((mouseY - cam.y) / (canvas.height / 15)) * (canvas.height / 15), selectedTileID));
        }
    }

    pmouseX = mouseX;
    pmouseY = mouseY;

    requestAnimationFrame(draw);

}

requestAnimationFrame(draw);

function Vector(x, y) {
    this.x = x;
    this.y = y;
}

function line(x1, y1, x2, y2) {
    c.beginPath();
    c.moveTo(x1, y1);
    c.lineTo(x2, y2);
    c.stroke();
}

function Tile(x, y, id) {
    this.x = x;
    this.y = y;
    this.id = id;

    this.show = function() {
        c.fillStyle = "rgb(0, 0, 0)";
        c.fillRect(this.x, this.y, canvas.width / 15, canvas.height / 15);
    }
}

addEventListener("mousemove", function(e) {
    mouseX = e.clientX - canvas.style.left;
    mouseY = e.clientY;
});
addEventListener("mousedown", function() {
    mouseIsPressed = true;
});
addEventListener("mouseup", function() {
    mouseIsPressed = false;
});
addEventListener("keydown", function(e) {
    keys[e.keyCode] = true;

    switch(e.keyCode) {
        case keyBindings.togglePan:
            if(panEnabled) {
                panEnabled = false;
            } else {
                panEnabled = true;
            }
            break;

        case keyBindings.zoomIn:
            if(scale < 2.0) {
                scale+=0.1;
            }
            break;

        case keyBindings.zoomOut:
            if(scale > 0.5) {
                scale-=0.1;
            }
            break;
    };
});
addEventListener("keyup", function(e) {
    keys[e.keyCode] = false;
    console.log(e.keyCode);
});
