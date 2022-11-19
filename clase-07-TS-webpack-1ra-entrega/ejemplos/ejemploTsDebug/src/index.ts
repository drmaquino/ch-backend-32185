import { dividir, multiplicar, restar, sumar } from "./lib/operaciones";

const num1 = 10;
const num2 = 5;

console.log(`la suma de ${num1} y ${num2} es: ${sumar(num1, num2)}`);
console.log(`la resta de ${num1} y ${num2} es: ${restar(num1, num2)}`);
console.log(
  `la multiplicación de ${num1} y ${num2} es: ${multiplicar(num1, num2)}`,
);
console.log(`la división de ${num1} y ${num2} es: ${dividir(num1, num2)}`);
