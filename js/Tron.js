/*
* Author: Davidson Gonçalves
* https://github.com/davidsongoap
* File: Tron.js
* TRON.JS
*/

// p5.js specific methods

function preload() {
    // image loading
    img_colors = loadImage('img/colors.png');
    img_logo = loadImage('img/logo.png');
    img_gamespeed = loadImage('img/gamespeed.png');
    img_newgame = loadImage('img/newgame_high.png');
    img_options = loadImage('img/option_high.png');
    img_howto = loadImage('img/howto_high.png');
    img_fast = loadImage('img/fast_high.png');
    img_slow = loadImage('img/slow_high.png');
    img_normal = loadImage('img/normal_high.png');
    img_player1 = loadImage('img/player1.png');
    img_player2 = loadImage('img/player2.png');
    img_back = loadImage('img/back.png');
    img_playagain = loadImage('img/playagain.png')
    img_victory_1 = loadImage('img/player1won.png')
    img_victory_2 = loadImage('img/player2won.png')
}
function setup() {
    controller = new Controller();
    model = new Model(controller);
    view = new View(model);
    controller.setModel(model);
    controller.setView(view)
}

function draw() {
    view.draw();
}

function keyPressed() {
    controller.keyPressed();
}

function mouseClicked() {
    controller.mouseClicked();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
