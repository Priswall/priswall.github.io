var classes = [
    "Basic Tank",
    "Sniper",
    "Twin",
    "Flank Guard",
    "Machine Gun",
    "Assassin",
    "Overseer",
    "Predator",
    "Twin Flank",
    "Triple spread",
    "Quad Tank",
    "Triplet",
    "Octo Tank",
    "Flamethrower",
    "Manager",
    "Triple Twin",
    "Overlord",
    "Land-miner",
    "Trapper",
    "Mega Trapper",
    "Tri-trapper",
    "Destroyer",
    "Annihilator",
    "Gunner",
    "Triangle",
    "Booster"
];

var xpamt = [
    0,
    0,
    4,
    13,
    28,
    50,
    78,
    113,
    157,
    211,
    272,
    350,
    437,
    536,
    653,
    784,
    938,
    1109,
    1301,
    1516,
    1757,
    2026,
    2325,
    2653,
    3017,
    3416,
    3854,
    4334,
    4857,
    5428,
    6048,
    6720,
    7448,
    8235,
    9084,
    9998,
    10981,
    12036,
    13167,
    14377,
    15671,
    17053,
    18526,
    20094,
    21762,
    23545,
    25000,
    25000,
    25000,
    25000,
    25000,
    25000,
    25000,
    25000,
    25000,
    25000,
    25000,
    25000,
    25000,
    25000,
    25000
];

var tankorder = [

    [
        2,
        1,
        4,
        3
    ],

    [
        5,
        6,
        7,
        18
    ],

    [
        8,
        9,
        10
    ],

    [
        //24,
        //25
    ],

    [
        21,
        23
    ],

    [
    ],

    [
        16
    ],

    [
    ],

    [
        15
    ],

    [
        11
    ],

    [

        12

    ],

    [
    ],

    [
    ],

    [
    ],

    [
    ],

    [
    ],

    [
    ],

    [
    ],

    [
        19,
        20,
        17
    ],

    [
    ],

    [
        22
    ],

    [
    ],

    [
    ],

    [
        13
    ],

];

var tankstats = {

    basic: {
        knockback: 2,
        reload: 500,
        bspeed: 5,
        spread: 5
    },

    sniper: {
        knockback: 3,
        reload: 1000,
        bspeed: 5,
        spread: 2
    },

    twin: {
        knockback: 1,
        reload: 200,
        bspeed: 5,
        bdamage: 3,
        bpenetration: 3,
        spread: 3
    },

    flankguard: {
        knockback: 3,
        reload: 500,
        bspeed: 5,
        spread: 2
    },

    assassin: {
        knockback: 5,
        reload: 1500,
        bspeed: 8,
        spread: 1
    },

    predator: {
        knockback: 3,
        reload: 750,
        bspeed: 5,
        spread: 2
    },

    machinegun: {
        knockback: 3,
        reload: 150,
        bspeed: 5,
        spread: 10
    },

    flamethrower: {
        knockback: 1,
        reload: 0,
        bspeed: 4,
        spread: 20
    },

    overseer: {
        knockback: 2,
        reload: 2000,
        bspeed: 3,
        spread: 0
    },

    landminer: {
        knockback: 4,
        reload: 3000,
        bspeed: 3,
        spread: 2
    },

    trapper: {
        knockback: 2,
        reload: 750,
        bspeed: 2,
        spread: 3
    },

    destroyer: {
        knockback: 3,
        reload: 1500,
        bspeed: 2,
        spread: 2
    },

    annihilator: {
        knockback: 5,
        reload: 2000,
        bspeed: 3,
        spread: 1
    },

    gunner: {
        knockback: 1,
        reload: 250,
        bspeed: 4,
        spread: 0
    }

};

