/*
let counter = 1
do {
    if (counter % 3 === 0 && counter % 5 === 0) {
        console.log(`El numero ${counter} es FizzBuzz `)
    }
    else if (counter % 3 === 0) {
        console.log(`El numero ${counter} es Fizz`)
    }
    else if (counter % 5 === 0) {
        console.log(`El numero ${counter} es Buzz`)
    }
    else {
        console.log(counter)
    }
    counter++
} while (counter <= 100)
 */

//Firma de la funcion
const fizzBuzz = (counterNumber) => {
    let counter = 1;
    do {
        if (counter % 3 === 0 && counter % 5 === 0) {
            console.log(`El numero ${counter} es FizzBuzz `)
        }
        else if (counter % 3 === 0) {
            console.log(`El numero ${counter} es Fizz`)
        }
        else if (counter % 5 === 0) {
            console.log(`El numero ${counter} es Buzz`)
        }
        else {
            console.log(counter)
        }
        counter++
    } while (counter <= counterNumber)
};

console.log("50 veces");
fizzBuzz(50);
console.log("200 veces");
fizzBuzz(200);