// 7. Para o mesmo exercício acima insira mais uma variável a condicional,
// além de saber se o motorista tem 18 anos ou mais, temos que saber
// também se ele é habilitado para dirigir. Caso ele tenha idade maior ou
// igual a 18 anos e possua habilitação, imprima no console “Pode dirigir”
// caso contrário imprima “Não pode dirigir”.

let idadeAtual: number = 22;
let habilitacao: boolean = false;

if (idadeAtual >= 18) {
  if (habilitacao) {
    console.log("Pode dirigir!");
  } else {
    console.log("Não pode dirigir!");
  }
} else {
  console.log("Não pode dirigir!");
}
