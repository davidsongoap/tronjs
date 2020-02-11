/*
* Author: Davidson Gonçalves
* https://github.com/davidsongoap
* File: View.js
* TRON.JS
*/
class View {
    constructor(model) {
        let cnv = createCanvas(windowWidth, windowHeight);
        cnv.position(0, 0);
        cnv.style("z-index", -1);
        imageMode(CENTER);
        this.model = model;
    }

    draw() {
        // draw the current screen
        switch (this.model.screen) {
            case GAMESCREEN:
                this.buildGameScreen();
                break;
            case MENUSCREEN:
                this.buildMenuScreen();
                break;
            case WINNERSCREEN:
                this.buildWinnerScreen();
                break;
            case OPTIONSCREEN:
                this.buildOptionsScreen();
                break;
        }
    }

    buildWinnerScreen() {
        // screen for the winner
        if (this.model.winner === 1) {
            background(this.model.p1.getColor());
            image(img_victory_1, windowWidth / 2, (windowHeight / 2) - 50)
        } else {
            background(this.model.p2.getColor());
            image(img_victory_2, windowWidth / 2, (windowHeight / 2) - 50)
        }
        image(img_playagain, windowWidth / 2, (windowHeight / 2) + 50);

        this.model.btn_back.setPos((windowWidth * 0.1), (windowHeight * 0.10));
        this.model.btn_back.draw();
    }

    buildOptionsScreen() {
        // screen for the options
        background(20);

        let img_scaling = 1.3;
        image(img_options, (windowWidth * 0.5), (windowHeight * 0.15),
            img_options.width * img_scaling, img_options.height * img_scaling);
        image(img_gamespeed, (windowWidth * 0.5), (windowHeight * 0.3));
        image(img_colors, (windowWidth * 0.5), (windowHeight * 0.5));
        image(img_player1, (windowWidth * 0.5), (windowHeight * 0.60));
        image(img_player2, (windowWidth * 0.5) + 5, (windowHeight * 0.71));

        this.model.btn_slow.setPos((windowWidth * 0.5) - 220, (windowHeight * 0.38));
        this.model.btn_normal.setPos((windowWidth * 0.5), (windowHeight * 0.38));
        this.model.btn_fast.setPos((windowWidth * 0.5) + 220, (windowHeight * 0.38));
        this.model.btn_back.setPos((windowWidth * 0.1), (windowHeight * 0.10));

        this.model.btn_back.draw();
        this.model.btn_slow.draw();
        this.model.btn_normal.draw();
        this.model.btn_fast.draw();
    }

    buildMenuScreen() {
        // screen for the main menu
        background(20);

        // update buttons
        var wPercentage = 0.5;
        image(img_logo, (windowWidth * wPercentage), (windowHeight * 0.3));
        this.model.btn_newgame.setPos((windowWidth * wPercentage), (windowHeight * 0.45) + 30);
        this.model.btn_options.setPos((windowWidth * wPercentage), (windowHeight * 0.55) + 30);

        // draw buttons
        this.model.btn_newgame.draw();
        this.model.btn_options.draw();
    }

    buildGameScreen() {
        // screen for the game
        background(20);

        // update and draw the players
        this.model.updatePlayers();
        this.model.p1.draw();
        this.model.p2.draw();

        // check for collision
        this.model.checkPlayerCollisions();
    }

    showViewCodeButton() {
        $(".viewcode").css("display", "block");
    }

    hideViewCodeButton() {
        $(".viewcode").css("display", "none");
    }

    showColorPickers() {
        $(".picker").css("display", "block");
    }

    hideColorPickers() {
        $(".picker").css("display", "none");
    }
}