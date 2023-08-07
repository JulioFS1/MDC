const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const num1 = () => {
  return new Promise((resolve) => {
    readline.question(`Enter your first grade: `, (num) => {
      resolve(parseFloat(num));
    });
  });
};

const num2 = () => {
  return new Promise((resolve) => {
    readline.question(`Enter your second grade: `, (num) => {
      resolve(parseFloat(num));
    });
  });
};

const num3 = () => {
  return new Promise((resolve) => {
    readline.question(`Enter your third grade: `, (num) => {
      resolve(parseFloat(num));
    });
  });
};

(async () => {
  const primeiro = await num1();
  const segundo = await num2();
  const terceiro = await num3();

  const result = await (primeiro + segundo + terceiro) / 3;

  console.log(`Your calculated average grade is: ${result.toFixed(1)}`);
  readline.close();
})();