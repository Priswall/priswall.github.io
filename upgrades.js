function upgradeScreen() {

    c.textAlign = "center";
    c.font = "bold 15px Ubuntu";
    canvas.style.cursor = "default";

    if((tanks[0].lvl > 14 && tanks[0].id == 0) || (tanks[0].lvl > 29 && tanks[0].id < 5) || (tanks[0].lvl > 44 && (tanks[0].id < 10 || tanks[0].id == 21 || tanks[0].id == 14 || tanks[0].id >= 23))) {

        if(tankorder[tanks[0].id].length > 0) {

            c.fillStyle = "rgb(200, 100, 100)";
            c.fillRect(15, 15, 100, 50);
            c.fillStyle = "rgb(200, 75, 75)";
            c.fillRect(15, 65, 100, 50);

            if(mousex > 15 && mousex < 115 && mousey > 15 && mousey < 115) {
                canvas.style.cursor = "pointer";
                if(mouseUP) {
                    resetStats(tankorder[tanks[0].id][0]);
                    tanks[0].id = tankorder[tanks[0].id][0];
                }
            }
        }

        if(tankorder[tanks[0].id].length > 1) {

            c.fillStyle = "rgb(200, 200, 100)";
            c.fillRect(130, 15, 100, 50);
            c.fillStyle = "rgb(200, 200, 75)";
            c.fillRect(130, 65, 100, 50);

            if(mousex > 130 && mousex < 230 && mousey > 15 && mousey < 115) {
                canvas.style.cursor = "pointer";
                if(mouseUP) {
                    resetStats(tankorder[tanks[0].id][1]);
                    tanks[0].id = tankorder[tanks[0].id][1];
                }
            }

        }

        if(tankorder[tanks[0].id].length > 2) {

            c.fillStyle = "rgb(100, 200, 100)";
            c.fillRect(15, 130, 100, 50);
            c.fillStyle = "rgb(75, 200, 75)";
            c.fillRect(15, 180, 100, 50);

            if(mousex > 15 && mousex < 115 && mousey > 130 && mousey < 230) {
                canvas.style.cursor = "pointer";
                if(mouseUP) {
                    resetStats(tankorder[tanks[0].id][2]);
                    tanks[0].id = tankorder[tanks[0].id][2];
                }
            }

        }

        if(tankorder[tanks[0].id].length > 3) {

            c.fillStyle = "rgb(100, 100, 200)";
            c.fillRect(130, 130, 100, 100);
            c.fillStyle = "rgb(75, 75, 200)";
            c.fillRect(130, 180, 100, 50);

            if(mousex > 130 && mousex < 230 && mousey > 130 && mousey < 230) {
                canvas.style.cursor = "pointer";
                if(mouseUP) {
                    resetStats(tankorder[tanks[0].id][3]);
                    tanks[0].id = tankorder[tanks[0].id][3];
                }
            }

        }

        c.lineWidth = 3;
        c.strokeStyle = "rgb(100, 100, 100)";

        if(tankorder[tanks[0].id].length > 0) {
            c.strokeRect(15, 15, 100, 100);
        } if(tankorder[tanks[0].id].length > 1) {
            c.strokeRect(130, 15, 100, 100);
        } if(tankorder[tanks[0].id].length > 2) {
            c.strokeRect(15, 130, 100, 100);
        } if(tankorder[tanks[0].id].length > 3) {
            c.strokeRect(130, 130, 100, 100);
        }

        if(tankorder[tanks[0].id].length > 0) {

            c.fillStyle = "rgb(200, 200, 200)";
            c.strokeStyle = "rgb(150, 150, 150)";
            c.save();
            c.translate(65, 55);
            c.rotate(frame * (Math.PI / 180));
            c.scale(0.6, 0.6);
            tankshow[tankorder[tanks[0].id][0]]();

            c.fillStyle = "rgb(100, 200, 250)";
            c.strokeStyle = "rgb(50, 150, 200)";
            c.beginPath();
            c.arc(0, 0, 25, 0, 2 * Math.PI);
            c.fill();
            c.stroke();
            c.resetTransform();

            c.fillStyle = "rgb(200, 200, 200)";
            c.fillText(classes[tankorder[tanks[0].id][0]], 65, 105);

        }

        if(tankorder[tanks[0].id].length > 1) {

            c.fillStyle = "rgb(200, 200, 200)";
            c.strokeStyle = "rgb(150, 150, 150)";
            c.translate(180, 55);
            c.rotate(frame * (Math.PI / 180));
            c.scale(0.6, 0.6);
            tankshow[tankorder[tanks[0].id][1]]();

            c.fillStyle = "rgb(100, 200, 250)";
            c.strokeStyle = "rgb(50, 150, 200)";
            c.beginPath();
            c.arc(0, 0, 25, 0, 2 * Math.PI);
            c.fill();
            c.stroke();
            c.resetTransform();

            c.fillStyle = "rgb(200, 200, 200)";
            c.fillText(classes[tankorder[tanks[0].id][1]], 180, 105);

        } if(tankorder[tanks[0].id].length > 2) {

            c.fillStyle = "rgb(200, 200, 200)";
            c.strokeStyle = "rgb(150, 150, 150)";
            c.translate(65, 170);
            c.rotate(frame * (Math.PI / 180));
            c.scale(0.6, 0.6);
            tankshow[tankorder[tanks[0].id][2]]();

            c.fillStyle = "rgb(100, 200, 250)";
            c.strokeStyle = "rgb(50, 150, 200)";
            c.beginPath();
            c.arc(0, 0, 25, 0, 2 * Math.PI);
            c.fill();
            c.stroke();
            c.resetTransform();

            c.fillStyle = "rgb(200, 200, 200)";
            c.fillText(classes[tankorder[tanks[0].id][2]], 65, 220);

        } if(tankorder[tanks[0].id].length > 3) {

            c.fillStyle = "rgb(200, 200, 200)";
            c.strokeStyle = "rgb(150, 150, 150)";
            c.translate(180, 170);
            c.rotate(frame * (Math.PI / 180));
            c.scale(0.6, 0.6);
            tankshow[tankorder[tanks[0].id][3]]();

            c.fillStyle = "rgb(100, 200, 250)";
            c.strokeStyle = "rgb(50, 150, 200)";
            c.beginPath();
            c.arc(0, 0, 25, 0, 2 * Math.PI);
            c.fill();
            c.stroke();
            c.resetTransform();

            c.fillStyle = "rgb(200, 200, 200)";
            c.fillText(classes[tankorder[tanks[0].id][3]], 180, 220);
        }
        c.restore();

    }

}

