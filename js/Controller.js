/*
* Author: Davidson Gonçalves
* https://github.com/davidsongoap
* File: Controller.js
* TRON.JS
*/

class Controller {
    constructor() {
        this.model = null;
        this.view = null;
    }

    mouseClicked() {
        switch (this.model.screen) {
            case MENUSCREEN:
                if (this.model.btn_newgame.clicked())
                    this.model.btn_newgame.action();
                else if (this.model.btn_options.clicked())
                    this.model.btn_options.action();
                break;
            case WINNERSCREEN:
                if (this.model.btn_back.clicked()) {
                    this.model.btn_back.action();
                    return;
                }
                this.model.btn_newgame.action();
                break;
            case OPTIONSCREEN:
                if (this.model.btn_back.clicked())
                    this.model.btn_back.action();
                else if (this.model.btn_fast.clicked())
                    this.model.btn_fast.action();
                else if (this.model.btn_normal.clicked())
                    this.model.btn_normal.action();
                else if (this.model.btn_slow.clicked())
                    this.model.btn_slow.action();
                break;
        }
    }

    keyPressed() {
        // key codes
        const KeyS = 83;
        const KeyW = 87;
        const KeyA = 65;
        const KeyD = 68;

        if (this.model.screen === GAMESCREEN) {
            if (keyCode === UP_ARROW) {
                this.model.p2.dir(0, -1);
            } else if (keyCode === DOWN_ARROW) {
                this.model.p2.dir(0, 1);
            } else if (keyCode === LEFT_ARROW) {
                this.model.p2.dir(-1, 0);
            } else if (keyCode === RIGHT_ARROW) {
                this.model.p2.dir(1, 0);
            } else if (keyCode === KeyW) {
                this.model.p1.dir(0, -1);
            } else if (keyCode === KeyS) {
                this.model.p1.dir(0, 1);
            } else if (keyCode === KeyA) {
                this.model.p1.dir(-1, 0);
            } else if (keyCode === KeyD) {
                this.model.p1.dir(1, 0);
            }
        }
    }

    setView(view) {
        this.view = view;
    }

    setModel(model) {
        this.model = model;
    }

    showViewCodeButton() {
        this.view.showViewCodeButton();
    }

    hideViewCodeButton() {
        this.view.hideViewCodeButton();
    }

    showColorPickers() {
        this.view.showColorPickers()
    }

    hideColorPickers() {
        this.view.hideColorPickers()
    }

}