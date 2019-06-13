// Function with typed inputs and output
function add(x, y) {
    return x + y;
}
// With optional parameter
function addThree(x, y, z) {
    return z ? x + y + z : x + y;
}
//  With default parameter
function buildName(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
// Arrow functions with typing -- seem overly complex in TSlang's docs
