interface SquareConfig {
  width: number;
  color?: string;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {
      color: 'blue',
      area: 100
    };

    newSquare.area = config.width * config.width;

    if (config.color) {
        newSquare.color = config.color;
    }

    return newSquare;
}

const square1 = createSquare({width: 5, color: "black"});
const square2 = createSquare({width: 10});


console.log(JSON.stringify(square1));
console.log(JSON.stringify(square2));
