/**Suma de resistores en serie
 * Calcula la suma de  todos los resistores conectados en serie 
 * Nota: usar el valor absoluto de cada resistencia para asegurar que todos los valores sean positivos
 */

//1. un array con los valores de las resistencias. n Suma de las resitencias en serie
//2.Usando math.abs obtener el valor absoluto de los elementos del array-
//2.1 Usar un map para obtener todos los valores del array
//3.reduce; usar ciclos para hacer la suma
//4. devolver un mensaje del tipo "15 ohms"


function sumOfResistors(resistorsArray) {
    const resistorsAbs = resistorsArray.map((resistor) => Math.abs(resistor));
    const totalResistance = resistorsAbs.reduce((total, current) => total + current, 0);
    return `${totalResistance} ohms`
}
console.log(sumOfResistors([-1,-5,-3,-6,-9,-6]))
console.log(sumOfResistors([-1,5,6,1]))
console.log(sumOfResistors([14,6,18,23,4]))
console.log(sumOfResistors([14,3.5,4]))