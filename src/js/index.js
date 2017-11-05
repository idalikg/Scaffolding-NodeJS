import {multiplicacion} from './operations.js';

var a= 3;
var b = 12;

var suma = (a,b) => {
    // var resultado = a + b;
    // return resultado;
    return a + b;
};

console.log(`La suma de a + b es igual a: ${suma(a,b)}`);

console.log(`La multiplicación de a * b es igual a: ${multiplicacion(a,b)}`);