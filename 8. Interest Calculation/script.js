const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const num1 = () => {
  return new Promise((resolve) => {
    readline.question(`Enter your initial capital: `, (num) => {
      resolve(parseFloat(num));
    });
  });
};

const num2 = () => {
  return new Promise((resolve) => {
    readline.question(`Enter your interest rate (per month): `, (num) => {
      resolve(parseFloat(num));
    });
  });
};

const num3 = () => {
  return new Promise((resolve) => {
    readline.question(`Enter your investment time (months): `, (num) => {
      resolve(parseFloat(num));
    });
  });
};

(async () => {
  const capital= await num1();
  const juros = await num2();
  const tempo = await num3();

  const montante = await capital * (Math.pow((1 + (Math.pow((1 + (juros/100)), 12)-1)), (tempo/12)));

  console.log(`The final value of your investment is: ${montante.toFixed(2)}`);
  readline.close();
})();
