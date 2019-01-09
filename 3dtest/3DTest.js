var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");

function cube(x, y, z, w, h, l) {
    this.OGpoints = [
        new point3d(x - (w / 2), y - (h / 2), z + (l / 2)),
        new point3d(x + (w / 2), y - (h / 2), z + (l / 2)),
        new point3d(x + (w / 2), y + (h / 2), z + (l / 2)),
        new point3d(x - (w / 2), y + (h / 2), z + (l / 2)),
        new point3d(x - (w / 2), y - (h / 2), z - (l / 2)),
        new point3d(x + (w / 2), y - (h / 2), z - (l / 2)),
        new point3d(x + (w / 2), y + (h / 2), z - (l / 2)),
        new point3d(x - (w / 2), y + (h / 2), z - (l / 2))
    ];
    this.points = this.OGpoints;
    this.edges = [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 0],
        [7, 4],
        [4, 5],
        [5, 6],
        [6, 7],
        [0, 4],
        [1, 5],
        [2, 6],
        [3, 7]
    ];
    this.faces = [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [5, 1, 2, 6],
        [6, 7, 3, 2],
        [3, 0, 4, 1],
        [5, 4, 1, 0]
    ];

    this.matmul = function(point, matrix) {

        var result = [];
        for(var i = 0; i < point.length; i++) {
            var x = (point[i].x * matrix[0][0]) + (point[i].y * matrix[0][1]) + (point[i].z * matrix[0][2]);
            var y = (point[i].x * matrix[1][0]) + (point[i].y * matrix[1][1]) + (point[i].z * matrix[1][2]);
            var z = (point[i].x * matrix[2][0]) + (point[i].y * matrix[2][1]) + (point[i].z * matrix[2][2]);

            result[i] = new point3d(x, y, z);
        }

        return result;

    }

    this.update = function() {
        this.points = this.matmul(this.OGpoints, matrix);
        this.points = this.matmul(this.points, rotateX);
        this.points = this.matmul(this.points, rotateY);
        this.points = this.matmul(this.points, rotateZ);
    }

    this.show = function() {
        for(var i = 0; i < this.edges.length; i++) {

            c.lineWidth = (((this.points[this.edges[i][0]].z + 50) + (this.points[this.edges[i][1]].z + 50)) / 2) / 10;
            c.beginPath();
            c.moveTo(this.points[this.edges[i][0]].x, this.points[this.edges[i][0]].y);
            c.lineTo(this.points[this.edges[i][1]].x, this.points[this.edges[i][1]].y);
            c.stroke();

        }

        for(var i = 0; i < this.points.length; i++) {

            c.fillStyle = "rgb(255, 255, 255)";
            c.fillText(i, this.points[i].x, this.points[i].y);

        }

//         for(var i = 0; i < this.faces.length; i++) {

//             c.fillStyle = "rgb(" + i * 40 + ", 50, 50)";

//             c.beginPath();
//             c.moveTo(this.points[this.faces[i][0]].x, this.points[this.faces[i][0]].y);
//             c.lineTo(this.points[this.faces[i][1]].x, this.points[this.faces[i][1]].y);
//             c.lineTo(this.points[this.faces[i][2]].x, this.points[this.faces[i][2]].y);
//             c.lineTo(this.points[this.faces[i][3]].x, this.points[this.faces[i][3]].y);
//             c.fill();

//         }

    }
}

var cubes = [];
var frame = 0;
var mouseX = 300, mouseY = 300, posX = 0, posY = 80, posZ, camX = 0, camY = 0;

var matrix = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
]

var rotateX = [
    [1, 0, 0],
    [0, Math.cos(frame / 50), -Math.sin(frame / 50)],
    [0, Math.sin(frame / 50), Math.cos(frame / 50)]
];

var rotateY = [
    [Math.cos(frame / 50), 0, Math.sin(frame / 50)],
    [0, 1, 0],
    [-Math.sin(frame / 50), 0, Math.cos(frame / 50)]
];

var rotateZ = [
    [Math.cos(frame / 50), -Math.sin(frame / 50), 0],
    [Math.sin(frame / 50), Math.cos(frame / 50), 0],
    [0, 0, 1]
];

function point2d(x, y) {

    this.x = x;
    this.y = y;

}

function point3d(x, y, z) {

    this.x = x;
    this.y = y;
    this.z = z;

};

cubes.push(new cube(0, 0, 0, 50, 50, 50));
// cubes.push(new cube(0, 50, 0, 50, 50, 50));
// cubes.push(new cube(0, 0, 50, 50, 50, 50));

function draw() {

    frame++;

    c.fillStyle = "rgb(75, 75, 75)";
    c.fillRect(0, 0, canvas.width, canvas.height);

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

    // rotateZ = [
    //     [Math.cos(Math.atan2(-((canvas.width / 2) + mouseX), ((canvas.height / 2) + mouseY)) * (180 / Math.PI)), -Math.sin(Math.atan2(-((canvas.width / 2) + mouseX), ((canvas.height / 2) + mouseY)) * (180 / Math.PI)), 0],
    //     [Math.sin(Math.atan2(-((canvas.width / 2) + mouseX), ((canvas.height / 2) + mouseY)) * (180 / Math.PI)), Math.cos(Math.atan2(((canvas.width / 2) + mouseX), ((canvas.height / 2) + mouseY)) * (180 / Math.PI)), 0],
    //     [0, 0, 1]
    // ];

    window.requestAnimationFrame(draw);
};

window.requestAnimationFrame(draw);
window.addEventListener("mousemove", function(e) {

    mouseX = e.clientX;
    mouseY = e.clientY;
    camX = e.clientX - canvas.width / 2;
    camY = e.clientY - canvas.height / 2;

});
