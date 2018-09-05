var shapeID = {
    square: 0,
    triangle: 1,
    pentagon: 2,
    giant: 3
};

function shape() {

    this.x = (Math.round(Math.random() * 3000) - 1500);
    this.y = (Math.round(Math.random() * 3000) - 1500);
    if(this.x < 500 && this.x > -500 && this.y < 500 && this.y > -500) {

        this.id = shapeID.pentagon;

        if(Math.random() < 0.3) {

            this.id = shapeID.giant;

        }

    }
    this.s = 1;
    this.time = 0;
    this.a = 1;
    this.cooldown = 500;
    this.timetill = 0;
    this.dead = false;
    this.rand = Math.random();
    this.id = 0;
    this.dh = 0;
    this.r = (Math.random() / 30) - 0.015;
    this.velx = (Math.random() / 2) - 0.25;
    this.vely = (Math.random() / 2) - 0.25;
    switch(this.id) {
        case shapeID.square:
        this.H = 5;
        this.h = 5;
        this.xp = 10;
        break;

        case shapeID.triangle:
        this.H = 15;
        this.h = 15;
        this.xp = 25;
        break;

        case shapeID.pentagon:
        this.H = 30;
        this.h = 30;
        this.xp = 130;
        break;

        case shapeID.giant:
        this.H = 1000;
        this.h = 1000;
        this.xp = 10000;
        this.r = this.r / 5;
        this.velx = 0;
        this.vely = 0;
        break;
    }
    this.rot = 0;
    this.pushx = 0;
    this.pushy = 0;
    this.acc = 0.1;

    this.update = function(time) {

        this.time = time;

        this.die();

        this.x -= this.velx;
        this.y -= this.vely;

        this.x -= this.pushx;
        this.y -= this.pushy;
        this.rot -= this.r;

        if(this.pushx > 0) {

            this.pushx -= this.acc;

        }
        if(this.pushy > 0) {

            this.pushy -= this.acc;

        }

        if(this.pushx < 0) {

            this.pushx += this.acc;

        }
        if(this.pushy < 0) {

            this.pushy += this.acc;

        }

        if(Math.abs(this.pushx) < this.acc) {
            this.pushx = 0;
        }

        if(Math.abs(this.pushy) < this.acc) {
            this.pushy = 0;
        }

        this.h -= this.dh / 2;
        this.dh /= 2;

        if(this.h <= 0) {
            this.dead = true;
        }

        if(this.x < -1615) {
            this.x = -1615;
            this.velx *= -1;
        }
        if(this.y < -1700) {
            this.y = -1700;
            this.vely *= -1;
        }
        if(this.x > 1700) {
            this.x = 1700;
            this.velx *= -1;
        }
        if(this.y > 1700) {
            this.y = 1700;
            this.vely *= -1;
        }

        if(this.cooldown < 500) {
            this.cooldown = millis - this.timetill;
        } else if(this.cooldown > 500) {
            this.cooldown = 500;
        }

    };

    this.gothit = function(other) {

        switch(other.constructor.name) {

            case "shape":
            if(this.id !== shapeID.giant){
                var pr = Math.atan2(-(this.x - other.x), this.y - other.y);
                this.pushx = Math.sin(pr) * 2;
                this.pushy = Math.cos(pr + 3.1416) * 2;
            }
            break;

            case "bullet":
            if(!other.dead && this.cooldown >= 100) {
                if(this.id !== shapeID.giant && (other.id !== 2 && other.id !== 3)){
                    this.pushx += (other.dx / other.mag) * (other.knockback / 5);
                    this.pushy += (other.dy / other.mag) * (other.knockback / 5);
                    this.dh += other.d;
                    this.cooldown = 0;
                    this.timetill = millis;
                } else if(other.id === 2 || other.id === 3) {
                    this.pushx += (other.dx / other.mag) * other.knockback;
                    this.pushy += (other.dy / other.mag) * other.knockback;
                    this.dh += other.d;
                    this.cooldown = 0;
                    this.timetill = millis;
                }
                other.p--;
                other.ms *= 0.8;
            }
            break;

            case "tank":
            if(!other.dead) {
                var pr = Math.atan2(-(this.x - other.x), this.y - other.y);
                if(this.id !== shapeID.giant) {
                    this.pushx = Math.sin(pr);
                    this.pushy = Math.cos(pr + 3.1416);
                    other.velx = Math.sin(pr) / 2;
                    other.vely = Math.cos(pr + 3.1416) / 2;
                    this.dh += other.bodydamagepoints + 1;
                }
            }
            break;

        }

    };

    this.die = function() {

        if(this.dead) {

            this.a -= 0.1;
            this.s += 0.1;

        }

    };

    this.show = function() {

        c.save();
        c.translate(this.x, this.y);
        c.rotate(this.rot);
        c.scale(this.s, this.s);

        switch(this.id) {

            case shapeID.square:
            c.fillStyle = "rgba(250, 250, 150," + this.a + ")";
            c.strokeStyle = "rgba(200, 200, 100," + this.a + ")";

            c.fillRect(-18, -18, 36, 36);

            c.beginPath();
            c.moveTo(-18, -18);
            c.lineTo(18, -18);
            c.stroke();

            c.beginPath();
            c.moveTo(18, -18);
            c.lineTo(18, 18);
            c.stroke();

            c.beginPath();
            c.moveTo(18, 18);
            c.lineTo(-18, 18);
            c.stroke();

            c.beginPath();
            c.moveTo(-18, 18);
            c.lineTo(-18, -18);
            c.stroke();
            break;

            case shapeID.triangle:
            c.fillStyle = "rgba(250, 150, 150," + this.a + ")";
            c.strokeStyle = "rgba(200, 100, 100," + this.a + ")";

            c.beginPath();
            c.moveTo(-20, 12);
            c.lineTo(0, -23);
            c.lineTo(20, 12);
            c.fill();

            c.beginPath();
            c.moveTo(20, 12);
            c.lineTo(0, -23);
            c.stroke();

            c.beginPath();
            c.moveTo(0, -23);
            c.lineTo(-20, 12);
            c.stroke();

            c.beginPath();
            c.moveTo(-20, 12);
            c.lineTo(20, 12);
            c.stroke();
            break;

            case shapeID.pentagon:
            c.fillStyle = "rgba(150, 150, 250," + this.a + ")";
            c.strokeStyle = "rgba(120, 120, 200," + this.a + ")";

            c.beginPath();
            c.moveTo(0, 30);
            c.lineTo(29, 9);
            c.lineTo(18, -24);
            c.lineTo(-18, -24);
            c.lineTo(-29, 9);
            c.lineTo(0, 30);
            c.fill();

            c.beginPath();
            c.moveTo(0, 30);
            c.lineTo(29, 9);
            c.stroke();

            c.beginPath();
            c.moveTo(29, 9);
            c.lineTo(18, -24);
            c.stroke();

            c.beginPath();
            c.moveTo(18, -24);
            c.lineTo(-18, -24);
            c.stroke();

            c.beginPath();
            c.moveTo(-18, -24);
            c.lineTo(-29, 9);
            c.stroke();

            c.beginPath();
            c.moveTo(-29, 9);
            c.lineTo(0, 30);
            c.stroke();
            break;

        }

        c.restore();

        c.lineWidth = 8;
        c.strokeStyle = "rgb(150, 150, 150)";

        if(this.h < this.H && !this.dead) {
            c.beginPath();
            c.moveTo(this.x - 20, this.y + 30);
            c.lineTo(this.x + 20, this.y + 30);
            c.stroke();
            c.lineWidth = 5;
            c.strokeStyle = "rgb(150, 250, 150)";
            c.beginPath();
            c.moveTo(this.x - 20, this.y + 30);
            c.lineTo((this.x - 20) + ((40 / this.H) * this.h), this.y + 30);
            c.stroke();
        }

        c.lineWidth = 3;

    };

}
