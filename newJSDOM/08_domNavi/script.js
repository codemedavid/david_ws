const user = {
    name: 'John Angelo David',
    type: 'Admin',
    region: 'south-east',
    attributes: [
        {
            lastLogin: '2023-07-18',
            id: '0812h12h119382'
        }
    ]
}

let {name, type, region} = user
let {lastLogin, id} = user.attributes[0]

const fruits = ['apple', 'mango'];
let [red, green, yellow] = fruits;


//spread operator

const colors = ['red', 'purple', 'green', 'blue', 'white'];
const crayonBox = {...colors} //instead na isa isa yung lagay nung value simply use the spread operator para masalasansan yung value

const crayonWheel = [...colors]

const logger = (...msg) => {
    console.log(msg)
}

const multiply = (...multiply) => {
    return multiply.reduce((a,b) => a*b)
}

console.log("After variable")