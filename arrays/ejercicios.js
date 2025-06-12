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


