var title = document.getElementById("page-title");
var frame = 0, pagey = 0;

function loop() {

    if(pagey < 0.999) {
        pagey += Math.sin(frame / 40) / 80;
        title.style.top = (-pagey * 15) + 12 + "vw";
        title.style.opacity = pagey;
    }

    frame++;

}

window.setInterval(loop, 16);
