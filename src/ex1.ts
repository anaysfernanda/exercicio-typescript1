// 1. Crie um algoritmo que armazene três valores, para cada um dos lados
// de um triângulo: A, B e C. Verifique se os lados fornecidos formam
// realmente um triângulo. Se formar, deve mostrar no console o tipo de
// triângulo: isósceles, escaleno ou equilátero.

let lado1: number = 12;
let lado2: number = 11;
let lado3: number = 10;

if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2) {
  if (lado1 == lado2 && lado2 == lado3 && lado1 == lado3) {
    console.log(`É um triângulo equilátero`);
  } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
    console.log(`É um triângulo isósceles`);
  } else if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3) {
    console.log(`É um triângulo escaleno`);
  }
} else {
  console.log(`Não é um triângulo!`);
}
