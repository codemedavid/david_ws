//For Loops
//for(initialization; terminal condition; delta){ statement }

/*
for(let i = 0; i < 12; ++i){    
    console.log(`Current value of index/counter is ${i}`)
}

for(let i = 0; i < 12; i++){    
    console.log(`Current value of index/counter is ${i}`)
}
*/

//break --> way to exit a loop
for(let i = 0; i < 10; i++){
    if(i == 8) break;
    console.log(`Break Current value of index/counter ${i}`)
}

// continue --> way to skip a loop
for(let i = 0; i < 10; i++){
    if(i % 2 == 0) continue;
    console.log(`Continue Current value of index/counter ${i}`)
}

//FOR
//FOR OF
//FOR IN
//FOR EACH
//WHILE
//DO WHILE

let crayons = ['Red', 'Green', 'Blue']
let colors = []
let vivid = new Array(5)

//FOR OF --> Iteratables (Array, Collections)
//for (Key of Iteratable) { statement|break|continue }
//if you have an array instead of using the normal for loop use for of instead

for(crayola of crayons){
    console.log(`Current crayola is colored ${crayola}`)
}

//FOR IN --> Objects keys/values not Iteratables

let creature = {} //this is an object
let person = new Object();
let human = {
    hairColor: 'Pink',
    hands: 2,
    eyeColor: 'brown',
    alive: true,
    height: 175,
    weight: 67,
    eat: function(){this.weight += 1}
}

console.log('After object')

//FOR IN SYNTAX
//for(key in object){ statement||break||continue };
for(key in human){
    console.log(`${key}: Current value is ${human[key]}`)
}

let car = {
    model: 'Tesla',
    year: '2022',
    accessories: {
        seat: 4,
        windows: 4,
        battery: 3000,
        tires: 3
    }
}

//nested object for in
console.log('*'.repeat(30))
for(key in car){
    
    if(car[key] == '[object Object]'){
        console.log(`${key} : `)
        for(key2 in car[key]){
            console.log(`\t ${key2}: The Current Accessories is ${car[key][key2]}`)
        }
    }else{

        console.log(`${key}: The Current value is ${car[key]}`)
    }
    
}


