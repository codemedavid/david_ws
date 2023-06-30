
console.log('Hello')


let color = 'red'

console.log(`after`)


if(color == 'red') console.log('it is red');
color == 'red' && console.log('it is red')
color == 'red' ? console.log('it is red') : console.log('its NOT red')


let colorCode;
let severity = 'Super High'
let emailBody;
let sendEmail = function(to, emailBody){
    console.log('*'.repeat(50))
    console.log(`To: ${to} \n`)
    console.log(`\t ${emailBody}`)
    console.log('*'.repeat(50))
}




//Best alternative for switch statements
let severityConverter = {
    Low: 'Blue',
    Normal: 'Orange',
    High: 'Red'
}
colorCode = severityConverter[severity] || 'White'

emailBody = `A system alert was raised to ${colorCode} code. Please login and resolved this ${colorCode} code. ASAP`
sendEmail('forpersonalonly191@gmail.com', emailBody)



