/**  1.Highest number
Write a program that asks for 10 numbers.
Using logical operators and any other javascript functions/structures 
you've seen before, determine and output the highest of those numbers.
 */



/*
const numbers = []
for (let i = 1; i <= 10; i++) {
    numbers.push(prompt(`Ingresa tu cantidad numero ${i}`));
}

let sortedNumbers = numbers.sort((a, b)=> b - a)
console.log(sortedNumbers)
*/




/**     2.Alarm
Write a program that asks a user for the amount of seconds needed until an alarm (message)
 is executed alongside a text to show once those seconds have passed in real time.

Result example: "Time for bed after 10 seconds".
 */


/*
let alarmSeconds = prompt("How many seconds do you want your timer to last?")
alarmSeconds=parseInt (alarmSeconds);
console.log(`Your timer will last ${alarmSeconds} seconds`)

let ticker = 1

function contando() {
    console.log(`${ticker} seconds has elapsed`)
    if (ticker < alarmSeconds) {
        ticker++;
        setTimeout(contando, 1000);
    } else {
        console.log("Your timer has finished!")
    }
}
setTimeout(contando, 1000);
*/





/**       3.Palindrome
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation).
 Figure out if the sentence/word is a palindrome or not.
 Ignoring punctuation, spaces and capitalized letters.
  */


/*
let frase = prompt("Please write some text or a word:");
let limpio = frase
   .toLowerCase()
   .normalize("NFD")    //separa letras y acentos
   .replace(/[\u0300-\u036f]/g, "")  // quita acentos
   .replace(/[^a-z0-9]/g, "");       // quita signos, espacios, etc.

let inverted = limpio.split('').reverse().join('');

if (limpio === inverted) {
   console.log("Its a palindrome!");
} else {
   console.log("Its not a plaindrome :(");
}
*/




/**             4.Factorial
Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.
 */


/*
function recursion(n) {
    if (n === 1) {
        return 1;
    } else {
        return n + recursion(n - 1); // llamada recursiva
    }
}

let numero = prompt("Write the number of the integer you want:");
let n = parseInt(numero);

if (n >= 1) {
    let resultado = recursion(n);
    console.log(`The sum of 1 till ${n} is: ${resultado}`);
} else {
    console.log("The number must be 1 or >1.");
}
*/



//Ejercicios de arrays



/**                   1.Number divided into halves
 
Given a number, return the number divided into its halves in an array.
 
Examples:
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5]`.
*/


/*
let numDiv = prompt("Please state a number to process")

function process(numDiv) {
    return [numDiv / 2, numDiv / 2];
}
console.log(process(numDiv))



/**    3. Online status
 

Display online status for a list of users.
 

Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.

 */



/**   4. Array of Multiples
 

Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
 

Examples:
- `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
- `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.
 
*/


/*
let variable = Number(prompt("Give a number for the sequence please"));
let lenght = Number(prompt("State the lenght for the array"));

function multiples(variable, lenght) {
    const arranged = []
    for (let i = 1; i <= lenght; i++) {
        arranged.push(variable * i)
    }
    return arranged;
}

const array = multiples(variable, lenght)
console.log(`Here is the array of ${variable}, ${lenght}: ${array}`)
*/



/**       5. Positive dominance in Array
 

Write a function to determine if an array is positively dominant.
An array is positively dominant when the majority of its elements are positive.
 

Example:
- `positiveDom([-1, -3, -5, 4, 6767])` should return `false`. */



/*
let positiveDom = prompt("State the numbers of your array separated by comas.");
let checker = positiveDom.split(`,`).map(Number);

function process(arr) {
    let positives = arr.filter(num => num > 0).length;
    let negatives = arr.filter(num => num < 0).length;
    return positives > negatives
}
if (process(checker)) {
    console.log("Your array is positive dominant")
} else {
    console.log("Your array is negative dominant")
}
*/