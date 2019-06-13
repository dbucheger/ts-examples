// *** Define a class decorator ***
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);

    console.log('sealed like a drum');
}

// *** Use the decorator ***
@sealed
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
