var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");
var bgimg = new Image();
bgimg.onload = function() {};
bgimg.src = "https://raw.githubusercontent.com/Priswall/diepio-clone/master/background.png";
var input = document.createElement("input");
input.style.opacity = 0;
input.autofocus = true;
input.style.fontFamily = "Ubuntu";
input.style.position = "absolute";
input.style.top = "50px";
input.style.left = "50px";
input.id="input";
input.type="text";
input.size= canvas.width / 30;
input.maxLength="13";

var start = 0;
var frame = 0;
var gamemodes = ["FFA", "Teams"];
var gamemode = 0;
var op = 0;
var s = "Menu";
var mouseIsPressed = false;
var canClick = true;
var mouseUP = false;
var mouseClicked = false;
var autofire = false;
var autospin = false;
var tanks = [];
var keys = [];
var bullets = [];
var shapes = [];
var camx = 0;
var camy = 0;
var mousex = 0;
var mousey = 0;
var mmousex = 0;
var mmousey = 0;
var millis = 0;

document.getElementById("form").appendChild(input);

function disappearInput() {
    if(op > 0) {
        op -= 30;
        c.save();
        var opp = (op + (Math.PI / 2)) / 1000;
        if(opp < 0) {
            opp = 0;
        }
        c.globalAlpha = opp;
        c.drawImage(bgimg, (canvas.width / 2) - (bgimg.width / 2), (canvas.height / 2) - (bgimg.height / 2));
        c.restore();
        input.style.opacity = (op + (Math.PI / 2)) / 1000;
        input.style.border = "5px solid black";
        input.style.left = ((canvas.width / 2) - (input.size * 5)) + "px";
        input.style.top = ((canvas.height / 3) + (50 * Math.sin((op / 13) / 50))) + "px";
        requestAnimationFrame(disappearInput);
    } else {

        document.getElementById("form").removeChild(input);
        tanks.splice(1, 1);

    }
}

requestAnimationFrame(draw);

function returnMenu() {

    if(op < 1000 && op > 0) {
        input.focus();
        if(document.getElementById("input") === null) {
            document.getElementById("form").appendChild(input);
        }
        op ++;
        c.save();
        var opp = (op + (Math.PI / 2)) / 1000;
        if(opp > 1000) {
            opp = 1000;
        }
        c.globalAlpha = opp;
        c.drawImage(bgimg, (canvas.width / 2) - (bgimg.width / 2), (canvas.height / 2) - (bgimg.height / 2));
        c.restore();
        input.style.opacity = op / 1000;
        input.style.border = "5px solid black";
        input.style.left = ((canvas.width / 2) - (input.size * 5)) + "px";
        input.style.top = ((canvas.height / 3) + (50 * Math.sin((op / 13) / 50))) + "px";
        requestAnimationFrame(returnMenu);

    } else if (op === 1000){
        s = "Menu";
        tanks = [];
        shapes = [];
        bullets = [];
    } else if(op < 0) {

        op = 100;

    }
}

function playGame() {

    s = "FFA";

    disappearInput();
    var name = input.value;
    if(name === "") {
        name = "Unnamed Tank";
    }

    if(shapes.length === 0) {
        for(var i = 0; i < 100; i++) {

            shapes.push(new shape(Math.round(Math.random() * 3000) - 1500, Math.round(Math.random() * 3000) - 1500, Math.round(Math.random() * 2)));

        }
    }

    tanks.unshift(new tank((Math.random() * 3000) - 1500, (Math.random() * 3000) - 1500, 0, 0, name, 0, 0, 0, Math.round(Math.random() * 1000)));

}


