// Code your solutions in this file

function writeCards(names, value) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${value} gift!`);
    }
    return messages;
    
}

const result = writeCards(["Guadelupe", "Ollie", "Aki"], "surprise");
console.log(result);

function countDown(number) {
    let x = number;
    while (x >= 0) {
        console.log(x);
        x--;
        }
}

console.log(countDown(10));

console.log(countDown(4));

function countUp(number, number2) {
    do { 
        console.log(number++)
    } while (number < number2);
    return number;
}

console.log(countUp(10, 20));