function resetStats(id) {

    switch(id) {

        case 1:
            tanks[0].knockback = tankstats.sniper.knockback;
            tanks[0].spread = tankstats.sniper.spread;
            tanks[0].bulletS = tankstats.sniper.bspeed;
            tanks[0].reload = tankstats.sniper.reload;
            tanks[0].BulletS = tankstats.sniper.bspeed;
            tanks[0].Reload = tankstats.sniper.reload;
            break;

        case 2:
            tanks[0].knockback = tankstats.twin.knockback;
            tanks[0].spread = tankstats.twin.spread;
            tanks[0].bulletS = tankstats.twin.bspeed;
            tanks[0].reload = tankstats.twin.reload;
            tanks[0].BulletS = tankstats.twin.bspeed;
            tanks[0].Reload = tankstats.twin.reload;
            break;

        case 3:
            tanks[0].knockback = tankstats.flankguard.knockback;
            tanks[0].spread = tankstats.flankguard.spread;
            tanks[0].bulletS = tankstats.flankguard.bspeed;
            tanks[0].reload = tankstats.flankguard.reload;
            tanks[0].BulletS = tankstats.flankguard.bspeed;
            tanks[0].Reload = tankstats.flankguard.reload;
            break;

        case 4:
            tanks[0].knockback = tankstats.machinegun.knockback;
            tanks[0].spread = tankstats.machinegun.spread;
            tanks[0].bulletS = tankstats.machinegun.bspeed;
            tanks[0].reload = tankstats.machinegun.reload;
            tanks[0].BulletS = tankstats.machinegun.bspeed;
            tanks[0].Reload = tankstats.machinegun.reload;
            break;

        case 5:
            tanks[0].knockback = tankstats.assassin.knockback;
            tanks[0].spread = tankstats.assassin.spread;
            tanks[0].bulletS = tankstats.assassin.bspeed;
            tanks[0].reload = tankstats.assassin.reload;
            tanks[0].BulletS = tankstats.assassin.bspeed;
            tanks[0].Reload = tankstats.assassin.reload;
            break;

        case 6:
            tanks[0].knockback = tankstats.predator.knockback;
            tanks[0].spread = tankstats.predator.spread;
            tanks[0].bulletS = tankstats.predator.bspeed;
            tanks[0].reload = tankstats.predator.reload;
            tanks[0].BulletS = tankstats.predator.bspeed;
            tanks[0].Reload = tankstats.predator.reload;
            break;

        case 7:
            tanks[0].knockback = tankstats.flamethrower.knockback;
            tanks[0].spread = tankstats.flamethrower.spread;
            tanks[0].bulletS = tankstats.flamethrower.bspeed;
            tanks[0].reload = tankstats.flamethrower.reload;
            tanks[0].BulletS = tankstats.flamethrower.bspeed;
            tanks[0].Reload = tankstats.flamethrower.reload;
            break;

    }

}
