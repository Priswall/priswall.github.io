var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");
var bgimg = new Image();
bgimg.onload = function() {
    requestAnimationFrame(draw);
};
bgimg.src = "background.png";
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
var killedScreen = null;
var transitioningToGame = false;
var transitioningToMenu = false;
var frame = 0;
var gamemodes = ["FFA", "Teams"];
var gamemode = 0;
var op = 10;
var menuFriction = -0.015;
var menuVel = 1;
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
var playerStats = null;

document.getElementById("form").appendChild(input);

function disappearInput() {

    menuVel += menuFriction * 0.75;
    op -= menuVel * 0.75;

    c.save();
    c.globalAlpha = 1 - (op / 10);
    c.drawImage(bgimg, (canvas.width / 2) - (bgimg.width / 2), (canvas.height / 2) - (bgimg.height / 2));
    c.restore();

    input.style.opacity = 1 - (op / 10);
    input.style.border = "5px solid black";
    input.style.left = ((canvas.width / 2) - (input.size * 5)) + "px";
    input.style.top = ((canvas.height / 3) - (50 * (op / 13))) + "px";
    input.blur();

    if(op > 9) {
        input.style.opacity = 0;
        transitioningToGame = false;
    }
}

function bringBackMenu() {
        menuVel += menuFriction * 0.75;
        op -= menuVel * 0.75;

        c.save();
        c.globalAlpha = 1 - (op / 10);
        c.drawImage(bgimg, (canvas.width / 2) - (bgimg.width / 2), (canvas.height / 2) - (bgimg.height / 2));
        c.restore();

        input.style.opacity = 1 - (op / 10);
        input.style.border = "5px solid black";
        input.style.left = ((canvas.width / 2) - (input.size * 5)) + "px";
        input.style.top = ((canvas.height / 3) - (50 * (op / 13))) + "px";

        if(1 - (op / 10) > 1) {
            tanks = [];
            input.focus();
        }
}

function returnMenu() {
    s = "Death Screen";
}

function playGame() {

    s = "FFA";
    menuVel = -0.5;
    transitioningToGame = true;
    if(input.value === "") {
        tanks.push(new tank((Math.random() * 3400), (Math.random() * 3400), 0, 0, "Unnamed Tank", 0, 0, 0, 0));
    } else {
            tanks.push(new tank((Math.random() * 3400), (Math.random() * 3400), 0, 0, input.value, 0, 0, 0, 0));
    }

}

function saveStats(tank) {
    playerStats = tank;
}

