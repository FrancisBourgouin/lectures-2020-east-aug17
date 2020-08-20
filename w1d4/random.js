const add = (a, b) => a + b
// When defined we don't know a and b yet

add(5, 6)
// We know when we use or call the function


const mathematicalOperation = (a, b, operation) => operation(a, b)
// We don't a, b and the operation when defined

mathematicalOperation(5, 6, add)
mathematicalOperation(5, 6, (a, b) => a + b)