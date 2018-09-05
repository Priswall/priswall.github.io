function bullet(x, y, dx, dy, r, id, t, s, d, p, k, user) {

    this.x = x;
    this.y = y;
    this.rot = 0;
    this.dead = false;
    this.a = 1;
    this.s = 1;
    this.dx = this.x - dx;
    this.dy = this.y - dy;
    this.mag = Math.sqrt(this.dx * this.dx + this.dy * this.dy);
    this.r = r;
    this.id = id;
    this.t = t;
    this.ms = s;
    this.d = d;
    this.p = p;
    this.knockback = k;
    this.user = user;

    this.update = function() {

        this.die();

        if(this.p <= 0) {
            this.dead = true;
        }

        if(this.id !== 1) {

            this.x -= (this.dx / this.mag) * this.ms;
            this.y -= (this.dy / this.mag) * this.ms;

            this.p -= 0.01;

        } else {


            if(mouseIsPressed || autofire){
                if(Math.abs(this.x - (-camx + mousex)) > 10) {
                    this.x -= (this.dx / this.mag) * this.ms;
                }

                if(Math.abs(this.y - (-camy + mousey)) > 10) {
                    this.y -= (this.dy / this.mag) * this.ms;
                }

                this.dx = this.x - (-camx + mousex);
                this.dy = this.y - (-camy + mousey);
                this.mag = Math.sqrt(this.dx * this.dx + this.dy * this.dy);

                if(this.x < -1615) {
                    this.x = -1615;
                }
                if(this.y < -1700) {
                    this.y = -1700;
                }
                if(this.x > 1700) {
                    this.x = 1700;
                }
                if(this.y > 1700) {
                    this.y = 1700;
                }

                this.rot = Math.atan2(-(this.x - (mousex - camx)), (this.y - (mousey - camy)));
            } else {
                if(Math.abs(this.x - (-camx + (canvas.width / 2) + Math.sin(millis / 3000) * 75)) > 10) {
                    this.x -= (this.dx / this.mag) * (Math.abs(this.x - (-camx + (canvas.width / 2) + Math.sin(millis / 3000) * 75)) / 20);
                }

                if(Math.abs(this.y - (-camy + (canvas.width / 2) + Math.cos(millis / 3000) * 75)) > 10) {
                    this.y -= (this.dy / this.mag) * (Math.abs(this.y - (-camy + (canvas.height / 2) + Math.cos(millis / 3000) * 75)) / 20);
                }

                this.dx = this.x - (-camx + (canvas.width / 2) + Math.sin(millis / 3000) * 75);
                this.dy = this.y - (-camy + (canvas.height / 2) + Math.cos(millis / 3000) * 75);
                this.mag = Math.sqrt(this.dx * this.dx + this.dy * this.dy);

                if(this.x < -1615) {
                    this.x = -1615;
                }
                if(this.y < -1700) {
                    this.y = -1700;
                }
                if(this.x > 1700) {
                    this.x = 1700;
                }
                if(this.y > 1700) {
                    this.y = 1700;
                }

                this.rot = Math.atan2(-(this.x - ((canvas.width / 2) + Math.sin(millis / 3000) * 75 - camx)), (this.y - ((canvas.width / 2) + Math.cos(millis / 3000) * 75 - camy)));
            }

        }
        if(this.id === 2 || this.id === 3) {

            this.ms -= 0.1;

        }
        if(this.ms < 0) {

            this.ms = 0;

        }
    };

    this.die = function() {

        if(this.dead) {

            this.a -= 0.1;
            this.s += 0.1;

        }

    };

    this.show = function() {

        c.beginPath();

        switch(this.id) {

            case 0:

            c.save();
            c.translate(this.x, this.y);
            c.lineWidth = 3;
            switch(this.t) {
                case 0:
                c.fillStyle = "rgb(100, 200, 250," + this.a + ")";
                c.strokeStyle = "rgb(50, 150, 200," + this.a + ")";
                break;
                case 1:
                c.fillStyle = "rgb(250, 150, 150," + this.a + ")";
                c.strokeStyle = "rgb(200, 100, 100," + this.a + ")";
                break;
                case 2:
                c.fillStyle = "rgb(150, 250, 150," + this.a + ")";
                c.strokeStyle = "rgb(100, 200, 100," + this.a + ")";
                break;
                case 3:
                c.fillStyle = "rgb(250, 150, 250," + this.a + ")";
                c.strokeStyle = "rgb(200, 100, 200," + this.a + ")";
                break;
            }
            circle(0, 0, this.r + this.s);

            c.restore();
            break;


            case 1:

            c.save();
            c.translate(this.x, this.y);
            c.rotate(this.rot);
            c.lineWidth = 3;
            switch(this.t) {
                case 0:
                c.fillStyle = "rgb(100, 200, 250," + this.a + ")";
                c.strokeStyle = "rgb(50, 150, 200," + this.a + ")";
                break;
                case 1:
                c.fillStyle = "rgb(250, 150, 150," + this.a + ")";
                c.strokeStyle = "rgb(200, 100, 100," + this.a + ")";
                break;
                case 2:
                c.fillStyle = "rgb(150, 250, 150," + this.a + ")";
                c.strokeStyle = "rgb(100, 200, 100," + this.a + ")";
                break;
                case 3:
                c.fillStyle = "rgb(250, 150, 250," + this.a + ")";
                c.strokeStyle = "rgb(200, 100, 200," + this.a + ")";
                break;
            }
            c.moveTo(0, -6);
            c.lineTo(12, 13);
            c.lineTo(-12, 13);
            c.fill();

            c.beginPath();
            c.moveTo(0, -6);
            c.lineTo(12, 13);
            c.stroke();
            c.beginPath();
            c.lineTo(12, 13);
            c.lineTo(-12, 13);
            c.stroke();
            c.beginPath();
            c.lineTo(-12, 13);
            c.lineTo(0, -6);
            c.stroke();

            c.restore();
            break;

            case 2:
            case 3:

            c.save();
            c.translate(this.x, this.y);
            c.rotate(this.rot);
            c.lineWidth = 3;
            c.scale(this.r, this.r);
            switch(this.t) {
                case 0:
                c.fillStyle = "rgb(100, 200, 250," + this.a + ")";
                c.strokeStyle = "rgb(50, 150, 200," + this.a + ")";
                break;
                case 1:
                c.fillStyle = "rgb(250, 150, 150," + this.a + ")";
                c.strokeStyle = "rgb(200, 100, 100," + this.a + ")";
                break;
                case 2:
                c.fillStyle = "rgb(150, 250, 150," + this.a + ")";
                c.strokeStyle = "rgb(100, 200, 100," + this.a + ")";
                break;
                case 3:
                c.fillStyle = "rgb(250, 150, 250," + this.a + ")";
                c.strokeStyle = "rgb(200, 100, 200," + this.a + ")";
                break;
            }

            c.beginPath();
            c.moveTo(0, -30);
            c.lineTo(12.5, -2.5);
            c.lineTo(30, 20);
            c.lineTo(0, 15);
            c.lineTo(-30, 20);
            c.lineTo(-12.5, -2.5);
            c.lineTo(0, -30);
            c.fill();

            c.beginPath();
            c.moveTo(0, -30);
            c.lineTo(12.5, -2.5);
            c.stroke();

            c.beginPath();
            c.moveTo(12.5, -2.5);
            c.lineTo(30, 20);
            c.stroke();

            c.beginPath();
            c.moveTo(30, 20);
            c.lineTo(0, 15);
            c.stroke();

            c.beginPath();
            c.moveTo(0, 15);
            c.lineTo(-30, 20);
            c.stroke();

            c.beginPath();
            c.moveTo(-30, 20);
            c.lineTo(-12.5, -2.5);
            c.stroke();

            c.beginPath();
            c.moveTo(-12.5, -2.5);
            c.lineTo(0, -30);
            c.stroke();

            c.restore();
            break;

        }

    };

}
