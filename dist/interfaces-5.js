function createSquare(config) {
    var newSquare = {
        color: 'blue',
        area: 100
    };
    newSquare.area = config.width * config.width;
    if (config.color) {
        newSquare.color = config.color;
    }
    return newSquare;
}
var square1 = createSquare({ width: 5, color: "black" });
var square2 = createSquare({ width: 10 });
console.log(JSON.stringify(square1));
console.log(JSON.stringify(square2));
