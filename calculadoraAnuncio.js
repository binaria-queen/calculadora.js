// Calculo de anuncios da quantidade pessoas que clicam, compartilham e visualizam foram arredondadas e calculando o alcance de pessoas
 let valorInvestido = 100;

function calcularAlcancePessoas(valorInvestido)
{

  let compartilhamentosRealizados = 0;
  let alcanceTotalPessoas= 0;
  let alcanceAnuncioOriginal = Math.floor(valorInvestido * 30);

  compartilhamentosRealizados = 
     Math.floor(Math.floor(
     Math.floor(((((alcanceAnuncioOriginal)/100))* 12))/20)*3);

  if (compartilhamentosRealizados >= 4) {
    alcanceTotalPessoas = alcanceAnuncioOriginal + 160;
  } else {
    alcanceTotalPessoas = 
    alcanceAnuncioOriginal + compartilhamentosRealizados * 40;
  }

  return alcanceTotalPessoas;
}

console.log(calcularAlcancePessoas(valorInvestido));


// Testes unitarios 
// module.exports = calcularAlcancePessoas;

// let valorInvestido = 100;

// const calcularAlcancePessoas= require('./calcularAlcancePessoas');
// test('o Alcance de pessoas  para 100 reais investido é igual a 3160', () => {
//   expect(calcularAlcancePessoas(valorInvestido).toBe(3160)
// });


