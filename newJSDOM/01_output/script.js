/*    
        Ways to produce outputs
        1. Console
        2. Alert
        3. Document
        4. innerHTML

*/
//Console
console.log("Welcome to JS - Console")
console.warn("Welcome to JS - Console")
console.error("Welcome to JS - Console")

//Alert
// alert('Welcome to JS - Alert')
// console.log("After Alert")


//Document

document.write('Welcome to JS - Document')
document.write('<br /> Another Line')

//innerHTML
//target + content
//getElementByID
document.getElementById('hello_heading').innerHTML = 'Welcome to JS - innerHTML'

//variable

//how to declare a variable

//var || let || const

let a = 8;
let A = 7

console.log(a == A)
let write = (id, val) => document.querySelector(`#${id}`).innerHTML = val



//Operators
//Unary  (+, -) ---> one operand
//Binary (+, -, *, **, /, %) --> Operand
//Ternary (?:) --> three operand


//Unary
let age = + '37';
write('result', age)
write('result', typeof age)

// equality

// =, assignment operator
//==, value comparison
//===, value and type comparison; strict comparison


//ternary operator
//?:
// (Condition) ? (value if true) : (value if false)

let bal = 3 > 5 ? 'true__output' : 'false__output'
write('result', bal)




