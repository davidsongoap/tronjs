/*
* Author: Davidson Gonçalves
* https://github.com/davidsongoap
* File: colorPickerSetup.js
* TRON.JS
*/

let availableColors = ["#ff0a00", "#ff5588", "#4a4e4d", "#008744",
                        "#0080ff", "#6f7c85", "#8e44ad", "#f39c12",
                        "#851e3e", "#051e3e", "#4f372d", "#fe8a71",
                        "#e74c3c", "#000000", "#eeeeee"];

$("#picker1").colorPick({
    'paletteLabel': 'Colors',
    'initialColor': '#ff0a00',
    'palette': availableColors,
    'onColorSelected': function () {
        this.element.css({'backgroundColor': this.color, 'color': this.color});
        try {
            model.p1.setColor(hexToRGB(this.color))
        } catch (err) {
        }
    }
});

$("#picker2").colorPick({
    'initialColor': '#0080ff',
    'palette': availableColors,
    'onColorSelected': function () {
        this.element.css({'backgroundColor': this.color, 'color': this.color});
        try {
            model.p2.setColor(hexToRGB(this.color))
        } catch (err) {
        }
    }
});

function hexToRGB(hex) {
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);
    return color(r, g, b);
}