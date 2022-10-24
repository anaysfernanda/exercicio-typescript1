// 3. Uma loja de eletrodomésticos estabeleceu as seguintes modalidades
// de pagamento para a venda de suas mercadorias:
// À vista: desconto de 2,5% sobre o preço da tabela;
// de 2 até 5 vezes: preço de tabela, sem desconto ou acréscimo;
// de 6 até 10 vezes: juros de 6% sobre o preço de tabela;
// de 11 até 15 vezes: juros de 13% sobre o preço de tabela.

// Escreva um algoritmo que armazene o preço de tabela e o número de
// vezes em que o pagamento será feito. Calcule o valor de cada parcela e o
// preço total da compra e imprima no console.

let preco: number = 199.9;
let parcelas: number = 3;

let valorParcela: number = 0;
let precoTotal: number = 0;

if (parcelas == 1) {
  precoTotal = preco - preco * 0.025;
  console.log(`Você pagará R$ ${precoTotal} no produto.`);
} else if (parcelas >= 2 && parcelas <= 5) {
  console.log(
    `Você pagará R$ ${preco.toFixed(2)} no produto em ${parcelas} parcelas.`
  );
} else if (parcelas <= 10) {
  precoTotal = preco + preco * 0.06;
  valorParcela = precoTotal / parcelas;
  console.log(`Você pagará R$ ${precoTotal} no produto.`);
  console.log(
    `Você pagará ${parcelas} parcelas de R$ ${valorParcela.toFixed(2)}.`
  );
} else if (parcelas <= 15) {
  precoTotal = preco + preco * 0.13;
  valorParcela = precoTotal / parcelas;
  console.log(`Você pagará R$ ${precoTotal} no produto.`);
  console.log(
    `Você pagará ${parcelas} parcelas de R$ ${valorParcela.toFixed(2)}.`
  );
} else {
  console.log(`Você pode dividir em no máximo 15 parcelas!`);
}
