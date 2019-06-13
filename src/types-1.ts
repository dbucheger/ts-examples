// *** Booleans ***
let isLoading: boolean = true;
let hasErrors: boolean;

isLoading = false;
hasErrors = true;
// isLoading = 5;


// *** Numbers ***
const limit: number = 10;
let index: number = 0;

// index = '5';
index += limit;


// *** Strings ***
const rootDir: string = 'examples/src';
let typesDemo: string = `${rootDir}/types`;

// rootDir = typesDemo = true;


// *** Objects ***
let user: object = { name: 'john doe', id: 1 };


// *** Arrays ***
let numberList: number[] = [1, 2, 3];
let stringList: string[] = ['fizz', 'buzz'];
let objectList: object[] = [
  { name: 'john smith', id: 1 },
  { name: 'jane smith', id: 2 },
]


// *** Enums ***
enum Color {Red, Green, Blue}
let c: Color = Color.Green;


// *** Any ***
let inputValue: any;
inputValue = 4;
inputValue = 'test';


// *** Void ***
// the opposite of 'any'
