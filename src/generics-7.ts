// from http://www.typescriptlang.org/docs/handbook/generics.html

// *** Generics are useful for capturing information about a type ***
function identity<T>(arg: T): T {
    return arg;
}
