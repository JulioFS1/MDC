const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number and I will give it's table: ", (numero) => {

function mostrarTable(numero) {
  for (let i = 1; i <= 10; i++) {
    const result = numero * i;
    console.log(`${numero} x ${i} = ${result}`);
  }
  rl.close();
}

  if (isNaN(numero)) {
    console.log('Invalid input. Please enter a valid number.');
    rl.close();
  } else {
    mostrarTable(parseInt(numero));
  }
});
