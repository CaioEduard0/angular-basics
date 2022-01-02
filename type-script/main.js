var myVar = "my variable";
function myFunc(x, y) {
    return x + y;
}
//ES6 / 2015
var num = 2;
var PI = 3.14;
var numbers = [1, 2, 3];
numbers.map(function (n) {
    return n * 2;
});
numbers.map(function (n) { return n * 2; });
var Mathh = /** @class */ (function () {
    function Mathh() {
    }
    Mathh.prototype.sum = function (x, y) {
        return x + y;
    };
    return Mathh;
}());
