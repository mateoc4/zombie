//Math.floor(Math.random()*(max-min+1)+min)

var board = document.querySelector(".board");


var cross = document.createElement("div");
cross.classList.add('cross');
board.appendChild(cross);

board.addEventListener('mousemove', function(e) {
    cross.style.left = e.pageX - 50 + "px";
    cross.style.top = e.pageY - 50 + "px";
})

setInterval(function() {

    var zombie = document.createElement("div");
    zombie.classList.add("zombie");

    //pozycja
    var min = 35;
    var max = 220;
    var pos = Math.floor(Math.random()*(max-min+1)+min);
    zombie.style.bottom = pos + "px";

    //dlugosc marszu
    var min = 15;
    var max = 20;
    var time = Math.floor(Math.random()*(max-min+1)+min);
    zombie.style.animationDuration = `0.5s, ${time}s`;

    //scale
    var min = 1;
    var max = 3;
    var scalePart = Math.floor(Math.random()*(max-min+1)+min);
    var scale = 1 + (scalePart / 10); //1.1 - 1.5
    zombie.style.transform = `scale(${scale})`;
    zombie.live = 3;

    //z-index
    zombie.style.zIndex = 220 - pos;

    zombie.addEventListener("animationend", function() {
        this.remove();
    });

    zombie.addEventListener('click', function() {
        this.live--;
        if (this.live <= 0) {this.remove();}
    })

    board.appendChild(zombie);



}, 900)