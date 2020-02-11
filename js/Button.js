/*
* Author: Davidson Gonçalves
* https://github.com/davidsongoap
* File: Button.js
* TRON.JS
*/

class Button {
    constructor(posx, posy, image, action) {
        this.posx = posx;
        this.posy = posy;

        // lock flag. When true the button will remain
        // with it's original colors
        this.locked = false;

        // action to be performed when this button is clicked
        this.action = action;

        // original image
        this.image_high = createImage(image.width, image.height);

        // grey image
        this.image_low = createImage(image.width, image.height);

        let x = Math.floor(image.width);
        let y = Math.floor(image.height);

        this.image_high.copy(image, 0, 0, x, y, 0, 0, x, y);
        this.image_low.copy(image, 0, 0, x, y, 0, 0, x, y);

        // apply gray filter
        this.image_low.filter(GRAY);
        this.hover = false;
    }

    setPos(x, y) {
        this.posx = x;
        this.posy = y;
    }

    lock() {
        this.locked = true;
    }

    unlock() {
        this.locked = false;
    }

    draw() {
        this.hoverCheck();
        stroke(255);
        if (this.hover) {
            var t_offset = 3;
            image(this.image_high, this.posx + t_offset, this.posy - t_offset);
        } else {
            if (this.locked) image(this.image_high, this.posx, this.posy);
            else image(this.image_low, this.posx, this.posy);
        }
    }

    hoverCheck() {
        //checks if the mouse is over the button
        this.hover = (
            mouseX > (this.posx - this.image_high.width / 2) &&
            mouseX < (this.posx + this.image_high.width / 2) &&
            mouseY > (this.posy - this.image_high.height / 2) &&
            mouseY < (this.posy + this.image_high.height / 2)
        )
    }

    clicked() {
        // return true if this button was clicked
        // otherwise returns false
        return this.hover;
    }
}