function draw() {

    frame++;

    millis = new Date();
    millis = millis.getTime();
    if(start === 0) {
        start = millis;
    }

    if(s === "Menu") {
        if(menuVel > 0 && !transitioningToGame) {
            menuVel += menuFriction * 0.75;
            op -= menuVel * 0.75;

            c.save();
            c.globalAlpha = 1 - (op / 10);
            c.drawImage(bgimg, (canvas.width / 2) - (bgimg.width / 2), (canvas.height / 2) - (bgimg.height / 2));
            c.restore();

            input.style.opacity = 1 - (op / 10);
            input.style.border = "5px solid black";
            input.style.left = ((canvas.width / 2) - (input.size * 5)) + "px";
            input.style.top = ((canvas.height / 3) - (50 * (op / 13))) + "px";

        }

    } else if(s === "FFA" || s === "Death Screen") {

        if(shapes.length < 150) {
            for(var i = 0; i < 50; i++) {
                shapes.push(new shape());
            }
        }

        if(autospin) {
            mousex = (canvas.width / 2) + Math.sin(millis / 1500) * 200;
            mousey = (canvas.height / 2) + Math.cos(millis / 1500) * 200;
        }

        if(s === "FFA") {
            camx = (canvas.width / 2) - tanks[0].x;
            camy = (canvas.height / 2) - tanks[0].y;
        } else if(killedScreen !== null){
            camx = (canvas.width / 2) - killedScreen.x;
            camy = (canvas.height / 2) - killedScreen.y;
        }

        c.lineCap = "round";

        c.strokeStyle = "rgb(180, 180, 180)";
        c.lineWidth = 1;

        c.fillStyle = "rgb(200, 200, 200)";
        c.fillRect(0, 0, canvas.width, canvas.height);

        c.save();
        c.translate(camx, camy);

        c.fillStyle = "rgb(220, 220, 220, 1)";
        c.fillRect(-1500, -1500, 3000, 3000);

        c.resetTransform();

        if(s == "FFA") {
            for(var i = 0; i < canvas.width / 10; i++) {
                line(0, (i * 25) - tanks[0].y % 25, canvas.width, (i * 25) - tanks[0].y % 25);
                line((i * 25) - tanks[0].x % 25, 0, (i * 25) - tanks[0].x % 25, canvas.height);
            }
        } else {
            if(killedScreen !== null) {
                for(var i = 0; i < canvas.width / 10; i++) {
                    line(0, (i * 25) - killedScreen.y % 25, canvas.width, (i * 25) - killedScreen.y % 25);
                    line((i * 25) - killedScreen.x % 25, 0, (i * 25) - killedScreen.x % 25, canvas.height);
                }
            }
        }
        c.translate(camx, camy);

        c.lineWidth = 3;

        for(var i = shapes.length - 1; i >= 0; i--) {

            if(shapes[i].x + 50 > -camx && shapes[i].x - 50 < -camx + canvas.width && shapes[i].y + 50 > -camy && shapes[i].y - 50 < -camy + canvas.height){
                // if(shapes[i].time !== frame - 1) {
                //     var x = shapes[i].velx * (frame - shapes[i].time);
                //     var y = shapes[i].vely * (frame - shapes[i].time);
                //     shapes[i].x -= x;
                //     if(y > 0) {
                //         shapes[i].y -= y;
                //     }
                // }
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
                    tanks[j].gotHit(shapes[i]);
                    tanks[j].health--;

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
                    bullets.push(new bullet(bullets[i].x, bullets[i].y, bullets[i].x + Math.sin(0), bullets[i].y - Math.cos(0), 3, 0, bullets[i].t, 2, bullets[i].d / 3, 0.5, 1, bullets[i].user));
                    bullets.push(new bullet(bullets[i].x, bullets[i].y, bullets[i].x + Math.sin(Math.PI), bullets[i].y - Math.cos(Math.PI), 3, 0, bullets[i].t, 2, bullets[i].d, 0.5, 1, bullets[i].user));
                    bullets.push(new bullet(bullets[i].x, bullets[i].y, bullets[i].x + Math.sin(0.5236), bullets[i].y - Math.cos(0.5236), 3, 0, bullets[i].t, 2, bullets[i].d, 0.5, 1, bullets[i].user));
                    bullets.push(new bullet(bullets[i].x, bullets[i].y, bullets[i].x + Math.sin(-0.5236), bullets[i].y - Math.cos(-0.5236), 3, 0, bullets[i].t, 2, bullets[i].d, 0.5, 1, bullets[i].user));
                    bullets.push(new bullet(bullets[i].x, bullets[i].y, bullets[i].x + Math.sin(1.0472), bullets[i].y - Math.cos(1.0472), 3, 0, bullets[i].t, 2, bullets[i].d, 0.5, 1, bullets[i].user));
                    bullets.push(new bullet(bullets[i].x, bullets[i].y, bullets[i].x + Math.sin(-1.0472), bullets[i].y - Math.cos(-1.0472), 3, 0, bullets[i].t, 2, bullets[i].d, 0.5, 1, bullets[i].user));
                    bullets.push(new bullet(bullets[i].x, bullets[i].y, bullets[i].x + Math.sin(1.5708), bullets[i].y - Math.cos(1.5708), 3, 0, bullets[i].t, 2, bullets[i].d, 0.5, 1, bullets[i].user));
                    bullets.push(new bullet(bullets[i].x, bullets[i].y, bullets[i].x + Math.sin(-1.5708), bullets[i].y - Math.cos(-1.5708), 3, 0, bullets[i].t, 2, bullets[i].d, 0.5, 1, bullets[i].user));
                    bullets.push(new bullet(bullets[i].x, bullets[i].y, bullets[i].x + Math.sin(2.0944), bullets[i].y - Math.cos(2.0944), 3, 0, bullets[i].t, 2, bullets[i].d, 0.5, 1, bullets[i].user));
                    bullets.push(new bullet(bullets[i].x, bullets[i].y, bullets[i].x + Math.sin(-2.0944), bullets[i].y - Math.cos(-2.0944), 3, 0, bullets[i].t, 2, bullets[i].d, 0.5, 1, bullets[i].user));
                    bullets.push(new bullet(bullets[i].x, bullets[i].y, bullets[i].x + Math.sin(2.618), bullets[i].y - Math.cos(2.618), 3, 0, bullets[i].t, 2, bullets[i].d, 0.5, 1, bullets[i].user));
                    bullets.push(new bullet(bullets[i].x, bullets[i].y, bullets[i].x + Math.sin(-2.618), bullets[i].y - Math.cos(-2.618), 3, 0, bullets[i].t, 2, bullets[i].d, 0.5, 1, bullets[i].user));
                    bullets.push(new bullet(bullets[i].x, bullets[i].y, bullets[i].x + Math.sin(4.1888), bullets[i].y - Math.cos(4.1888), 3, 0, bullets[i].t, 2, bullets[i].d, 0.5, 1, bullets[i].user));
                    bullets.push(new bullet(bullets[i].x, bullets[i].y, bullets[i].x + Math.sin(-4.1888), bullets[i].y - Math.cos(-4.1888), 3, 0, bullets[i].t, 2, bullets[i].d, 0.5, 1, bullets[i].user));
                }
                if(bullets[i].id === 1) {

                    tanks[0].dr--;

                }
                bullets.splice(i, 1);
            }
        }

        for(var i = tanks.length - 1; i >= 0; i--) {
            tanks[i].show();
        }
        if(tanks[0]) {
            tanks[0].update(Math.atan2(-(tanks[0].x - (mousex - camx)), (tanks[0].y - (mousey - camy))));
        }

        c.restore();

        if(s === "FFA") {

            c.lineWidth = 20;
            c.strokeStyle = "rgba(50, 50, 50, 0.8)";
            line((canvas.width / 2) - 250, canvas.height - 25, (canvas.width / 2) + 250, canvas.height - 25);

            tanks[0].xp += tanks[0].showxp / 5;
            tanks[0].showxp /= 5;

            c.lineWidth = 14;
            c.strokeStyle = "rgb(250, 250, 150)";
            line((canvas.width / 2) - 250, canvas.height - 25, ((canvas.width / 2) - 250) + (tanks[0].xp * (((canvas.width / 2) + 250) / (xpamt[tanks[0].lvl] * 1.199))), canvas.height - 25);

            c.fillStyle = "white";
            c.strokeStyle = "black";
            c.textAlign = "center";
            c.textBaseline = "middle";
            c.font = "bold 15px Ubuntu";
            c.lineWidth = 1;
            c.fillText("Level " + tanks[0].lvl + " " + classes[tanks[0].id], canvas.width / 2, canvas.height - 25);
            c.font = "bold 25px Ubuntu";
            c.fillText(tanks[0].name, canvas.width / 2, canvas.height - 50);
            c.strokeText(tanks[0].name, canvas.width / 2, canvas.height - 50);

            upgradeScreen();

            if(tanks[0].xppoints > 0) {

            for(var i = 0; i < 8; i++) {

                c.strokeStyle = "rgb(50, 50, 50, 0.8)";
                c.lineWidth = 16;
                line(20, canvas.height - (20 + (i * 23)), 200, canvas.height - (20 + (i * 23)));

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
    } else {

            c.lineWidth = 3;

            c.fillStyle = "rgba(0, 0, 0, 0.5";
            c.fillRect(0, 0, canvas.width, canvas.height);

            if(killedScreen !== null) {

                c.fillStyle = "rgb(255, 255, 255)";
                c.font = "bold 40px Ubuntu";
                c.fillText("You were killed by " + killedScreen.n, canvas.width / 2, 100);
                c.font = "bold 30px Ubuntu";
                c.fillText("Level " + killedScreen.lvl, (canvas.width / 2) - 250, 350);
                c.fillText(classes[killedScreen.id], (canvas.width / 2) - 250, 380);
                c.font = "bold 20px Ubuntu";
                c.fillText("Health left: " + killedScreen.Health, (canvas.width / 2) - 80, 250);

                line(canvas.width / 2, 170, canvas.width / 2, 330);

                c.textAlign = "left";
                c.font = "bold 15px Ubuntu";
                c.fillText("Max Health: " + killedScreen.healthpoints, (canvas.width / 2) + 20, 180);
                c.fillText("Health Regen: " + killedScreen.regenpoints, (canvas.width / 2) + 20, 200);
                c.fillText("Body Damage: " + killedScreen.bodydamagepoints, (canvas.width / 2) + 20, 220);
                c.fillText("Bullet Speed: " + killedScreen.bulletSpoints, (canvas.width / 2) + 20, 240);
                c.fillText("Bullet Damage: " + killedScreen.bulletDpoints, (canvas.width / 2) + 20, 260);
                c.fillText("Bullet Penetration: " + killedScreen.bulletPpoints, (canvas.width / 2) + 20, 280);
                c.fillText("Reload: " + killedScreen.reloadpoints, (canvas.width / 2) + 20, 300);
                c.fillText("Movement Speed: " + killedScreen.movementspeedpoints, (canvas.width / 2) + 20, 320);


                c.textAlign = "center";

                c.save();
                c.translate((canvas.width / 2) - 200, 250);
                c.scale(1.2, 1.2);
                c.rotate(frame / 100);

                c.fillStyle = "rgb(200, 200, 200)";
                c.strokeStyle = "rgb(150, 150, 150)";
                tankshow[killedScreen.id]();

                c.fillStyle = "rgb(100, 200, 250)";
                c.strokeStyle = "rgb(50, 150, 200)";
                circle(0, 0, 25);

                c.restore();

            } else {

                c.font = "bold 40px Ubuntu";
                c.fillStyle = "rgb(255, 255, 255)";
                c.fillText("You died to a shape. R.I.P.", canvas.width / 2, canvas.height / 2);

            }

            c.font = "bold 20px Ubuntu";
            c.fillStyle = "rgb(255, 255, 255)";
            c.fillText("(press enter to continue)", canvas.width / 2, (canvas.height / 7) * 6);

        }

    }

    if(transitioningToGame) {
        disappearInput();
    }else if(transitioningToMenu && menuVel > 0 && !transitioningToGame) {
        bringBackMenu();
    } else if(transitioningToMenu && menuVel <= 0 && !transitioningToGame) {
        transitioningToMenu = false;
        s == "Menu";
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
    switch(e.keyCode) {

        case 13:
            if(s === "Menu" && !transitioningToGame) {
                playGame();
            } else if(s === "Death Screen") {
                op = 10;
                menuVel = 1;
                transitioningToMenu = true;
                s = "Menu";
            }
            break;

        case 69:
            if(!autofire) autofire = true;
            else autofire = false;
            break;

        case 67:
            if(!autospin) autospin = true;
            else autospin = false;
            break;

        case 79:
            if(s !== "Menu") {
                tanks[0].dead = true;
                tanks[0].gotHit(tanks[0]);
            }
            break;

        case 49:
            if(tanks[0].xppoints > 0 && tanks[0].healthpoints < 8) {
                tanks[0].xppoints--;
                tanks[0].healthpoints++;
            }
            break;

        case 50:
            if(tanks[0].xppoints > 0 && tanks[0].regenpoints < 8) {
                tanks[0].xppoints--;
                tanks[0].regenpoints++;
            }
            break;

        case 51:
            if(tanks[0].xppoints > 0 && tanks[0].bodydamagepoints < 8) {
                tanks[0].xppoints--;
                tanks[0].bodydamagepoints++;
            }
            break;

            case 52:
            if(tanks[0].xppoints > 0 && tanks[0].bulletSpoints < 8) {
                tanks[0].xppoints--;
                tanks[0].bulletSpoints++;
            }
            break;

        case 53:
            if(tanks[0].xppoints > 0 && tanks[0].bulletDpoints < 8) {
                tanks[0].xppoints--;
                tanks[0].bulletDpoints++;
            }
            break;

        case 54:
            if(tanks[0].xppoints > 0 && tanks[0].bulletPpoints < 8) {
                tanks[0].xppoints--;
                tanks[0].bulletPpoints++;
            }
            break;

        case 55:
            if(tanks[0].xppoints > 0 && tanks[0].reloadpoints < 8) {
                tanks[0].xppoints--;
                tanks[0].reloadpoints++;
            }
            break;

        case 56:
            if(tanks[0].xppoints > 0 && tanks[0].movementspeedpoints < 8) {
                tanks[0].xppoints--;
                tanks[0].movementspeedpoints++;
            }
            break;
    }
    keys[e.keyCode] = false;
});
document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
}, false);

function line(x1, y1, x2, y2) {
    c.beginPath();
    c.moveTo(x1, y1);
    c.lineTo(x2, y2);
    c.stroke();
};
function circle(x, y, r) {
    c.beginPath();
    c.arc(x, y, r, 0, 2 * Math.PI);
    c.fill();
    c.stroke();
}
