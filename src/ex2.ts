// 2. Escreva um algoritmo que armazene o número total de eleitores de um
// município, o número de votos brancos, nulos e válidos. Calcular e escrever
// o percentual que cada um representa em relação ao total de eleitores. O
// algoritmo deve fazer uma validação para que as porcentagens dos votos
// armazenados (brancos, nulos e válidos) respeitem o limite do número
// total de eleitores, ou seja, garantir que a soma dos votos brancos, nulos e
// válidos não seja maior que o número total de eleitores.

let eleitoresMunicipio: number = 1000;

let votosBrancos: number = 200;
let votosNulos: number = 100;
let votosValidos: number = 500;

let porcBrancos = (votosBrancos / eleitoresMunicipio) * 100;
let porcNulos = (votosNulos / eleitoresMunicipio) * 100;
let porcValidos = (votosValidos / eleitoresMunicipio) * 100;

if (porcBrancos + porcNulos + porcValidos <= 100) {
  console.log(
    `O município teve ${porcBrancos.toFixed(
      1
    )}% de votos brancos, ${porcNulos.toFixed(
      1
    )}% de votos nulos e ${porcValidos.toFixed(1)}% de votos válidos`
  );
} else {
  console.log(
    `Foi declarada uma quantidade de votos maior que a quantidade de eleitores!`
  );
}
