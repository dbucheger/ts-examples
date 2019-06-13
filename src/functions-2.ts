// Function with typed inputs and output
function add(x: number, y: number): number {
    return x + y;
}

// With optional parameter
function addThree(x: number, y: number, z?: number): number {
  return z ? x+y+z : x+y;
}


//  With default parameter
function buildName(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}


// Arrow functions with typing -- seem overly complex in TSlang's docs
