//string --> collection of characters
//string --> can be iterated using a for loop (Loop of)

let alphabet = 'abcdefghijklmnopqrstuvwxyz'
let excludes = ['a', 'e', 'i', 'o', 'u']
let result = ''
for(let char of alphabet){
    if(excludes.includes(char)) continue; //will skip the characters in excludes it says that if a character is included in the exclude variable it will skip that character
    result += char
}
console.log(`Current results is ${result}`)
//how to break strings in multiple lines ---> slash (\) ----> escape character 
// \t ---> tab, ---> \n new line, \r ---> carriageReturn


let fragment = "Lorem ipsum dolor sit amet consectetur adipisicing elit. \
Doloremque, eligendi distinctio? Corporis sequi necessitatibus similique \
quae nobis quam delectus nisi et accusamus, eos amet rerum tempora, quos a ex maxime! "