var tankshow = [
    function() {
        c.fillRect(-9, 0, 18, -50);
        c.beginPath();
        c.moveTo(-9, 0);
        c.lineTo(-9, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(-9, -50);
        c.lineTo(9, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(9, 0);
        c.lineTo(9, -50);
        c.stroke();
    },
    function() {
        c.fillRect(-9, 0, 18, -55);
        c.beginPath();
        c.moveTo(-9, 0);
        c.lineTo(-9, -55);
        c.stroke();
        c.beginPath();
        c.moveTo(-9, -55);
        c.lineTo(9, -55);
        c.stroke();
        c.beginPath();
        c.moveTo(9, 0);
        c.lineTo(9, -55);
        c.stroke();
    },
    function() {
        c.fillRect(3, 0, 20, -50);
        c.beginPath();
        c.moveTo(3, 0);
        c.lineTo(3, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(3, -50);
        c.lineTo(24, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(24, 0);
        c.lineTo(24, -50);
        c.stroke();

        c.fillRect(-24, 0, 20, -50);
        c.beginPath();
        c.moveTo(-24, 0);
        c.lineTo(-24, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(-24, -50);
        c.lineTo(-3, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(-3, -50);
        c.lineTo(-3, 0);
        c.stroke();
    },
    function() {
        c.fillRect(-9, 0, 18, -50);
        c.beginPath();
        c.moveTo(-9, 0);
        c.lineTo(-9, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(-9, -50);
        c.lineTo(9, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(9, 0);
        c.lineTo(9, -50);
        c.stroke();

        c.fillRect(-9, 0, 18, 40);
        c.beginPath();
        c.moveTo(-9, 0);
        c.lineTo(-9, 40);
        c.stroke();
        c.beginPath();
        c.moveTo(-9, 40);
        c.lineTo(9, 40);
        c.stroke();
        c.beginPath();
        c.moveTo(9, 0);
        c.lineTo(9, 40);
        c.stroke();
    },
    function() {
        c.beginPath();
        c.moveTo(0, 0);
        c.lineTo(-20, -40);
        c.lineTo(20, -40);
        c.lineTo(0, 0);
        c.fill();

        c.beginPath();
        c.moveTo(-5, 0);
        c.lineTo(-20, -40);
        c.stroke();

        c.beginPath();
        c.lineTo(-20, -40);
        c.lineTo(20, -40);
        c.stroke();

        c.beginPath();
        c.lineTo(20, -40);
        c.lineTo(5, 0);
        c.stroke();
    },
    function() {
        c.fillRect(-9, 0, 18, -65);
        c.beginPath();
        c.moveTo(-9, 0);
        c.lineTo(-9, -65);
        c.stroke();
        c.beginPath();
        c.moveTo(-9, -65);
        c.lineTo(9, -65);
        c.stroke();
        c.beginPath();
        c.moveTo(9, 0);
        c.lineTo(9, -65);
        c.stroke();
    },
    function() {
        c.beginPath();
        c.moveTo(0, 0);
        c.lineTo(-35, -20);
        c.lineTo(-35, 20);
        c.lineTo(0, 10);
        c.fill();

        c.beginPath();
        c.moveTo(0, -5);
        c.lineTo(-35, -20);
        c.stroke();

        c.beginPath();
        c.lineTo(-35, -20);
        c.lineTo(-35, 20);
        c.stroke();

        c.beginPath();
        c.lineTo(-35, 20);
        c.lineTo(0, 5);
        c.stroke();

        c.beginPath();
        c.moveTo(0, 10);
        c.lineTo(35, 20);
        c.lineTo(35, -20);
        c.lineTo(0, -5);
        c.fill();

        c.beginPath();
        c.moveTo(0, 10);
        c.lineTo(35, 20);
        c.stroke();

        c.beginPath();
        c.lineTo(35, 20);
        c.lineTo(35, -20);
        c.stroke();

        c.beginPath();
        c.lineTo(35, -20);
        c.lineTo(0, -5);
        c.stroke();
    },
    function() {
        c.fillRect(-9, 0, 18, -55);

        c.beginPath();
        c.moveTo(-9, 0);
        c.lineTo(-9, -55);
        c.stroke();

        c.beginPath();
        c.moveTo(-9, -55);
        c.lineTo(9, -55);
        c.stroke();

        c.beginPath();
        c.moveTo(9, 0);
        c.lineTo(9, -55);
        c.stroke();

        c.fillRect(-13, 0, 26, -48);

        c.beginPath();
        c.moveTo(-13, 0);
        c.lineTo(-13, -48);
        c.stroke();

        c.beginPath();
        c.moveTo(-13, -48);
        c.lineTo(13, -48);
        c.stroke();

        c.beginPath();
        c.moveTo(13, 0);
        c.lineTo(13, -48);
        c.stroke();
    },
    function() {
        c.fillRect(3, 0, 20, -50);
        c.beginPath();
        c.moveTo(3, 0);
        c.lineTo(3, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(3, -50);
        c.lineTo(24, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(24, 0);
        c.lineTo(24, -50);
        c.stroke();

        c.fillRect(-24, 0, 20, -50);
        c.beginPath();
        c.moveTo(-24, 0);
        c.lineTo(-24, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(-24, -50);
        c.lineTo(-3, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(-3, -50);
        c.lineTo(-3, 0);
        c.stroke();

        c.fillRect(3, 0, 20, 50);
        c.beginPath();
        c.moveTo(3, 0);
        c.lineTo(3, 50);
        c.stroke();
        c.beginPath();
        c.moveTo(3, 50);
        c.lineTo(24, 50);
        c.stroke();
        c.beginPath();
        c.moveTo(24, 0);
        c.lineTo(24, 50);
        c.stroke();

        c.fillRect(-24, 0, 20, 50);
        c.beginPath();
        c.moveTo(-24, 0);
        c.lineTo(-24, 50);
        c.stroke();
        c.beginPath();
        c.moveTo(-24, 50);
        c.lineTo(-3, 50);
        c.stroke();
        c.beginPath();
        c.moveTo(-3, 50);
        c.lineTo(-3, 0);
        c.stroke();
    },
    function() {
        c.fillRect(-10, 0, 18, -50);
        c.beginPath();
        c.moveTo(-10, 0);
        c.lineTo(-10, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(-10, -50);
        c.lineTo(10, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(10, 0);
        c.lineTo(10, -50);
        c.stroke();

        c.save();
        c.translate(-10, 0);
        c.rotate(0.75);
        c.fillRect(0, 0, 18, -55);
        c.beginPath();
        c.moveTo(0, 0);
        c.lineTo(0, -55);
        c.stroke();
        c.beginPath();
        c.moveTo(0, -55);
        c.lineTo(20, -55);
        c.stroke();
        c.beginPath();
        c.moveTo(20, 0);
        c.lineTo(20, -55);
        c.stroke();
        c.restore();

        c.save();
        c.translate(-10, 0);
        c.rotate(-0.75);
        c.fillRect(-5, 0, 18, -40);
        c.beginPath();
        c.moveTo(-5, 0);
        c.lineTo(-5, -40);
        c.stroke();
        c.beginPath();
        c.moveTo(-5, -40);
        c.lineTo(15, -40);
        c.stroke();
        c.beginPath();
        c.moveTo(15, 0);
        c.lineTo(15, -40);
        c.stroke();
        c.restore();
    },
    function() {
        c.fillRect(-9, 0, 18, -50);
        c.beginPath();
        c.moveTo(-9, 0);
        c.lineTo(-9, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(-9, -50);
        c.lineTo(9, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(9, 0);
        c.lineTo(9, -50);
        c.stroke();

        c.fillRect(9, 0, -18, 50);
        c.beginPath();
        c.moveTo(9, 0);
        c.lineTo(9, 50);
        c.stroke();
        c.beginPath();
        c.moveTo(9, 50);
        c.lineTo(-9, 50);
        c.stroke();
        c.beginPath();
        c.moveTo(-9, 0);
        c.lineTo(-9, 50);
        c.stroke();

        c.fillRect(0, -9, -50, 18);
        c.beginPath();
        c.moveTo(0, -9);
        c.lineTo(-50, -9);
        c.stroke();
        c.beginPath();
        c.moveTo(-50, -9);
        c.lineTo(-50, 9);
        c.stroke();
        c.beginPath();
        c.moveTo(-50, 9);
        c.lineTo(0, 9);
        c.stroke();

        c.fillRect(0, 9, 50, -18);
        c.beginPath();
        c.moveTo(0, 9);
        c.lineTo(50, 9);
        c.stroke();
        c.beginPath();
        c.moveTo(50, 9);
        c.lineTo(50, -9);
        c.stroke();
        c.beginPath();
        c.moveTo(50, -9);
        c.lineTo(0, -9);
        c.stroke();
    },
    function() {
        c.fillRect(3, 0, 20, -50);
        c.beginPath();
        c.moveTo(3, 0);
        c.lineTo(3, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(3, -50);
        c.lineTo(24, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(24, 0);
        c.lineTo(24, -50);
        c.stroke();

        c.fillRect(-24, 0, 20, -50);
        c.beginPath();
        c.moveTo(-24, 0);
        c.lineTo(-24, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(-24, -50);
        c.lineTo(-3, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(-3, -50);
        c.lineTo(-3, 0);
        c.stroke();

        c.fillRect(-9, 0, 18, -55);
        c.beginPath();
        c.moveTo(-9, 0);
        c.lineTo(-9, -55);
        c.stroke();
        c.beginPath();
        c.moveTo(-9, -55);
        c.lineTo(9, -55);
        c.stroke();
        c.beginPath();
        c.moveTo(9, 0);
        c.lineTo(9, -55);
        c.stroke();
    },
    function() {
        c.fillRect(-9, 0, 18, -50);
        c.beginPath();
        c.moveTo(-9, 0);
        c.lineTo(-9, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(-9, -50);
        c.lineTo(9, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(9, 0);
        c.lineTo(9, -50);
        c.stroke();

        c.fillRect(9, 0, -18, 50);
        c.beginPath();
        c.moveTo(9, 0);
        c.lineTo(9, 50);
        c.stroke();
        c.beginPath();
        c.moveTo(9, 50);
        c.lineTo(-9, 50);
        c.stroke();
        c.beginPath();
        c.moveTo(-9, 0);
        c.lineTo(-9, 50);
        c.stroke();

        c.fillRect(0, -9, -50, 18);
        c.beginPath();
        c.moveTo(0, -9);
        c.lineTo(-50, -9);
        c.stroke();
        c.beginPath();
        c.moveTo(-50, -9);
        c.lineTo(-50, 9);
        c.stroke();
        c.beginPath();
        c.moveTo(-50, 9);
        c.lineTo(0, 9);
        c.stroke();

        c.fillRect(0, 9, 50, -18);
        c.beginPath();
        c.moveTo(0, 9);
        c.lineTo(50, 9);
        c.stroke();
        c.beginPath();
        c.moveTo(50, 9);
        c.lineTo(50, -9);
        c.stroke();
        c.beginPath();
        c.moveTo(50, -9);
        c.lineTo(0, -9);
        c.stroke();

        c.save();
        c.translate(0, 0);
        c.rotate(0.7854);

        c.fillRect(-9, 0, 18, -50);
        c.beginPath();
        c.moveTo(-9, 0);
        c.lineTo(-9, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(-9, -50);
        c.lineTo(9, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(9, 0);
        c.lineTo(9, -50);
        c.stroke();

        c.fillRect(9, 0, -18, 50);
        c.beginPath();
        c.moveTo(9, 0);
        c.lineTo(9, 50);
        c.stroke();
        c.beginPath();
        c.moveTo(9, 50);
        c.lineTo(-9, 50);
        c.stroke();
        c.beginPath();
        c.moveTo(-9, 0);
        c.lineTo(-9, 50);
        c.stroke();

        c.fillRect(0, -9, -50, 18);
        c.beginPath();
        c.moveTo(0, -9);
        c.lineTo(-50, -9);
        c.stroke();
        c.beginPath();
        c.moveTo(-50, -9);
        c.lineTo(-50, 9);
        c.stroke();
        c.beginPath();
        c.moveTo(-50, 9);
        c.lineTo(0, 9);
        c.stroke();

        c.fillRect(0, 9, 50, -18);
        c.beginPath();
        c.moveTo(0, 9);
        c.lineTo(50, 9);
        c.stroke();
        c.beginPath();
        c.moveTo(50, 9);
        c.lineTo(50, -9);
        c.stroke();
        c.beginPath();
        c.moveTo(50, -9);
        c.lineTo(0, -9);
        c.stroke();
        c.restore();
    },
    function() {
        c.fillRect(-3, -50, 6, 45);
        c.strokeRect(-3, -50, 6, 45);
        c.fillRect(-9, -47, 6, 45);
        c.strokeRect(-9, -47, 6, 45);
        c.fillRect(3, -47, 6, 45);
        c.strokeRect(3, -47, 6, 45);
        c.fillRect(-15, -44, 6, 45);
        c.strokeRect(-15, -44, 6, 45);
        c.fillRect(9, -44, 6, 45);
        c.strokeRect(9, -44, 6, 45);
    },
    function() {
        c.beginPath();
        c.moveTo(0, 0);
        c.lineTo(-20, -35);
        c.lineTo(20, -35);
        c.lineTo(0, 0);
        c.fill();

        c.beginPath();
        c.moveTo(-5, 0);
        c.lineTo(-20, -35);
        c.stroke();

        c.beginPath();
        c.lineTo(-20, -35);
        c.lineTo(20, -35);
        c.stroke();

        c.beginPath();
        c.lineTo(20, -35);
        c.lineTo(5, 0);
        c.stroke();
    },
    function() {
        c.fillRect(3, 0, 20, -50);
        c.beginPath();
        c.moveTo(3, 0);
        c.lineTo(3, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(3, -50);
        c.lineTo(24, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(24, 0);
        c.lineTo(24, -50);
        c.stroke();

        c.fillRect(-24, 0, 20, -50);
        c.beginPath();
        c.moveTo(-24, 0);
        c.lineTo(-24, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(-24, -50);
        c.lineTo(-3, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(-3, -50);
        c.lineTo(-3, 0);
        c.stroke();

        c.save();
        c.translate(0, 0);
        c.rotate(2.095);

        c.fillRect(3, 0, 20, -50);
        c.beginPath();
        c.moveTo(3, 0);
        c.lineTo(3, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(3, -50);
        c.lineTo(24, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(24, 0);
        c.lineTo(24, -50);
        c.stroke();

        c.fillRect(-24, 0, 20, -50);
        c.beginPath();
        c.moveTo(-24, 0);
        c.lineTo(-24, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(-24, -50);
        c.lineTo(-3, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(-3, -50);
        c.lineTo(-3, 0);
        c.stroke();

        c.restore();

        c.save();
        c.translate(0, 0);
        c.rotate(-2.095);

        c.fillRect(3, 0, 20, -50);
        c.beginPath();
        c.moveTo(3, 0);
        c.lineTo(3, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(3, -50);
        c.lineTo(24, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(24, 0);
        c.lineTo(24, -50);
        c.stroke();

        c.fillRect(-24, 0, 20, -50);
        c.beginPath();
        c.moveTo(-24, 0);
        c.lineTo(-24, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(-24, -50);
        c.lineTo(-3, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(-3, -50);
        c.lineTo(-3, 0);
        c.stroke();

        c.restore();
    },
    function() {
        c.beginPath();
        c.moveTo(0, 0);
        c.lineTo(-35, -20);
        c.lineTo(-35, 20);
        c.lineTo(0, 10);
        c.fill();

        c.beginPath();
        c.moveTo(0, -5);
        c.lineTo(-35, -20);
        c.stroke();

        c.beginPath();
        c.lineTo(-35, -20);
        c.lineTo(-35, 20);
        c.stroke();

        c.beginPath();
        c.lineTo(-35, 20);
        c.lineTo(0, 5);
        c.stroke();

        c.beginPath();
        c.moveTo(0, 10);
        c.lineTo(35, 20);
        c.lineTo(35, -20);
        c.lineTo(0, -5);
        c.fill();

        c.beginPath();
        c.moveTo(0, 10);
        c.lineTo(35, 20);
        c.stroke();

        c.beginPath();
        c.lineTo(35, 20);
        c.lineTo(35, -20);
        c.stroke();

        c.beginPath();
        c.lineTo(35, -20);
        c.lineTo(0, -5);
        c.stroke();

        c.save();
        c.translate(0, 0);
        c.rotate(1.57);

        c.beginPath();
        c.moveTo(0, 0);
        c.lineTo(-35, -20);
        c.lineTo(-35, 20);
        c.lineTo(0, 10);
        c.fill();

        c.beginPath();
        c.moveTo(0, -5);
        c.lineTo(-35, -20);
        c.stroke();

        c.beginPath();
        c.lineTo(-35, -20);
        c.lineTo(-35, 20);
        c.stroke();

        c.beginPath();
        c.lineTo(-35, 20);
        c.lineTo(0, 5);
        c.stroke();

        c.beginPath();
        c.moveTo(0, 10);
        c.lineTo(35, 20);
        c.lineTo(35, -20);
        c.lineTo(0, -5);
        c.fill();

        c.beginPath();
        c.moveTo(0, 10);
        c.lineTo(35, 20);
        c.stroke();

        c.beginPath();
        c.lineTo(35, 20);
        c.lineTo(35, -20);
        c.stroke();

        c.beginPath();
        c.lineTo(35, -20);
        c.lineTo(0, -5);
        c.stroke();

        c.restore();
    },
    function () {

        c.rect(-15, -30, 30, 30);
        c.fill();
        c.stroke();

        c.rect(-20, -40, 40, 10);
        c.fill();
        c.stroke();

    },
    function () {

        c.rect(-10, -30, 20, 30);
        c.fill();
        c.stroke();

        c.beginPath();
        c.moveTo(-10, -30);
        c.lineTo(10, -30);
        c.lineTo(20, -35);
        c.lineTo(-20, -35);
        c.lineTo(-10, -30);
        c.fill();

        c.beginPath();
        c.moveTo(-10, -30);
        c.lineTo(10, -30);
        c.lineTo(15, -35);
        c.lineTo(-15, -35);
        c.lineTo(-10, -30);
        c.stroke();

    },
    function () {

        c.rect(-15, -30, 30, 30);
        c.fill();
        c.stroke();

        c.beginPath();
        c.moveTo(-15, -30);
        c.lineTo(15, -30);
        c.lineTo(25, -40);
        c.lineTo(-25, -40);
        c.lineTo(-15, -30);
        c.fill();

        c.beginPath();
        c.moveTo(-15, -30);
        c.lineTo(15, -30);
        c.lineTo(25, -40);
        c.lineTo(-25, -40);
        c.lineTo(-15, -30);
        c.stroke();

    },
    function () {

        c.rect(-10, -30, 20, 30);
        c.fill();
        c.stroke();

        c.beginPath();
        c.moveTo(-10, -30);
        c.lineTo(10, -30);
        c.lineTo(20, -35);
        c.lineTo(-20, -35);
        c.lineTo(-10, -30);
        c.fill();

        c.beginPath();
        c.moveTo(-10, -30);
        c.lineTo(10, -30);
        c.lineTo(15, -35);
        c.lineTo(-15, -35);
        c.lineTo(-10, -30);
        c.stroke();

        c.save();
        c.translate(0, 0);
        c.rotate(2.0944);

        c.rect(-10, -30, 20, 30);
        c.fill();
        c.stroke();

        c.beginPath();
        c.moveTo(-10, -30);
        c.lineTo(10, -30);
        c.lineTo(20, -35);
        c.lineTo(-20, -35);
        c.lineTo(-10, -30);
        c.fill();

        c.beginPath();
        c.moveTo(-10, -30);
        c.lineTo(10, -30);
        c.lineTo(15, -35);
        c.lineTo(-15, -35);
        c.lineTo(-10, -30);
        c.stroke();
        c.restore();

        c.save();
        c.translate(0, 0);
        c.rotate(-2.0944);

        c.rect(-10, -30, 20, 30);
        c.fill();
        c.stroke();

        c.beginPath();
        c.moveTo(-10, -30);
        c.lineTo(10, -30);
        c.lineTo(20, -35);
        c.lineTo(-20, -35);
        c.lineTo(-10, -30);
        c.fill();

        c.beginPath();
        c.moveTo(-10, -30);
        c.lineTo(10, -30);
        c.lineTo(15, -35);
        c.lineTo(-15, -35);
        c.lineTo(-10, -30);
        c.stroke();
        c.restore();

    },
    function() {
        c.fillRect(-20, 0, 40, -50);
        c.beginPath();
        c.moveTo(-20, 0);
        c.lineTo(-20, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(-20, -50);
        c.lineTo(20, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(20, 0);
        c.lineTo(20, -50);
        c.stroke();
    },
    function() {
        c.fillRect(-25, 0, 50, -50);
        c.beginPath();
        c.moveTo(-25, 0);
        c.lineTo(-25, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(-25, -50);
        c.lineTo(25, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(25, 0);
        c.lineTo(25, -50);
        c.stroke();
    },
    function() {

        c.fillRect(-25, 0, 10, -40);
        c.fillRect(-12.5, 0, 10, -50);
        c.fillRect(2.5, 0, 10, -50);
        c.fillRect(15, 0, 10, -40);

        c.beginPath();
        c.moveTo(-25, 0);
        c.lineTo(-25, -40);
        c.stroke();

        c.beginPath();
        c.moveTo(-25, -40);
        c.lineTo(-15, -40);
        c.stroke();

        c.beginPath();
        c.moveTo(-15, -40);
        c.lineTo(-15, 0);
        c.stroke();

        c.beginPath();
        c.moveTo(-12.5, 0);
        c.lineTo(-12.5, -50);
        c.stroke();

        c.beginPath();
        c.moveTo(-12.5, -50);
        c.lineTo(-2.5, -50);
        c.stroke();

        c.beginPath();
        c.moveTo(-2.5, -50);
        c.lineTo(-2.5, 0);
        c.stroke();

        c.beginPath();
        c.moveTo(12.5, 0);
        c.lineTo(12.5, -50);
        c.stroke();

        c.beginPath();
        c.moveTo(12.5, -50);
        c.lineTo(2.5, -50);
        c.stroke();

        c.beginPath();
        c.moveTo(2.5, -50);
        c.lineTo(2.5, 0);
        c.stroke();

        c.beginPath();
        c.moveTo(25, 0);
        c.lineTo(25, -40);
        c.stroke();

        c.beginPath();
        c.moveTo(25, -40);
        c.lineTo(15, -40);
        c.stroke();

        c.beginPath();
        c.moveTo(15, -40);
        c.lineTo(15, 0);
        c.stroke();

    },
    function() {
        c.fillRect(-9, 0, 18, -50);
        c.beginPath();
        c.moveTo(-9, 0);
        c.lineTo(-9, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(-9, -50);
        c.lineTo(9, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(9, 0);
        c.lineTo(9, -50);
        c.stroke();

        c.save();
        c.rotate(0.5236);
        c.fillRect(-9, 0, 18, 40);
        c.beginPath();
        c.moveTo(-9, 0);
        c.lineTo(-9, 40);
        c.stroke();
        c.beginPath();
        c.moveTo(-9, 40);
        c.lineTo(9, 40);
        c.stroke();
        c.beginPath();
        c.moveTo(9, 0);
        c.lineTo(9, 40);
        c.stroke();
        c.restore();

        c.save();
        c.rotate(-0.5236);
        c.fillRect(-9, 0, 18, 40);
        c.beginPath();
        c.moveTo(-9, 0);
        c.lineTo(-9, 40);
        c.stroke();
        c.beginPath();
        c.moveTo(-9, 40);
        c.lineTo(9, 40);
        c.stroke();
        c.beginPath();
        c.moveTo(9, 0);
        c.lineTo(9, 40);
        c.stroke();
        c.restore();
    },
    function() {
        c.fillRect(-9, 0, 18, -50);
        c.beginPath();
        c.moveTo(-9, 0);
        c.lineTo(-9, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(-9, -50);
        c.lineTo(9, -50);
        c.stroke();
        c.beginPath();
        c.moveTo(9, 0);
        c.lineTo(9, -50);
        c.stroke();

        c.save();
        c.rotate(0.4);
        c.fillRect(-9, 0, 18, 40);
        c.beginPath();
        c.moveTo(-9, 0);
        c.lineTo(-9, 40);
        c.stroke();
        c.beginPath();
        c.moveTo(-9, 40);
        c.lineTo(9, 40);
        c.stroke();
        c.beginPath();
        c.moveTo(9, 0);
        c.lineTo(9, 40);
        c.stroke();
        c.restore();

        c.save();
        c.rotate(-0.4);
        c.fillRect(-9, 0, 18, 40);
        c.beginPath();
        c.moveTo(-9, 0);
        c.lineTo(-9, 40);
        c.stroke();
        c.beginPath();
        c.moveTo(-9, 40);
        c.lineTo(9, 40);
        c.stroke();
        c.beginPath();
        c.moveTo(9, 0);
        c.lineTo(9, 40);
        c.stroke();
        c.restore();

        c.save();
        c.rotate(0.6);
        c.fillRect(-9, 0, 18, 40);
        c.beginPath();
        c.moveTo(-9, 0);
        c.lineTo(-9, 40);
        c.stroke();
        c.beginPath();
        c.moveTo(-9, 40);
        c.lineTo(9, 40);
        c.stroke();
        c.beginPath();
        c.moveTo(9, 0);
        c.lineTo(9, 40);
        c.stroke();
        c.restore();

        c.save();
        c.rotate(-0.6);
        c.fillRect(-9, 0, 18, 40);
        c.beginPath();
        c.moveTo(-9, 0);
        c.lineTo(-9, 40);
        c.stroke();
        c.beginPath();
        c.moveTo(-9, 40);
        c.lineTo(9, 40);
        c.stroke();
        c.beginPath();
        c.moveTo(9, 0);
        c.lineTo(9, 40);
        c.stroke();
        c.restore();
    }
];

function tank(x, y, r, t, n, xp, lvl, id, userID) {
    this.x = x;
    this.y = y;
    this.a = 1;
    this.ss = 1;
    this.dr = 0;
    this.barrel = 0;
    this.showxp = 0;
    this.xppoints = 50;
    this.dead = false;
    this.velx = 0;
    this.vely = 0;
    this.acc = 0.075;
    this.knockback = tankstats.basic.knockback;
    this.spread = tankstats.basic.spread;
    this.bulletS = tankstats.basic.bspeed;
    this.reload = tankstats.basic.reload;
    this.BulletS = tankstats.basic.bspeed;
    this.Reload = tankstats.basic.reload;
    this.maxSpeed = 3;
    this.bulletP = 1;
    this.bulletD = 3;
    this.BulletP = 1;
    this.BulletD = 3;
    this.MaxSpeed = 3;
    this.healthpoints = 0;
    this.regenpoints = 0;
    this.bodydamagepoints = 0;
    this.bulletSpoints = 0;
    this.bulletPpoints = 0;
    this.bulletDpoints = 0;
    this.reloadpoints = 0;
    this.movementspeedpoints = 0;
    this.H = 20;
    this.h = 20;
    this.r = r;
    this.t = t;
    this.n = n;
    this.xp = xp;
    this.lvl = 50;
    this.id = id;
    this.userID = userID;
    this.reloading = false;
    this.cooldown = this.reload;
    this.timetill = 0;

    this.gotHit = function(other) {
        if(this.dead === true) {
            switch(other.constructor.name) {
                case "bullet":
                    killedScreen = other.user;
                    break;

                case "tank":
                    killedScreen = other;
                    break;
            }
        }
    }

    this.die = function() {

        if(this.dead) {

            this.a -= 0.05;
            this.ss+=0.05;
            saveStats(this);

        }

        if(this.a < 0) {

            this.a = 0;
            tanks.splice(tanks.indexOf(this), 1);

        }

    };

    this.update = function(r) {

        if(this.h <= 0) {
            this.dead = true;
        }
        this.die();

        this.bulletS = this.BulletS + Math.round((this.BulletS / 16) * this.bulletSpoints);
        this.bulletD = this.BulletD + Math.round(this.bulletDpoints * 5);
        this.bulletP = this.BulletP + Math.round(this.bulletPpoints);
        this.reload = this.Reload - ((this.Reload / 16) * this.reloadpoints);
        this.maxSpeed = this.MaxSpeed + ((this.MaxSpeed / 16) * this.movementspeedpoints);

        this.r = r;

        if(keys[87] && !keys[83]) {
            this.vely -= this.acc;
        }
        if(keys[83] && !keys[87]) {
            this.vely += this.acc;
        }
        if(keys[65] && !keys[68]) {
            this.velx -= this.acc;
        }
        if(keys[68] && !keys[65]) {
            this.velx += this.acc;
        }

        if(this.velx > this.maxSpeed) {
            this.velx = this.maxSpeed;
        }
        if(this.velx < -this.maxSpeed) {
            this.velx = -this.maxSpeed;
        }
        if(this.vely > this.maxSpeed) {
            this.vely = this.maxSpeed;
        }
        if(this.vely < -this.maxSpeed) {
            this.vely = -this.maxSpeed;
        }

        if(this.x < -1700) {
            this.x = -1700;
            this.velx = 0;
        }
        if(this.y < -1700) {
            this.y = -1700;
            this.vely = 0;
        }
        if(this.x > 1700) {
            this.x = 1700;
            this.velx = 0;
        }
        if(this.y > 1700) {
            this.y = 1700;
            this.vely = 0;
        }

        if(!keys[87] && !keys[83]) {
            if(this.vely < 0) {
                this.vely += this.acc;
            }
            if(this.vely > 0) {
                this.vely -= this.acc;
            }

            if(Math.abs(this.vely) <= this.acc) {
                this.vely = 0;
            }
        }
        if(!keys[65] && !keys[68]) {
            if(this.velx < 0) {
                this.velx += this.acc;
            }
            if(this.velx > 0) {
                this.velx -= this.acc;
            }

            if(Math.abs(this.velx) < this.acc) {
                this.velx = 0;
            }
        }

        this.x += this.velx;
        this.y += this.vely;

        if(mouseIsPressed || keys[32] || autofire) {

            if(this.cooldown === this.reload && !this.reloading) {

                switch(this.id) {

                    case 0:
                    case 1:
                    case 5:
                    bullets.push(new bullet(this.x + Math.sin(this.r) * 50, this.y - Math.cos(this.r) * 50, (this.x + Math.sin(this.r) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 10, 0, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                    this.reloading = true;

                    this.dx = Math.sin(this.r);
                    this.dy = -Math.cos(this.r);
                    this.mag = Math.sqrt(this.dx * this.dx + this.dy * this.dy);

                    this.velx -= ((this.dx / this.mag) * (this.knockback / 2));
                    this.vely -= ((this.dy / this.mag) * (this.knockback / 2));

                    break;

                    case 2:
                    if(!this.bullet) {
                        bullets.push(new bullet(this.x + Math.sin(this.r + 0.29) * 50, this.y - Math.cos(this.r + 0.29) * 50, (this.x + Math.sin(this.r + 0.205) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r + 0.205) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 10, 0, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                        this.bullet = 1;
                    } else {
                        bullets.push(new bullet(this.x + Math.sin(this.r - 0.29) * 50, this.y - Math.cos(this.r - 0.29) * 50, (this.x + Math.sin(this.r - 0.205) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r - 0.205) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 10, 0, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                        this.bullet = 0;
                    }
                    this.reloading = true;

                    this.dx = Math.sin(this.r);
                    this.dy = -Math.cos(this.r);
                    this.mag = Math.sqrt(this.dx * this.dx + this.dy * this.dy);

                    this.velx -= ((this.dx / this.mag) * (this.knockback / 2));
                    this.vely -= ((this.dy / this.mag) * (this.knockback / 2));

                    break;

                    case 3:
                    bullets.push(new bullet(this.x + Math.sin(this.r) * 50, this.y - Math.cos(this.r) * 50, this.x + Math.sin(this.r) * 70, this.y - Math.cos(this.r) * 70, 10, 0, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                    bullets.push(new bullet(this.x + Math.sin(this.r + (180 * (Math.PI / 180))) * 40, this.y - Math.cos(this.r + (180 * (Math.PI / 180))) * 40, this.x + Math.sin(this.r + (180 * (Math.PI / 180))) * 70, this.y - Math.cos(this.r + (180 * (Math.PI / 180))) * 70, 10, 0, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                    this.reloading = true;
                    break;

                    case 4:
                    bullets.push(new bullet(this.x + Math.sin(this.r) * 40, this.y - Math.cos(this.r) * 40, (this.x + Math.sin(this.r) * 50) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r) * 50) - ((Math.random() * this.spread) - (this.spread / 2)), 10, 0, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                    this.reloading = true;

                    this.dx = Math.sin(this.r);
                    this.dy = -Math.cos(this.r);
                    this.mag = Math.sqrt(this.dx * this.dx + this.dy * this.dy);

                    this.velx -= ((this.dx / this.mag) * (this.knockback / 2));
                    this.vely -= ((this.dy / this.mag) * (this.knockback / 2));

                    break;

                    case 6:
                    if(this.dr < 8) {
                        bullets.push(new bullet(this.x + Math.sin(this.r - 1.57) * 30, this.y - Math.cos(this.r - 1.57) * 30, mousex, mousey, 10, 1, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                        bullets.push(new bullet(this.x + Math.sin(this.r + 1.57) * 30, this.y - Math.cos(this.r + 1.57) * 30, mousex, mousey, 10, 1, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                        this.dr += 2;
                        this.reloading = true;
                    }
                    if(this.dr > 8) {

                        this.dr -= this.dr - 7;
                        bullets.length = 8;

                    }
                    break;

                    case 7:
                    bullets.push(new bullet(this.x + Math.sin(this.r) * 50, this.y - Math.cos(this.r) * 50, this.x + Math.sin(this.r) * 70, this.y - Math.cos(this.r) * 70, 12, 0, this.t, this.bulletS * 0.9, this.bulletD, this.bulletP, this.knockback, this));
                    bullets.push(new bullet(this.x + Math.sin(this.r) * 50, this.y - Math.cos(this.r) * 50, this.x + Math.sin(this.r) * 70, this.y - Math.cos(this.r) * 70, 8, 0, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                    this.reloading = true;
                    break;


                    case 8:
                    if(!this.bullet) {
                        bullets.push(new bullet(this.x + Math.sin(this.r + 0.29) * 50, this.y - Math.cos(this.r + 0.29) * 50, (this.x + Math.sin(this.r + 0.205) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r + 0.205) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 10, 0, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                        bullets.push(new bullet(this.x + Math.sin(this.r + 3.4316) * 50, this.y - Math.cos(this.r + 3.4316) * 50, (this.x + Math.sin(this.r + 3.3466) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r + 3.3466) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 10, 0, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                        this.bullet = 1;
                    } else {
                        bullets.push(new bullet(this.x + Math.sin(this.r - 3.4316) * 50, this.y - Math.cos(this.r - 3.4316) * 50, (this.x + Math.sin(this.r - 3.3466) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r - 3.3466) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 10, 0, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                        bullets.push(new bullet(this.x + Math.sin(this.r - 0.29) * 50, this.y - Math.cos(this.r - 0.29) * 50, (this.x + Math.sin(this.r - 0.205) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r - 0.205) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 10, 0, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                        this.bullet = 0;
                    }
                    this.reloading = true;
                    break;

                    case 9:
                    switch(this.bullet) {

                        case 0:

                        bullets.push(new bullet(this.x + Math.sin(this.r) * 50, this.y - Math.cos(this.r) * 50, (this.x + Math.sin(this.r) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 10, 0, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                        this.reloading = true;
                        this.bullet = 1;
                        break;

                        case 1:
                        bullets.push(new bullet(this.x + Math.sin(this.r + 0.78534) * 50, this.y - Math.cos(this.r + 0.78534) * 50, (this.x + Math.sin(this.r + 0.78534) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r + 0.78534) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 10, 0, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                        bullets.push(new bullet(this.x + Math.sin(this.r - 0.78534) * 50, this.y - Math.cos(this.r - 0.78534) * 50, (this.x + Math.sin(this.r - 0.78534) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r - 0.78534) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 10, 0, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                        this.reloading = true;
                        this.bullet = 0;
                        break;
                    }
                    break;

                    case 10:
                    switch(this.bullet) {
                        case 0:
                        bullets.push(new bullet(this.x + Math.sin(this.r) * 50, this.y - Math.cos(this.r) * 50, (this.x + Math.sin(this.r) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 10, 0, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                        bullets.push(new bullet(this.x + Math.sin(this.r + 3.1416) * 50, this.y - Math.cos(this.r + 3.1416) * 50, (this.x + Math.sin(this.r + 3.1416) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r + 3.1416) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 10, 0, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                        this.reloading = true;
                        this.bullet = 1;
                        break;

                        case 1:
                        bullets.push(new bullet(this.x + Math.sin(this.r + 1.57) * 50, this.y - Math.cos(this.r + 1.57) * 50, (this.x + Math.sin(this.r + 1.57) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r + 1.57) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 10, 0, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                        bullets.push(new bullet(this.x + Math.sin(this.r - 1.57) * 50, this.y - Math.cos(this.r - 1.57) * 50, (this.x + Math.sin(this.r - 1.57) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r - 1.57) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 10, 0, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                        this.reloading = true;
                        this.bullet = 0;
                        break;
                    }
                    break;

                    case 11:
                    if(!this.bullet) {
                        bullets.push(new bullet(this.x + Math.sin(this.r) * 50, this.y - Math.cos(this.r) * 50, (this.x + Math.sin(this.r) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 10, 0, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                        this.bullet = 1;
                    } else {
                        bullets.push(new bullet(this.x + Math.sin(this.r - 0.29) * 50, this.y - Math.cos(this.r - 0.29) * 50, (this.x + Math.sin(this.r - 0.205) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r - 0.205) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 10, 0, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                        bullets.push(new bullet(this.x + Math.sin(this.r + 0.29) * 50, this.y - Math.cos(this.r + 0.29) * 50, (this.x + Math.sin(this.r + 0.205) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r + 0.205) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 10, 0, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                        this.bullet = 0;
                    }
                    this.reloading = true;

                    this.dx = Math.sin(this.r);
                    this.dy = -Math.cos(this.r);
                    this.mag = Math.sqrt(this.dx * this.dx + this.dy * this.dy);

                    this.velx -= ((this.dx / this.mag) * (this.knockback / 2));
                    this.vely -= ((this.dy / this.mag) * (this.knockback / 2));

                    break;

                    case 12:
                    switch(this.bullet) {

                        case 0:
                        bullets.push(new bullet(this.x + Math.sin(this.r) * 50, this.y - Math.cos(this.r) * 50, (this.x + Math.sin(this.r) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 10, 0, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                        bullets.push(new bullet(this.x + Math.sin(this.r + 3.1416) * 50, this.y - Math.cos(this.r + 3.1416) * 50, (this.x + Math.sin(this.r + 3.1416) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r + 3.1416) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 10, 0, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                        bullets.push(new bullet(this.x + Math.sin(this.r + 1.57) * 50, this.y - Math.cos(this.r + 1.57) * 50, (this.x + Math.sin(this.r + 1.57) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r + 1.57) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 10, 0, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                        bullets.push(new bullet(this.x + Math.sin(this.r - 1.57) * 50, this.y - Math.cos(this.r - 1.57) * 50, (this.x + Math.sin(this.r - 1.57) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r - 1.57) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 10, 0, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                        this.reloading = true;
                        this.bullet = 1;
                        break;

                        case 1:
                        bullets.push(new bullet(this.x + Math.sin(this.r + 0.7854) * 50, this.y - Math.cos(this.r + 0.7854) * 50, (this.x + Math.sin(this.r + 0.7854) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r + 0.7854) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 10, 0, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                        bullets.push(new bullet(this.x + Math.sin(this.r - 0.7854) * 50, this.y - Math.cos(this.r - 0.7854) * 50, (this.x + Math.sin(this.r - 0.7854) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r - 0.7854) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 10, 0, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                        bullets.push(new bullet(this.x + Math.sin(this.r + 2.3562) * 50, this.y - Math.cos(this.r + 2.3562) * 50, (this.x + Math.sin(this.r + 2.3562) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r + 2.3562) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 10, 0, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                        bullets.push(new bullet(this.x + Math.sin(this.r - 2.3562) * 50, this.y - Math.cos(this.r - 2.3562) * 50, (this.x + Math.sin(this.r - 2.3562) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r - 2.3562) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 10, 0, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                        this.reloading = true;
                        this.bullet = 0;
                        break;
                    }
                    break;

                    case 15:
                    if(!this.bullet) {
                        bullets.push(new bullet(this.x + Math.sin(this.r + 0.29) * 50, this.y - Math.cos(this.r + 0.29) * 50, (this.x + Math.sin(this.r + 0.205) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r + 0.205) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 10, 0, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                        bullets.push(new bullet(this.x + Math.sin(this.r + 2.385) * 50, this.y - Math.cos(this.r + 2.385) * 50, (this.x + Math.sin(this.r + 2.3) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r + 2.3) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 10, 0, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                        bullets.push(new bullet(this.x + Math.sin(this.r - 1.805) * 50, this.y - Math.cos(this.r - 1.805) * 50, (this.x + Math.sin(this.r - 1.88) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r - 1.88) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 10, 0, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                        this.bullet = 1;
                    } else {
                        bullets.push(new bullet(this.x + Math.sin(this.r - 0.29) * 50, this.y - Math.cos(this.r - 0.29) * 50, (this.x + Math.sin(this.r - 0.205) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r - 0.205) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 10, 0, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                        bullets.push(new bullet(this.x + Math.sin(this.r + 1.805) * 50, this.y - Math.cos(this.r + 1.805) * 50, (this.x + Math.sin(this.r + 1.88) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r + 1.88) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 10, 0, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                        bullets.push(new bullet(this.x + Math.sin(this.r - 2.385) * 50, this.y - Math.cos(this.r - 2.385) * 50, (this.x + Math.sin(this.r - 2.3) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r - 2.3) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 10, 0, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                        this.bullet = 0;
                    }
                    this.reloading = true;
                    break;

                    case 16:
                    if(this.dr < 8) {
                        bullets.push(new bullet(this.x + Math.sin(this.r - 1.57) * 30, this.y - Math.cos(this.r - 1.57) * 30, mousex, mousey, 10, 1, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                        bullets.push(new bullet(this.x + Math.sin(this.r + 1.57) * 30, this.y - Math.cos(this.r + 1.57) * 30, mousex, mousey, 10, 1, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                        bullets.push(new bullet(this.x + Math.sin(this.r) * 30, this.y - Math.cos(this.r - 1.57) * 30, mousex, mousey, 10, 1, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                        bullets.push(new bullet(this.x + Math.sin(this.r + Math.PI) * 30, this.y - Math.cos(this.r + Math.PI) * 30, mousex, mousey, 10, 1, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                        this.dr += 4;
                        this.reloading = true;
                    }
                    if(this.dr > 8) {

                        this.dr -= this.dr - 7;
                        bullets.length = 8;

                    }
                    break;

                    case 17:

                    bullets.push(new bullet(this.x + Math.sin(this.r) * 50, this.y - Math.cos(this.r) * 50, (this.x + Math.sin(this.r) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 0.8, 2, this.t, this.bulletS, this.bulletD * 1.5, this.bulletP * 1.5, this.knockback, this));
                    this.reloading = true;
                    break;

                    case 18:

                    bullets.push(new bullet(this.x + Math.sin(this.r) * 30, this.y - Math.cos(this.r) * 30, (this.x + Math.sin(this.r) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 0.5, 3, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                    this.reloading = true;
                    break;

                    case 19:

                    bullets.push(new bullet(this.x + Math.sin(this.r) * 50, this.y - Math.cos(this.r) * 50, (this.x + Math.sin(this.r) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 1, 3, this.t, this.bulletS, this.bulletD * 2, this.bulletP * 2, this.knockback, this));
                    this.reloading = true;
                    break;

                    case 20:

                    bullets.push(new bullet(this.x + Math.sin(this.r) * 30, this.y - Math.cos(this.r) * 30, (this.x + Math.sin(this.r) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 0.5, 3, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                    bullets.push(new bullet(this.x + Math.sin(this.r + 2.0944) * 30, this.y - Math.cos(this.r + 2.0944) * 30, (this.x + Math.sin(this.r + 2.0944) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r + 2.0944) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 0.5, 3, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                    bullets.push(new bullet(this.x + Math.sin(this.r - 2.0944) * 30, this.y - Math.cos(this.r - 2.0944) * 30, (this.x + Math.sin(this.r - 2.0944) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r - 2.0944) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 0.5, 3, this.t, this.bulletS, this.bulletD, this.bulletP, this.knockback, this));
                    this.reloading = true;
                    break;

                    case 21:

                    bullets.push(new bullet(this.x + Math.sin(this.r) * 30, this.y - Math.cos(this.r) * 30, (this.x + Math.sin(this.r) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 20, 0, this.t, this.bulletS, this.bulletD * 1.1, this.bulletP * 1.1, this.knockback, this));

                    this.dx = Math.sin(this.r);
                    this.dy = Math.cos(this.r + 3.1416);
                    this.mag = Math.sqrt(this.dx * this.dx + this.dy * this.dy);

                    this.velx -= ((this.dx / this.mag) * (this.knockback * 2.3));
                    this.vely -= ((this.dy / this.mag) * (this.knockback * 2.3));

                    this.reloading = true;
                    break;

                    case 22:

                    bullets.push(new bullet(this.x + Math.sin(this.r) * 30, this.y - Math.cos(this.r) * 30, (this.x + Math.sin(this.r) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 25, 0, this.t, this.bulletS, this.bulletD * 1.3, this.bulletP * 1.3, this.knockback, this));

                    this.dx = Math.sin(this.r);
                    this.dy = Math.cos(this.r + 3.1416);
                    this.mag = Math.sqrt(this.dx * this.dx + this.dy * this.dy);

                    this.velx -= ((this.dx / this.mag) * (this.knockback * 3));
                    this.vely -= ((this.dy / this.mag) * (this.knockback * 3));

                    this.reloading = true;
                    break;

                    case 23:

                    if(this.bullet === 0) {
                        bullets.push(new bullet(this.x + Math.sin(this.r - 0.12) * 50, this.y - Math.cos(this.r - 0.12) * 50, (this.x + Math.sin(this.r - 0.09) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r - 0.09) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 5, 0, this.t, this.bulletS, this.bulletD * 0.7, this.bulletP * 0.7, this.knockback * 0.4, this));
                        this.bullet = 1;
                    }else if(this.bullet === 1) {
                        bullets.push(new bullet(this.x + Math.sin(this.r + 0.12) * 50, this.y - Math.cos(this.r + 0.12) * 50, (this.x + Math.sin(this.r + 0.09) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r + 0.09) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 5, 0, this.t, this.bulletS, this.bulletD * 0.7, this.bulletP * 0.7, this.knockback * 0.4, this));
                        this.bullet = 2;
                    }else if(this.bullet === 2) {
                        bullets.push(new bullet(this.x + Math.sin(this.r - 0.5) * 40, this.y - Math.cos(this.r - 0.5) * 40, (this.x + Math.sin(this.r - 0.28) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r - 0.28) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 5, 0, this.t, this.bulletS, this.bulletD * 0.7, this.bulletP * 0.7, this.knockback * 0.4, this));
                        this.bullet = 3;
                    }else if(this.bullet === 3) {
                        bullets.push(new bullet(this.x + Math.sin(this.r + 0.5) * 40, this.y - Math.cos(this.r + 0.5) * 40, (this.x + Math.sin(this.r + 0.28) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r + 0.28) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 5, 0, this.t, this.bulletS, this.bulletD * 0.7, this.bulletP * 0.7, this.knockback * 0.4, this));
                        this.bullet = 0;
                    }
                    this.reloading = true;
                    break;

                    case 13:
                    switch(this.barrel) {
                        case 0:
                        bullets.push(new bullet(this.x + Math.sin(this.r) * 50, this.y - Math.cos(this.r) * 50, (this.x + Math.sin(this.r) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 2, 0, this.t, this.bulletS, (this.bulletD + this.bulletP) * 0.4, 0.7, this.knockback, this));
                        this.barrel = 1;
                        break;
                        case 1:
                        bullets.push(new bullet(this.x + Math.sin(this.r - 0.1) * 50, this.y - Math.cos(this.r - 0.1) * 50, (this.x + Math.sin(this.r - 0.1) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r - 0.1) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 2, 0, this.t, this.bulletS, (this.bulletD + this.bulletP) * 0.4, 0.7, this.knockback, this));
                        bullets.push(new bullet(this.x + Math.sin(this.r + 0.1) * 50, this.y - Math.cos(this.r + 0.1) * 50, (this.x + Math.sin(this.r + 0.1) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r + 0.1) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 2, 0, this.t, this.bulletS, (this.bulletD + this.bulletP) * 0.4, 0.7, this.knockback, this));
                        this.barrel = 2;
                        break;
                        case 2:
                        bullets .push(new bullet(this.x + Math.sin(this.r - 0.25) * 50, this.y - Math.cos(this.r - 0.25) * 50, (this.x + Math.sin(this.r - 0.18) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r - 0.18) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 2, 0, this.t, this.bulletS, (this.bulletD + this.bulletP) * 0.4, 0.7, this.knockback, this));
                        bullets.push(new bullet(this.x + Math.sin(this.r + 0.25) * 50, this.y - Math.cos(this.r + 0.25) * 50, (this.x + Math.sin(this.r + 0.18) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), (this.y - Math.cos(this.r + 0.18) * 70) - ((Math.random() * this.spread) - (this.spread / 2)), 2, 0, this.t, this.bulletS, (this.bulletD + this.bulletP) * 0.4, 0.7, this.knockback, this));
                        this.barrel = 0;
                        break;
                    }

                    break;

                }

                return;

            }

        }

        if(this.reloading) {
            this.cooldown -= 100;
            this.timetill = millis;
        }

        if(this.cooldown <= 0) {
            this.cooldown = 0;
            this.reloading = false;
        }

        if(this.cooldown !== this.reload && !this.reloading) {

            if(this.cooldown < this.reload) {
                this.cooldown = millis - this.timetill;
            } else {
                this.cooldown = this.reload;
            }

        }

        if(this.xp > xpamt[this.lvl]) {
            this.xp -= xpamt[this.lvl];
            this.xppoints++;
            this.lvl++;
        }

        if(mouseUP) {
            this.bullet = 0;
        }

    };

    this.show = function() {
        c.save();
        c.translate(this.x, this.y);
        c.scale(this.ss, this.ss);
        c.globalAlpha = this.a;

        if(this.H !== this.h) {

            c.strokeStyle = "rgb(100, 100, 100, 0.8)";
            c.lineWidth = 7;
            c.beginPath();
            c.moveTo(-25, 35);
            c.lineTo(25, 35);
            c.stroke();

            c.strokeStyle = "rgb(100, 255, 100, 0.8)";
            c.lineWidth = 4;
            c.beginPath();
            c.moveTo(-25, 35);
            c.lineTo(((25 / this.H) * (this.h * 2)) - 25, 35);
            c.stroke();

        }

        c.lineWidth = 3;

        c.rotate(this.r);

        c.fillStyle = "rgb(200, 200, 200)";
        c.strokeStyle = "rgb(150, 150, 150)";
        tankshow[this.id]();
        switch(this.t) {
            case 0:
            c.fillStyle = "rgb(100, 200, 250)";
            c.strokeStyle = "rgb(50, 150, 200)";
            break;
            case 1:
            c.fillStyle = "rgb(250, 150, 150)";
            c.strokeStyle = "rgb(200, 100, 100)";
            break;
            case 2:
            c.fillStyle = "rgb(150, 250, 150)";
            c.strokeStyle = "rgb(100, 200, 100)";
            break;
            case 3:
            c.fillStyle = "rgb(250, 150, 250)";
            c.strokeStyle = "rgb(200, 100, 200)";
            break;
        }
        circle(0, 0, 25);

        c.restore();
    };
}
