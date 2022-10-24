// 10. Utilizando do...while, imprima na tela a soma de todos os números
// entre 10 e 100.

let numInicial: number = 10;
let numSoma: number = 0;
do {
  numSoma += numInicial;
  numInicial++;
} while (numInicial <= 100);
console.log(numSoma);