function upgradeScreen() {

    canvas.style.cursor = "default";

    if(tanks[0].lvl >= 15 && tanks[0].id === 0) {

        for(var i = 0; i < tankorder[tanks[0].id].length; i++) {

            switch(i) {

                case 0:
                c.lineWidth = 3;
                c.fillStyle = "rgb(255, 100, 100)";
                c.fillRect(20 + ((i % 2) * 120), 70 + ((Math.floor(i / 2) % 2) * 120), 100, 50);
                c.fillStyle = "rgb(255, 50, 50)";
                c.fillRect(20 + ((i % 2) * 120), 20 + ((Math.floor(i / 2) % 2) * 120), 100, 50);
                break;

                case 1:
                c.lineWidth = 3;
                c.fillStyle = "rgb(100, 100, 255)";
                c.fillRect(20 + ((i % 2) * 120), 70 + ((Math.floor(i / 2) % 2) * 120), 100, 50);
                c.fillStyle = "rgb(50, 50, 255)";
                c.fillRect(20 + ((i % 2) * 120), 20 + ((Math.floor(i / 2) % 2) * 120), 100, 50);
                break;

                case 2:
                c.lineWidth = 3;
                c.fillStyle = "rgb(220, 220, 100)";
                c.fillRect(20 + ((i % 2) * 120), 70 + ((Math.floor(i / 2) % 2) * 120), 100, 50);
                c.fillStyle = "rgb(235, 235, 50)";
                c.fillRect(20 + ((i % 2) * 120), 20 + ((Math.floor(i / 2) % 2) * 120), 100, 50);
                break;

                case 3:
                c.lineWidth = 3;
                c.fillStyle = "rgb(100, 255, 100)";
                c.fillRect(20 + ((i % 2) * 120), 70 + ((Math.floor(i / 2) % 2) * 120), 100, 50);
                c.fillStyle = "rgb(50, 255, 50)";
                c.fillRect(20 + ((i % 2) * 120), 20 + ((Math.floor(i / 2) % 2) * 120), 100, 50);
                break;

            }

            if(mousex > 20 + ((i % 2) * 120) && mousey > 20 + ((Math.floor(i / 2) % 2) * 120) && mousex < 120 + ((i % 2) * 120) && mousey < 120 + ((Math.floor(i / 2) % 2) * 120)) {

                canvas.style.cursor = "pointer";

                if(mouseUP) {

                    tanks[0].id = Number(tankorder[tanks[0].id][i]);

                    switch(tanks[0].id) {

                        case 1:

                        tanks[0].knockback = tankstats.sniper.knockback;
                        tanks[0].spread = tankstats.sniper.spread;
                        tanks[0].BulletS = tankstats.sniper.bspeed;
                        tanks[0].Reload = tankstats.sniper.reload;
                        break;

                        case 2:

                        tanks[0].knockback = tankstats.twin.knockback;
                        tanks[0].spread = tankstats.twin.spread;
                        tanks[0].BulletS = tankstats.twin.bspeed;
                        tanks[0].Reload = tankstats.twin.reload;
                        break;

                        case 3:

                        tanks[0].knockback = tankstats.flankguard.knockback;
                        tanks[0].spread = tankstats.flankguard.spread;
                        tanks[0].BulletS = tankstats.flankguard.bspeed;
                        tanks[0].Reload = tankstats.flankguard.reload;
                        break;

                        case 4:

                        tanks[0].knockback = tankstats.machinegun.knockback;
                        tanks[0].spread = tankstats.machinegun.spread;
                        tanks[0].BulletS = tankstats.machinegun.bspeed;
                        tanks[0].Reload = tankstats.machinegun.reload;
                        break;

                    }

                    return;

                }

            }

            c.fillStyle = "rgb(200, 200, 200)";
            c.strokeStyle = "rgb(150, 150, 150)";

            c.strokeRect(20 + ((i % 2) * 120), 20 + ((Math.floor(i / 2) % 2) * 120), 100, 100);

            c.save();
            c.translate(70 + ((i % 2) * 120), 60 + ((Math.floor(i / 2) % 2) * 120));
            c.scale(0.7, 0.7);
            c.rotate((millis / 3000) % 360);

            tankshow[tankorder[tanks[0].id][i]]();

            c.fillStyle = "rgb(100, 200, 250)";
            c.strokeStyle = "rgb(50, 150, 200)";

            c.beginPath();
            c.arc(0, 0, 25, 0, 2 * Math.PI);
            c.fill();
            c.stroke();

            c.restore();

            c.font = "bold 15px Ubuntu";
            c.fillStyle = "white";
            c.fillText(classes[tankorder[tanks[0].id][i]], 70 + ((i % 2) * 120), 105 + ((Math.floor(i / 2) % 2) * 120));
            c.fillStyle = "black";
            c.lineWidth = 1;
            c.strokeText(classes[tankorder[tanks[0].id][i]], 70 + ((i % 2) * 120), 105 + ((Math.floor(i / 2) % 2) * 120));

        }

    } else if(tanks[0].lvl >= 30 && tanks[0].id < 5) {

        for(var i = 0; i < tankorder[tanks[0].id].length; i++) {

            switch(i) {

                case 0:
                c.lineWidth = 3;
                c.fillStyle = "rgb(255, 100, 100)";
                c.fillRect(20 + ((i % 2) * 120), 70 + ((Math.floor(i / 2) % 2) * 120), 100, 50);
                c.fillStyle = "rgb(255, 50, 50)";
                c.fillRect(20 + ((i % 2) * 120), 20 + ((Math.floor(i / 2) % 2) * 120), 100, 50);
                break;

                case 1:
                c.lineWidth = 3;
                c.fillStyle = "rgb(100, 100, 255)";
                c.fillRect(20 + ((i % 2) * 120), 70 + ((Math.floor(i / 2) % 2) * 120), 100, 50);
                c.fillStyle = "rgb(50, 50, 255)";
                c.fillRect(20 + ((i % 2) * 120), 20 + ((Math.floor(i / 2) % 2) * 120), 100, 50);
                break;

                case 2:
                c.lineWidth = 3;
                c.fillStyle = "rgb(220, 220, 100)";
                c.fillRect(20 + ((i % 2) * 120), 70 + ((Math.floor(i / 2) % 2) * 120), 100, 50);
                c.fillStyle = "rgb(235, 235, 50)";
                c.fillRect(20 + ((i % 2) * 120), 20 + ((Math.floor(i / 2) % 2) * 120), 100, 50);
                break;

                case 3:
                c.lineWidth = 3;
                c.fillStyle = "rgb(100, 255, 100)";
                c.fillRect(20 + ((i % 2) * 120), 70 + ((Math.floor(i / 2) % 2) * 120), 100, 50);
                c.fillStyle = "rgb(50, 255, 50)";
                c.fillRect(20 + ((i % 2) * 120), 20 + ((Math.floor(i / 2) % 2) * 120), 100, 50);
                break;

            }

            if(mousex > 20 + ((i % 2) * 120) && mousey > 20 + ((Math.floor(i / 2) % 2) * 120) && mousex < 120 + ((i % 2) * 120) && mousey < 120 + ((Math.floor(i / 2) % 2) * 120)) {

                canvas.style.cursor = "pointer";

                if(mouseUP) {

                    tanks[0].id = Number(tankorder[tanks[0].id][i]);

                    switch(tanks[0].id) {

                        case 5:

                        tanks[0].knockback = tankstats.assassin.knockback;
                        tanks[0].spread = tankstats.assassin.spread;
                        tanks[0].BulletS = tankstats.assassin.bspeed;
                        tanks[0].Reload = tankstats.assassin.reload;
                        break;

                        case 6:

                        tanks[0].knockback = tankstats.overseer.knockback;
                        tanks[0].spread = tankstats.overseer.spread;
                        tanks[0].BulletS = tankstats.overseer.bspeed;
                        tanks[0].Reload = tankstats.overseer.reload;
                        break;

                        case 1:

                        tanks[0].knockback = tankstats.predator.knockback;
                        tanks[0].spread = tankstats.predator.spread;
                        tanks[0].BulletS = tankstats.predator.bspeed;
                        tanks[0].Reload = tankstats.predator.reload;
                        break;

                        case 2:

                        tanks[0].knockback = tankstats.machinegun.knockback;
                        tanks[0].spread = tankstats.machinegun.spread;
                        tanks[0].BulletS = tankstats.machinegun.bspeed;
                        tanks[0].Reload = tankstats.machinegun.reload;
                        break;

                        case 18:

                        tanks[0].knockback = tankstats.trapper.knockback;
                        tanks[0].spread = tankstats.trapper.spread;
                        tanks[0].BulletS = tankstats.trapper.bspeed;
                        tanks[0].Reload = tankstats.trapper.reload;
                        break;

                        case 21:

                        tanks[0].knockback = tankstats.destroyer.knockback;
                        tanks[0].spread = tankstats.destroyer.spread;
                        tanks[0].BulletS = tankstats.destroyer.bspeed;
                        tanks[0].Reload = tankstats.destroyer.reload;
                        break;

                    }

                    return;

                }

            }

            c.fillStyle = "rgb(200, 200, 200)";
            c.strokeStyle = "rgb(150, 150, 150)";

            c.strokeRect(20 + ((i % 2) * 120), 20 + ((Math.floor(i / 2) % 2) * 120), 100, 100);

            c.save();
            c.translate(70 + ((i % 2) * 120), 60 + ((Math.floor(i / 2) % 2) * 120));
            c.scale(0.7, 0.7);
            c.rotate((millis / 3000) % 360);

            tankshow[tankorder[tanks[0].id][i]]();

            c.fillStyle = "rgb(100, 200, 250)";
            c.strokeStyle = "rgb(50, 150, 200)";

            c.beginPath();
            c.arc(0, 0, 25, 0, 2 * Math.PI);
            c.fill();
            c.stroke();

            c.restore();

            c.font = "bold 15px Ubuntu";
            c.fillStyle = "white";
            c.fillText(classes[tankorder[tanks[0].id][i]], 70 + ((i % 2) * 120), 105 + ((Math.floor(i / 2) % 2) * 120));
            c.fillStyle = "black";
            c.lineWidth = 1;
            c.strokeText(classes[tankorder[tanks[0].id][i]], 70 + ((i % 2) * 120), 105 + ((Math.floor(i / 2) % 2) * 120));

        }

    } else if(tanks[0].lvl >= 45 && (tanks[0].id < 17 || tanks[0].id === 18 || tanks[0].id === 21 || tanks[0].id === 23)) {

        for(var i = 0; i < tankorder[tanks[0].id].length; i++) {

            switch(i) {

                case 0:
                c.lineWidth = 3;
                c.fillStyle = "rgb(255, 100, 100)";
                c.fillRect(20 + ((i % 2) * 120), 70 + ((Math.floor(i / 2) % 2) * 120), 100, 50);
                c.fillStyle = "rgb(255, 50, 50)";
                c.fillRect(20 + ((i % 2) * 120), 20 + ((Math.floor(i / 2) % 2) * 120), 100, 50);
                break;

                case 1:
                c.lineWidth = 3;
                c.fillStyle = "rgb(100, 100, 255)";
                c.fillRect(20 + ((i % 2) * 120), 70 + ((Math.floor(i / 2) % 2) * 120), 100, 50);
                c.fillStyle = "rgb(50, 50, 255)";
                c.fillRect(20 + ((i % 2) * 120), 20 + ((Math.floor(i / 2) % 2) * 120), 100, 50);
                break;

                case 2:
                c.lineWidth = 3;
                c.fillStyle = "rgb(220, 220, 100)";
                c.fillRect(20 + ((i % 2) * 120), 70 + ((Math.floor(i / 2) % 2) * 120), 100, 50);
                c.fillStyle = "rgb(235, 235, 50)";
                c.fillRect(20 + ((i % 2) * 120), 20 + ((Math.floor(i / 2) % 2) * 120), 100, 50);
                break;

                case 3:
                c.lineWidth = 3;
                c.fillStyle = "rgb(100, 255, 100)";
                c.fillRect(20 + ((i % 2) * 120), 70 + ((Math.floor(i / 2) % 2) * 120), 100, 50);
                c.fillStyle = "rgb(50, 255, 50)";
                c.fillRect(20 + ((i % 2) * 120), 20 + ((Math.floor(i / 2) % 2) * 120), 100, 50);
                break;

            }

            if(mousex > 20 + ((i % 2) * 120) && mousey > 20 + ((Math.floor(i / 2) % 2) * 120) && mousex < 120 + ((i % 2) * 120) && mousey < 120 + ((Math.floor(i / 2) % 2) * 120)) {

                canvas.style.cursor = "pointer";

                if(mouseUP) {

                    tanks[0].id = Number(tankorder[tanks[0].id][i]);

                    switch(tanks[0].id) {

                        case 17:
                        case 19:

                        tanks[0].knockback = tankstats.landminer.knockback;
                        tanks[0].spread = tankstats.landminer.spread;
                        tanks[0].BulletS = tankstats.landminer.bspeed;
                        tanks[0].Reload = tankstats.landminer.reload;
                        break;

                        case 22:

                        tanks[0].knockback = tankstats.annihilator.knockback;
                        tanks[0].spread = tankstats.annihilator.spread;
                        tanks[0].BulletS = tankstats.annihilator.bspeed;
                        tanks[0].Reload = tankstats.annihilator.reload;
                        break;

                        case 13:

                        tanks[0].knockback = tankstats.flamethrower.knockback;
                        tanks[0].spread = tankstats.flamethrower.spread;
                        tanks[0].BulletS = tankstats.flamethrower.bspeed;
                        tanks[0].Reload = tankstats.flamethrower.reload;
                        break;

                    }

                    return;

                }

            }

            c.fillStyle = "rgb(200, 200, 200)";
            c.strokeStyle = "rgb(150, 150, 150)";

            c.strokeRect(20 + ((i % 2) * 120), 20 + ((Math.floor(i / 2) % 2) * 120), 100, 100);

            c.save();
            c.translate(70 + ((i % 2) * 120), 60 + ((Math.floor(i / 2) % 2) * 120));
            c.scale(0.7, 0.7);
            c.rotate((millis / 3000) % 360);

            tankshow[tankorder[tanks[0].id][i]]();

            c.fillStyle = "rgb(100, 200, 250)";
            c.strokeStyle = "rgb(50, 150, 200)";

            c.beginPath();
            c.arc(0, 0, 25, 0, 2 * Math.PI);
            c.fill();
            c.stroke();

            c.restore();

            c.font = "bold 15px Ubuntu";
            c.fillStyle = "white";
            c.fillText(classes[tankorder[tanks[0].id][i]], 70 + ((i % 2) * 120), 105 + ((Math.floor(i / 2) % 2) * 120));
            c.fillStyle = "black";
            c.lineWidth = 1;
            c.strokeText(classes[tankorder[tanks[0].id][i]], 70 + ((i % 2) * 120), 105 + ((Math.floor(i / 2) % 2) * 120));

        }

    }

}

