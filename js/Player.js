/*
* Author: Davidson Gonçalves
* https://github.com/davidsongoap
* File: Player.js
* TRON.JS
*/

class Player {
    constructor(x, y, color, scl) {
        this.reset(x, y);
        this.c = color;
        this.scl = scl;
        this.speed = NORMAL_SPEED
    }

    reset(x, y) {
        this.x = x;
        this.y = y;
        this.xspeed = 0;
        this.yspeed = 0;
        this.trail = [];
        this.loc = [this.x, this.y];
        this.vel = [this.xspeed, this.yspeed];
        this.touched_itself = false;
        this.trail.push([this.loc[0], this.loc[1]]);
    }

    draw() {
        // display the player
        noStroke();
        fill(this.c);
        for (var i = 0; i < this.trail.length; i++)
            rect(this.trail[i][0], this.trail[i][1], this.scl, this.scl);

        fill(255);
        rect(this.loc[0], this.loc[1], this.scl, this.scl);
    }


    updatePos() {
        // If the player is not moving
        // there's no need to save its position
        if (this.vel[0] === 0 && this.vel[1] === 0) return;

        // updates the rectangle position
        this.loc[0] += this.vel[0] * this.scl * this.speed;
        this.loc[1] += this.vel[1] * this.scl * this.speed;

        let inv_speed = Math.ceil(1 / this.speed);

        // checking collision with himself
        if (this.trail.length > inv_speed) {
            for (let i = this.trail.length - 2 * inv_speed; i >= 0; i--) {
                this.touched_itself = this.doOverlap(this.loc, this.trail[i]);
                if (this.touched_itself) break;
            }
        }

        if (!(this.loc[0] === this.x && this.loc[1] === this.y) || !this.touched_itself)
            this.trail.push([this.loc[0], this.loc[1]]);

        // player can't go out of the screen
        this.loc[0] = constrain(this.loc[0], 0, windowWidth - this.scl);
        this.loc[1] = constrain(this.loc[1], 0, windowHeight - this.scl);
    }

    dir(x, y) {
        // sets the player direction
        // the player can never go immediately on the opposite direction
        if (this.vel[0] !== -x) this.vel[0] = x;
        if (this.vel[1] !== -y) this.vel[1] = y;
    }

    doOverlap(posA, posB) {
        // Returns true if two rectangles overlap
        return (posA[0] < posB[0] + this.scl && posA[0] + this.scl > posB[0] &&
            posA[1] < posB[1] + this.scl && posA[1] + this.scl > posB[1])
    }

    collidesWith(other_trail) {
        //checks if the rectangle collided with a tail
        for (let i = 0; i < other_trail.length; i++) {
            if (this.doOverlap(this.loc, other_trail[i])) return true;
        }

        // return true if the player collided with himself
        return this.touched_itself;
    }

    setSpeed(val) {
        this.speed = val;
    }

    setColor(color) {
        this.c = color;
    }

    getColor() {
        return this.c;
    }
}