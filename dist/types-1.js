// *** Booleans ***
var isLoading = true;
var hasErrors;
isLoading = false;
hasErrors = true;
// isLoading = 5;
// *** Numbers ***
var limit = 10;
var index = 0;
// index = '5';
index += limit;
// *** Strings ***
var rootDir = 'examples/src';
var typesDemo = rootDir + "/types";
// rootDir = typesDemo = true;
// *** Objects ***
var user = { name: 'john doe', id: 1 };
// *** Arrays ***
var numberList = [1, 2, 3];
var stringList = ['fizz', 'buzz'];
var objectList = [
    { name: 'john smith', id: 1 },
    { name: 'jane smith', id: 2 },
];
// *** Enums ***
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
// *** Any ***
var inputValue;
inputValue = 4;
inputValue = 'test';
// *** Void ***
// the opposite of 'any'