function draw() {

    c.lineCap = "round";
    frame++;

    millis = new Date();
    millis = millis.getTime();
    if(start === 0) {
        start = millis;
    }

    if(s === "Menu") {
        c.clearRect(0, 0, canvas.width, canvas.height);
        c.drawImage(bgimg, (canvas.width / 2) - (bgimg.width / 2), (canvas.height / 2) - (bgimg.height / 2));
        if(input.style.opacity < 1) {
            op = millis - start;
            input.style.opacity = op / 1000;
            input.style.border = "5px solid black";
            input.style.left = ((canvas.width / 2) - (input.size * 5)) + "px";
            input.style.top = ((canvas.height / 3) + (50 * Math.sin((op / 13) / 50))) + "px";

        }

    } else if(s === "FFA") {

        if(autospin) {
            mousex = (canvas.width / 2) + Math.sin(millis / 1500) * 200;
            mousey = (canvas.height / 2) + Math.cos(millis / 1500) * 200;
        }

        camx = (canvas.width / 2) - tanks[0].x;
        camy = (canvas.height / 2) - tanks[0].y;

        c.strokeStyle = "rgb(180, 180, 180)";
        c.lineWidth = 1;

        c.fillStyle = "rgb(200, 200, 200)";
        c.fillRect(0, 0, canvas.width, canvas.height);

        c.save();
        c.translate(camx, camy);

        c.fillStyle = "rgb(220, 220, 220, 1)";
        c.fillRect(-1500, -1500, 3000, 3000);

        c.resetTransform();

        for(var i = 0; i < canvas.width / 10; i++) {
            c.beginPath();
            c.moveTo(0, (i * 25) - tanks[0].y % 25);
            c.lineTo(canvas.width, (i * 25) - tanks[0].y % 25);
            c.stroke();
            c.beginPath();
            c.moveTo((i * 25) - tanks[0].x % 25, 0);
            c.lineTo((i * 25) - tanks[0].x % 25, canvas.height);
            c.stroke();
        }
        c.translate(camx, camy);

        c.lineWidth = 3;

        for(var i = shapes.length - 1; i >= 0; i--) {

            if(shapes[i].x + 50 > -camx && shapes[i].x - 50 < -camx + canvas.width && shapes[i].y + 50 > -camy && shapes[i].y - 50 < -camy + canvas.height){
                if(shapes[i].time !== frame - 1) {
                    var x = shapes[i].velx * (frame - shapes[i].time);
                    var y = shapes[i].vely * (frame - shapes[i].time);
                    shapes[i].x -= x;
                    if(y > 0) {
                        shapes[i].y -= y;
                    }
                }
                shapes[i].show();
                shapes[i].update(frame);
            }

            for(var j = shapes.length - 1; j >= 0; j--) {

                if(i !== j) {

                    if(Math.abs(shapes[i].x - shapes[j].x) < 50 && Math.abs(shapes[i].y - shapes[j].y) < 50) {

                        shapes[i].gothit(shapes[j]);
                        shapes[j].gothit(shapes[i]);

                    }

                }

            }

            for(var j = bullets.length - 1; j >= 0; j--) {

                if(Math.abs(shapes[i].x - bullets[j].x) < 18 + bullets[j].r && Math.abs(shapes[i].y - bullets[j].y) < 18 + bullets[j].r) {

                    shapes[i].gothit(bullets[j]);

                }

            }

            for(var j = tanks.length - 1; j >= 0; j--) {

                if(Math.abs(shapes[i].x - tanks[j].x) < 35 && Math.abs(shapes[i].y - tanks[j].y) < 35) {

                    shapes[i].gothit(tanks[j]);
                    tanks[j].h--;

                }
            }

            if(shapes[i].a <= 0) {

                tanks[0].showxp += shapes[i].xp;
                shapes.splice(i, 1);
                shapes.push(new shape(Math.round(Math.random() * 3000) - 1500, Math.round(Math.random() * 3000) - 1500, Math.round(Math.random() * 2)));

            }

        }

        for(var i = bullets.length - 1; i >= 0; i--) {

            bullets[i].show();
            bullets[i].update();

            for(var j = bullets.length - 1; j >= 0; j--) {

                if(i !== j) {

                    if(Math.abs(bullets[i].x - bullets[j].x) < 10 && Math.abs(bullets[i].y - bullets[j].y) < 10 && bullets[i].id === 1 && bullets[j].id === 1) {

                        var pr = Math.atan2(-(bullets[i].x - bullets[j].x), bullets[i].y - bullets[j].y);
                        bullets[i].x -= Math.sin(pr);
                        bullets[i].y -= Math.cos(pr + 3.1416);
                        bullets[j].x += Math.sin(pr);
                        bullets[j].y += Math.cos(pr + 3.1416);

                    }

                    if(Math.abs(bullets[i].x - bullets[j].x) < 15 && Math.abs(bullets[i].y - bullets[j].y) < 15 && ((bullets[i].id === 2 && bullets[j].id === 2) || (bullets[i].id === 3 && bullets[j].id === 3)) && bullets[i].p > 1 && bullets[j].p > 4) {

                        bullets[i].ms *= 0.8;
                        bullets[j].ms *= 0.8;

                        var pr = Math.atan2(-(bullets[i].x - bullets[j].x), bullets[i].y - bullets[j].y);
                        bullets[i].x -= Math.sin(pr);
                        bullets[i].y -= Math.cos(pr + 3.1416);
                        bullets[j].x += Math.sin(pr);
                        bullets[j].y += Math.cos(pr + 3.1416);

                    }

                }

            }

            if(bullets[i].a <= 0) {
                if(bullets[i].id === 2) {
                    bullets.push(new bullet(bullets[i].x, bullets[i].y, bullets[i].x + Math.sin(0), bullets[i].y - Math.cos(0), 3, 0, bullets[i].t, 2, bullets[i].d / 3, 0.5, 1));
                    bullets.push(new bullet(bullets[i].x, bullets[i].y, bullets[i].x + Math.sin(Math.PI), bullets[i].y - Math.cos(Math.PI), 3, 0, bullets[i].t, 2, bullets[i].d, 0.5, 1));
                    bullets.push(new bullet(bullets[i].x, bullets[i].y, bullets[i].x + Math.sin(0.5236), bullets[i].y - Math.cos(0.5236), 3, 0, bullets[i].t, 2, bullets[i].d, 0.5, 1));
                    bullets.push(new bullet(bullets[i].x, bullets[i].y, bullets[i].x + Math.sin(-0.5236), bullets[i].y - Math.cos(-0.5236), 3, 0, bullets[i].t, 2, bullets[i].d, 0.5, 1));
                    bullets.push(new bullet(bullets[i].x, bullets[i].y, bullets[i].x + Math.sin(1.0472), bullets[i].y - Math.cos(1.0472), 3, 0, bullets[i].t, 2, bullets[i].d, 0.5, 1));
                    bullets.push(new bullet(bullets[i].x, bullets[i].y, bullets[i].x + Math.sin(-1.0472), bullets[i].y - Math.cos(-1.0472), 3, 0, bullets[i].t, 2, bullets[i].d, 0.5, 1));
                    bullets.push(new bullet(bullets[i].x, bullets[i].y, bullets[i].x + Math.sin(1.5708), bullets[i].y - Math.cos(1.5708), 3, 0, bullets[i].t, 2, bullets[i].d, 0.5, 1));
                    bullets.push(new bullet(bullets[i].x, bullets[i].y, bullets[i].x + Math.sin(-1.5708), bullets[i].y - Math.cos(-1.5708), 3, 0, bullets[i].t, 2, bullets[i].d, 0.5, 1));
                    bullets.push(new bullet(bullets[i].x, bullets[i].y, bullets[i].x + Math.sin(2.0944), bullets[i].y - Math.cos(2.0944), 3, 0, bullets[i].t, 2, bullets[i].d, 0.5, 1));
                    bullets.push(new bullet(bullets[i].x, bullets[i].y, bullets[i].x + Math.sin(-2.0944), bullets[i].y - Math.cos(-2.0944), 3, 0, bullets[i].t, 2, bullets[i].d, 0.5, 1));
                    bullets.push(new bullet(bullets[i].x, bullets[i].y, bullets[i].x + Math.sin(2.618), bullets[i].y - Math.cos(2.618), 3, 0, bullets[i].t, 2, bullets[i].d, 0.5, 1));
                    bullets.push(new bullet(bullets[i].x, bullets[i].y, bullets[i].x + Math.sin(-2.618), bullets[i].y - Math.cos(-2.618), 3, 0, bullets[i].t, 2, bullets[i].d, 0.5, 1));
                    bullets.push(new bullet(bullets[i].x, bullets[i].y, bullets[i].x + Math.sin(4.1888), bullets[i].y - Math.cos(4.1888), 3, 0, bullets[i].t, 2, bullets[i].d, 0.5, 1));
                    bullets.push(new bullet(bullets[i].x, bullets[i].y, bullets[i].x + Math.sin(-4.1888), bullets[i].y - Math.cos(-4.1888), 3, 0, bullets[i].t, 2, bullets[i].d, 0.5, 1));
                }
                if(bullets[i].id === 1) {

                    tanks[0].dr--;

                }
                bullets.splice(i, 1);
            }
        }

        for(var i = tanks.length - 1; i >= 0; i--) {
            tanks[i].show();
            if(i !== 0) {
                c.fillStyle = "white";
                c.strokeStyle = "black";
                c.lineWidth = "1";
                c.font = "bold 15px Ubuntu";
                c.fillText(tanks[i].n, tanks[i].x, tanks[i].y - 50);
                c.strokeText(tanks[i].n, tanks[i].x, tanks[i].y - 50);
            }
        }
        tanks[0].update(Math.atan2(-(tanks[0].x - (mousex - camx)), (tanks[0].y - (mousey - camy))));

        c.restore();

        c.lineWidth = 20;
        c.strokeStyle = "rgba(50, 50, 50, 0.8)";
        c.beginPath();
        c.lineTo((canvas.width / 2) - 250, canvas.height - 25);
        c.lineTo((canvas.width / 2) + 250, canvas.height - 25);
        c.stroke();

        tanks[0].xp += tanks[0].showxp / 5;
        tanks[0].showxp /= 5;

        c.lineWidth = 14;
        c.strokeStyle = "rgb(250, 250, 150)";
        c.beginPath();
        c.lineTo((canvas.width / 2) - 250, canvas.height - 25);
        c.lineTo(((canvas.width / 2) - 250) + (tanks[0].xp * (((canvas.width / 2) + 250) / (xpamt[tanks[0].lvl] * 1.199))), canvas.height - 25);
        c.stroke();

        c.fillStyle = "white";
        c.strokeStyle = "black";
        c.textAlign = "center";
        c.textBaseline = "middle";
        c.font = "bold 15px Ubuntu";
        c.lineWidth = 1;
        c.fillText("Level " + tanks[0].lvl + " " + classes[tanks[0].id], canvas.width / 2, canvas.height - 25);
        c.font = "bold 25px Ubuntu";
        c.fillText(tanks[0].n, canvas.width / 2, canvas.height - 50);
        c.strokeText(tanks[0].n, canvas.width / 2, canvas.height - 50);

        upgradeScreen();

        if(tanks[0].xppoints > 0) {

            for(var i = 0; i < 8; i++) {

                c.strokeStyle = "rgb(50, 50, 50, 0.8)";
                c.lineWidth = 16;
                c.beginPath();
                c.moveTo(20, canvas.height - (20 + (i * 23)));
                c.lineTo(200, canvas.height - (20 + (i * 23)));
                c.stroke();

                if(mmousex > 175 && mmousex < 210 && mmousey > canvas.height - (30 + (i * 23)) && mmousey < canvas.height - (10 + (i * 23))) {

                    canvas.style.cursor = "pointer";

                    if(mouseClicked) {

                        switch(i) {

                            case 0:
                            if(tanks[0].movementspeedpoints < 8) {
                                tanks[0].movementspeedpoints++;
                                tanks[0].xppoints--;
                                mouseClicked = false;
                            }
                            break;

                            case 1:
                            if(tanks[0].reloadpoints < 8) {
                                tanks[0].reloadpoints++;
                                tanks[0].xppoints--;
                                mouseClicked = false;
                            }
                            break;

                            case 2:
                            if(tanks[0].bulletPpoints < 8) {
                                tanks[0].bulletPpoints++;
                                tanks[0].xppoints--;
                                mouseClicked = false;
                            }
                            break;

                            case 3:
                            if(tanks[0].bulletDpoints < 8) {
                                tanks[0].bulletDpoints++;
                                tanks[0].xppoints--;
                                mouseClicked = false;
                            }
                            break;

                            case 4:
                            if(tanks[0].bulletSpoints < 8) {
                                tanks[0].bulletSpoints++;
                                tanks[0].xppoints--;
                                mouseClicked = false;
                            }
                            break;

                            case 5:
                            if(tanks[0].bodydamagepoints < 8) {
                                tanks[0].bodydamagepoints++;
                                tanks[0].xppoints--;
                                mouseClicked = false;
                            }
                            break;

                            case 6:
                            if(tanks[0].regenpoints < 8) {
                                tanks[0].regenpoints++;
                                tanks[0].xppoints--;
                                mouseClicked = false;
                            }
                            break;

                            case 7:
                            if(tanks[0].healthpoints < 8) {
                                tanks[0].healthpoints++;
                                tanks[0].xppoints--;
                                mouseClicked = false;
                            }
                            break;

                        }

                    }

                }

            }

            for(var i = 0; i < tanks[0].healthpoints; i++) {
                c.fillStyle = "rgb(250, 175, 100)";
                if(i === 0) {
                    c.beginPath();
                    c.arc(21, canvas.height - 181, 7, 0, 2 * Math.PI);
                    c.fill();
                }
                c.fillRect(23 + (19 * i), canvas.height - 188, 17, 14);
            }
            c.fillStyle = "rgb(100, 100, 100)";
            if(tanks[0].healthpoints < 8) {
                c.fillStyle = "rgb(250, 175, 100)";
            }
            c.beginPath();
            c.arc(200, canvas.height - 181, 8, 0, 2 * Math.PI);
            c.rect(175, canvas.height - 189, 25, 16);
            c.fill();

            for(var i = 0; i < tanks[0].regenpoints; i++) {
                c.fillStyle = "rgb(250, 250, 100)";
                if(i === 0) {
                    c.beginPath();
                    c.arc(21, canvas.height - 158, 7, 0, 2 * Math.PI);
                    c.fill();
                }
                c.fillRect(23 + (19 * i), canvas.height - 165, 17, 14);
            }
            c.fillStyle = "rgb(100, 100, 100)";
            if(tanks[0].regenpoints < 8) {
                c.fillStyle = "rgb(250, 250, 100)";
            }
            c.beginPath();
            c.arc(200, canvas.height - 158, 8, 0, 2 * Math.PI);
            c.rect(175, canvas.height - 166, 25, 16);
            c.fill();

            for(var i = 0; i < tanks[0].bodydamagepoints; i++) {
                c.fillStyle = "rgb(175, 100, 250)";
                if(i === 0) {
                    c.beginPath();
                    c.arc(21, canvas.height - 135, 7, 0, 2 * Math.PI);
                    c.fill();
                }
                c.fillRect(23 + (19 * i), canvas.height - 142, 17, 14);
            }
            c.fillStyle = "rgb(100, 100, 100)";
            if(tanks[0].bodydamagepoints < 8) {
                c.fillStyle = "rgb(175, 100, 250)";
            }
            c.beginPath();
            c.arc(200, canvas.height - 135, 8, 0, 2 * Math.PI);
            c.rect(175, canvas.height - 143, 25, 16);
            c.fill();

            for(var i = 0; i < tanks[0].bulletSpoints; i++) {
                c.fillStyle = "rgb(100, 175, 250)";
                if(i === 0) {
                    c.beginPath();
                    c.arc(21, canvas.height - 112, 7, 0, 2 * Math.PI);
                    c.fill();
                }
                c.fillRect(23 + (19 * i), canvas.height - 119, 17, 14);
            }
            c.fillStyle = "rgb(100, 100, 100)";
            if(tanks[0].bulletSpoints < 8) {
                c.fillStyle = "rgb(100, 175, 250)";
            }
            c.beginPath();
            c.arc(200, canvas.height - 112, 8, 0, 2 * Math.PI);
            c.rect(175, canvas.height - 120, 25, 16);
            c.fill();

            for(var i = 0; i < tanks[0].bulletDpoints; i++) {
                c.fillStyle = "rgb(250, 100, 100)";
                if(i === 0) {
                    c.beginPath();
                    c.arc(21, canvas.height - 89, 7, 0, 2 * Math.PI);
                    c.fill();
                }
                c.fillRect(23 + (19 * i), canvas.height - 96, 17, 14);
            }
            c.fillStyle = "rgb(100, 100, 100)";
            if(tanks[0].bulletDpoints < 8) {
                c.fillStyle = "rgb(250, 100, 100)";
            }
            c.beginPath();
            c.arc(200, canvas.height - 89, 8, 0, 2 * Math.PI);
            c.rect(175, canvas.height - 97, 25, 16);
            c.fill();

            for(var i = 0; i < tanks[0].bulletPpoints; i++) {
                c.fillStyle = "rgb(250, 250, 100)";
                if(i === 0) {
                    c.beginPath();
                    c.arc(21, canvas.height - 66, 7, 0, 2 * Math.PI);
                    c.fill();
                }
                c.fillRect(23 + (19 * i), canvas.height - 73, 17, 14);
            }
            c.fillStyle = "rgb(100, 100, 100)";
            if(tanks[0].bulletPpoints < 8) {
                c.fillStyle = "rgb(250, 175, 100)";
            }
            c.beginPath();
            c.arc(200, canvas.height - 66, 8, 0, 2 * Math.PI);
            c.rect(175, canvas.height - 74, 25, 16);
            c.fill();

            for(var i = 0; i < tanks[0].reloadpoints; i++) {
                c.fillStyle = "rgb(100, 250, 100)";
                if(i === 0) {
                    c.beginPath();
                    c.arc(21, canvas.height - 43, 7, 0, 2 * Math.PI);
                    c.fill();
                }
                c.fillRect(23 + (19 * i), canvas.height - 50, 17, 14);
            }
            c.fillStyle = "rgb(100, 100, 100)";
            if(tanks[0].reloadpoints < 8) {
                c.fillStyle = "rgb(100, 250, 100)";
            }
            c.beginPath();
            c.arc(200, canvas.height - 43, 8, 0, 2 * Math.PI);
            c.rect(175, canvas.height - 51, 25, 16);
            c.fill();

            for(var i = 0; i < tanks[0].movementspeedpoints; i++) {
                c.fillStyle = "rgb(100, 250, 250)";
                if(i === 0) {
                    c.beginPath();
                    c.arc(21, canvas.height - 20, 7, 0, 2 * Math.PI);
                    c.fill();
                }
                c.fillRect(23 + (19 * i), canvas.height - 27, 17, 14);
            }
            c.fillStyle = "rgb(100, 100, 100)";
            if(tanks[0].movementspeedpoints < 8) {
                c.fillStyle = "rgb(100, 250, 250)";
            }
            c.beginPath();
            c.arc(200, canvas.height - 20, 8, 0, 2 * Math.PI);
            c.rect(175, canvas.height - 28, 25, 16);
            c.fill();

            c.fillStyle = "white";
            c.fillText("+", 190, canvas.height - 181);
            c.fillText("+", 190, canvas.height - 158);
            c.fillText("+", 190, canvas.height - 135);
            c.fillText("+", 190, canvas.height - 112);
            c.fillText("+", 190, canvas.height - 89);
            c.fillText("+", 190, canvas.height - 66);
            c.fillText("+", 190, canvas.height - 43);
            c.fillText("+", 190, canvas.height - 20);

            c.strokeStyle = "black";
            c.lineWidth = 1;
            c.strokeText("+", 190, canvas.height - 181);
            c.strokeText("+", 190, canvas.height - 158);
            c.strokeText("+", 190, canvas.height - 135);
            c.strokeText("+", 190, canvas.height - 112);
            c.strokeText("+", 190, canvas.height - 89);
            c.strokeText("+", 190, canvas.height - 66);
            c.strokeText("+", 190, canvas.height - 43);
            c.strokeText("+", 190, canvas.height - 20);

            c.font = "bold 10px Ubuntu";
            c.lineWidth = 0.2;
            c.strokeStyle = "rgb(200, 200, 200)";
            c.strokeText("Max Health [1]", 100, canvas.height - 181);
            c.strokeText("Health Regen [2]", 100, canvas.height - 158);
            c.strokeText("Body Damage [3]", 100, canvas.height - 135);
            c.strokeText("Bullet Speed [4]", 100, canvas.height - 112);
            c.strokeText("Bullet Damage [5]", 100, canvas.height - 89);
            c.strokeText("Bullet Penetration [6]", 100, canvas.height - 66);
            c.strokeText("Reload [7]", 100, canvas.height - 43);
            c.strokeText("Movement Speed [8]", 100, canvas.height - 20);

            c.save();
            c.translate(210, canvas.height - 200);
            c.rotate(0.3);
            c.font = "bold 20px Ubuntu";
            c.lineWidth = 1;
            c.fillText("x" + tanks[0].xppoints, 0, 0);
            c.strokeText("x" + tanks[0].xppoints, 0, 0);
            c.restore();

        }

        if(tanks[0].dead) {
            returnMenu();
        }

    }

    mouseUP = false;
    requestAnimationFrame(draw);

}
window.addEventListener("mousemove", function(e) {
    if(!autospin) {
        mousex = e.clientX;
        mousey = e.clientY;
    }
});
window.addEventListener("mousedown", function(e) {
    mouseIsPressed = true;
    if(canClick) {
        mouseClicked = true;
        canClick = false;
        setTimeout(function() {
            mouseClicked = false;
        }, 1);
    }
});
window.addEventListener("mouseup", function() {
    mouseIsPressed = false;
    mouseUP = true;
    canClick = true;
});
window.addEventListener("keydown", function(e) {
    keys[e.keyCode] = true;
});
window.addEventListener("beforeunload", function(e) {
    e.returnValue = "true";
});
window.addEventListener("resize", function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
window.addEventListener("keyup", function(e) {
    e.preventDefault();
    if(keys[13] && s === "Menu") {

        playGame();

    }
    if(keys[69]) {
        if(!autofire) autofire = true;
        else autofire = false;
    }
    if(keys[67]) {
        if(!autospin) autospin = true;
        else autospin = false;
    }
    if(keys[79]) {
        tanks[0].dead = true;
    }
    if(keys[49]) {

        if(tanks[0].xppoints > 0 && tanks[0].healthpoints < 8) {

            tanks[0].xppoints--;
            tanks[0].healthpoints++;

        }

    }
    if(keys[50]) {

        if(tanks[0].xppoints > 0 && tanks[0].regenpoints < 8) {

            tanks[0].xppoints--;
            tanks[0].regenpoints++;

        }

    }
    if(keys[51]) {

        if(tanks[0].xppoints > 0 && tanks[0].bodydamagepoints < 8) {

            tanks[0].xppoints--;
            tanks[0].bodydamagepoints++;

        }

    }
    if(keys[52]) {

        if(tanks[0].xppoints > 0 && tanks[0].bulletSpoints < 8) {

            tanks[0].xppoints--;
            tanks[0].bulletSpoints++;

        }

    }
    if(keys[53]) {

        if(tanks[0].xppoints > 0 && tanks[0].bulletDpoints < 8) {

            tanks[0].xppoints--;
            tanks[0].bulletDpoints++;

        }

    }
    if(keys[54]) {

        if(tanks[0].xppoints > 0 && tanks[0].bulletPpoints < 8) {

            tanks[0].xppoints--;
            tanks[0].bulletPpoints++;

        }

    }
    if(keys[55]) {

        if(tanks[0].xppoints > 0 && tanks[0].reloadpoints < 8) {

            tanks[0].xppoints--;
            tanks[0].reloadpoints++;

        }

    }
    if(keys[56]) {

        if(tanks[0].xppoints > 0 && tanks[0].movementspeedpoints < 8) {

            tanks[0].xppoints--;
            tanks[0].movementspeedpoints++;

        }

    }
    keys[e.keyCode] = false;
});

if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    }, false);
} else {
    document.attachEvent('oncontextmenu', function() {
        window.event.returnValue = false;
    });
}
