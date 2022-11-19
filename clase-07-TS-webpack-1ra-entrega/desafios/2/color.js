var getNum0a255 = function () { return Math.floor(Math.random() * 256); };
var Color = /** @class */ (function () {
    function Color() {
    }
    Color.prototype.get = function () {
        var color = "rgb(" + getNum0a255() + "," + getNum0a255() + "," + getNum0a255() + ")";
        return color;
    };
    return Color;
}());
var color = new Color();
console.log(color.get());

(function () {
    console.log()
})()

await fs.promises.writeFile()

console.log()