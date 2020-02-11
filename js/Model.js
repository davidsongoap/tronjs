/*
* Author: Davidson Gonçalves
* https://github.com/davidsongoap
* File: Model.js
* TRON.JS
*/

GAMESCREEN = 1;
MENUSCREEN = 2;
WINNERSCREEN = 3;
OPTIONSCREEN = 4;
FAST_SPEED = 1;
NORMAL_SPEED = 0.7;
SLOW_SPEED = 0.5;

class Model {

    constructor(controller) {
        this.scl = 20;
        this.screen = MENUSCREEN;
        this.controller = controller;
        this.winner = -1;

        const positions = this.playerCenterPositions();
        this.p1 = new Player(positions[0], positions[2], color(255, 10, 0), this.scl);
        this.p2 = new Player(positions[1], positions[2], color(0, 128, 255), this.scl);

        // create menu screen buttons
        this.btn_newgame = new Button(0, 0, img_newgame, (function () {
            this.screen = GAMESCREEN;
            this.resetPlayers();
            this.controller.hideViewCodeButton()
        }).bind(this));

        this.btn_options = new Button(0, 0, img_options, (function () {
            this.screen = OPTIONSCREEN;
            this.controller.showColorPickers();
        }).bind(this));

        // create option screen buttons
        this.btn_slow = new Button(0, 0, img_slow, (function () {
            this.setPlayersSpeed(SLOW_SPEED);
            this.btn_slow.lock();
            this.btn_normal.unlock();
            this.btn_fast.unlock();
        }).bind(this));

        this.btn_normal = new Button(0, 0, img_normal, (function () {
            this.setPlayersSpeed(NORMAL_SPEED);
            this.btn_slow.unlock();
            this.btn_normal.lock();
            this.btn_fast.unlock();
        }).bind(this));
        this.btn_normal.lock();

        this.btn_fast = new Button(0, 0, img_fast, (function () {
            this.setPlayersSpeed(FAST_SPEED);
            this.btn_slow.unlock();
            this.btn_normal.unlock();
            this.btn_fast.lock();
        }).bind(this));

        // go back button
        this.btn_back = new Button(100, 100, img_back, (function () {
            this.controller.hideColorPickers();
            this.screen = MENUSCREEN;
            this.controller.showViewCodeButton()
        }).bind(this));
    }

    setController(controller) {
        this.controller = controller;
    }

    playerCenterPositions() {
        let player1Posx = Math.floor(windowWidth * 0.2);
        let player2Posx = Math.floor(windowWidth * 0.8);
        let playerPosy = Math.floor(windowHeight * 0.5);

        // round the position to the scale
        player1Posx = Math.ceil(player1Posx / this.scl) * this.scl;
        player2Posx = Math.ceil(player2Posx / this.scl) * this.scl;
        playerPosy = Math.ceil(playerPosy / this.scl) * this.scl;

        return [player1Posx, player2Posx, playerPosy]
    }

    updatePlayers() {
        this.p1.updatePos();
        this.p2.updatePos();
    }

    checkPlayerCollisions() {
        if (this.p1.collidesWith(this.p2.trail)) {
            this.winner = 2;
            this.screen = WINNERSCREEN;
        } else if (this.p2.collidesWith(this.p1.trail)) {
            this.winner = 1;
            this.screen = WINNERSCREEN;
        }
    }

    setPlayersSpeed(val) {
        this.p1.setSpeed(val);
        this.p2.setSpeed(val);
    }

    resetPlayers() {
        let positions = this.playerCenterPositions();
        this.p1.reset(positions[0], positions[2]);
        this.p2.reset(positions[1], positions[2]);
    }
}