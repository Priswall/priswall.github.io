var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");

function Face(point1, point2, point3, point4) {
  this.OGpoints =[point1, point2, point3,  point4];
  this.points = this.OGpoints;
  this.z = 0;
  this.c = "rgb(" + Math.round(Math.random() * 255) + ", " + Math.round(Math.random() * 255) + ", " + Math.round(Math.random() * 255) + ")";
}

function point3d(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
};

function cube(x, y, z, w, h, l) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.faces = [
        new Face(
            new point3d(x - (w / 2), y - (h / 2), z + (l / 2)),
            new point3d(x + (w / 2), y - (h / 2), z + (l / 2)),
            new point3d(x + (w / 2), y + (h / 2), z + (l / 2)),
            new point3d(x - (w / 2), y + (h / 2), z + (l / 2))
        ),
        new Face(
            new point3d(x - (w / 2), y - (h / 2), z - (l / 2)),
            new point3d(x + (w / 2), y - (h / 2), z - (l / 2)),
            new point3d(x + (w / 2), y + (h / 2), z - (l / 2)),
            new point3d(x - (w / 2), y + (h / 2), z - (l / 2))
        ),
        new Face(
            new point3d(x - (w / 2), y - (h / 2), z - (l / 2)),
            new point3d(x - (w / 2), y - (h / 2), z + (l / 2)),
            new point3d(x + (w / 2), y - (h / 2), z + (l / 2)),
            new point3d(x + (w / 2), y - (h / 2), z - (l / 2))
        ),
        new Face(
            new point3d(x + (w / 2), y + (h / 2), z - (l / 2)),
            new point3d(x - (w / 2), y + (h / 2), z - (l / 2)),
            new point3d(x - (w / 2), y + (h / 2), z + (l / 2)),
            new point3d(x + (w / 2), y + (h / 2), z + (l / 2))
        ),
        new Face(
            new point3d(x - (w / 2), y + (h / 2), z + (l / 2)),
            new point3d(x - (w / 2), y - (h / 2), z + (l / 2)),
            new point3d(x - (w / 2), y - (h / 2), z - (l / 2)),
            new point3d(x - (w / 2), y + (h / 2), z - (l / 2))
        ),
        new Face(
            new point3d(x + (w / 2), y - (h / 2), z - (l / 2)), 
            new point3d(x + (w / 2), y + (h / 2), z - (l / 2)),
            new point3d(x + (w / 2), y + (h / 2), z + (l / 2)),
            new point3d(x + (w / 2), y - (h / 2), z + (l / 2))
        )
    ];

    this.matmul = function(point, matrix) {
        var result = [];
        for(var i = 0; i < point.length; i++) {
            var x = (point[i].x * matrix[0][0]) + (point[i].y * matrix[0][1]) + (point[i].z * matrix[0][2]) + pos.x;
            var y = (point[i].x * matrix[1][0]) + (point[i].y * matrix[1][1]) + (point[i].z * matrix[1][2]);
            var z = (point[i].x * matrix[2][0]) + (point[i].y * matrix[2][1]) + (point[i].z * matrix[2][2]);
            result[i] = new point3d(x, y, z);
        }
        return result;
    }

    this.update = function() {
        for(var i = 0; i < this.faces.length; i++) {
            this.faces[i].points = this.matmul(this.faces[i].OGpoints, matrix);
            this.faces[i].points = this.matmul(this.faces[i].points, rotateX);
            this.faces[i].points = this.matmul(this.faces[i].points, rotateY);
            this.faces[i].points = this.matmul(this.faces[i].points, rotateZ);
        }
    }

    this.show = function() {
        for(var i = 0; i < this.faces.length; i++) {
//             if(this.faces[i].z > 0) {
                c.strokeStyle = this.faces[i].c;
                c.beginPath();
                c.moveTo(this.faces[i].points[0].x, this.faces[i].points[0].y);
                c.lineTo(this.faces[i].points[1].x, this.faces[i].points[1].y);
                c.lineTo(this.faces[i].points[2].x, this.faces[i].points[2].y);
                c.lineTo(this.faces[i].points[3].x, this.faces[i].points[3].y);
                c.lineTo(this.faces[i].points[0].x, this.faces[i].points[0].y);
                c.stroke();
//             }
            this.faces[i].z = (this.faces[i].points[0].z + this.faces[i].points[1].z + this.faces[i].points[2].z + this.faces[i].points[3].z) / 4;
        }
        this.faces.sort(function(a,b) { if (a.z < b.z) return -1; if (a.z > b.z) return 1; return 0; });
    }
}

var cubes = [];
var frame = 0;
var mouseX = 0, mouseY = 0, pos = new point3d(1, 1, 1), camX = 0, camY = 0;
var matrix = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
var rotateX = [[1, 0, 0], [0, Math.cos(frame / 50), -Math.sin(frame / 50)], [0, Math.sin(frame / 50), Math.cos(frame / 50)]];
var rotateY = [[Math.cos(frame / 50), 0, Math.sin(frame / 50)], [0, 1, 0], [-Math.sin(frame / 50), 0, Math.cos(frame / 50)]];
var rotateZ = [[Math.cos(frame / 50), -Math.sin(frame / 50), 0], [Math.sin(frame / 50), Math.cos(frame / 50), 0], [0, 0, 1]];

cubes.push(new cube(0, 0, 0, 50, 50, 50));
cubes.sort(function(a,b) { if (a.z < b.z) return 1; if (a.z > b.z) return -1; return 0; });

function draw() {
    frame++;
    c.fillStyle = "rgb(75, 75, 75)";
    c.fillRect(0, 0, canvas.width, canvas.height);
    camX = mouseX - canvas.width / 2;
    camY = mouseY - canvas.height / 2;
  
    pos.x = Math.sin(frame / 30) * 10;

    c.save();
    c.translate(canvas.width / 2, canvas.height / 2);
    c.fillStyle = "rgb(255, 255, 255)";
    c.strokeStyle = "rgb(255, 255, 255)";
    for(var i = 0; i < cubes.length; i++) {
        cubes[i].update();
        cubes[i].show();
    }
    c.restore();
  
    rotateX = [
        [1, 0, 0],
        [0, Math.cos(-camY / 50), -Math.sin(-camY / 50)],
        [0, Math.sin(-camY / 50), Math.cos(-camY / 50)]
    ];
    rotateY = [
        [Math.cos(-mouseX / 50), 0, Math.sin(-mouseX / 50)],
        [0, 1, 0],
        [-Math.sin(-mouseX / 50), 0, Math.cos(-mouseX / 50)]
    ];
    window.requestAnimationFrame(draw);
};

window.requestAnimationFrame(draw);
window.addEventListener("mousemove", function(e) {
//     mouseX = e.clientX;
//     mouseY = e.clientY;
});
