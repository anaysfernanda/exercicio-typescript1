// 4. Escrever um algoritmo que calcule e mostre a média aritmética dos
// números lidos entre 13 e 73.

let media: number = 0;
let n: number = 0;
for (let i: number = 13; i <= 73; i++) {
  n = n + i;
}
media = n / (73 - 13);
console.log(`A média é ${media.toFixed(2)}`);
