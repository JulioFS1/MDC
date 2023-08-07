const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Enter a number, and I will deliver it's factorial: `, numero => {
  parseFloat(numero);
  let fim = [];
  let resultado = 0;
  let strNum = numero;

  function fatorial(arr) {
    let result = 1;
    for (let num of arr) {
      result *= num;
    }
    return result;
  }

  while (numero > 1) {
    fim.push(numero);
    numero -= 1;
    resultado = fatorial(fim);
  }

  console.log(`The factorial of ${strNum} is: ` + resultado);
  readline.close();
});


