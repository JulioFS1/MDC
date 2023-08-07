const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const num1 = () => {
  return new Promise((resolve) => {
    readline.question(`Enter your first number: `, (num) => {
      resolve(parseFloat(num));
    });
  });
};

const num2 = () => {
  return new Promise((resolve) => {
    readline.question(`Enter your second number: `, (num) => {
      resolve(parseFloat(num));
    });
  });
};

(async () => {
  const primeiro = await num1();
  const segundo = await num2();

  readline.question(`Now enter an operator (+, -, *, /): `, (op) => {
    let result;
    switch (op) {
      case '+':
        result = primeiro + segundo;
        break;
      case '-':
        result = primeiro - segundo;
        break;
      case '*':
        result = primeiro * segundo;
        break;
      case '/':
        result = primeiro / segundo;
        break;
      default:
        console.log(`Invalid operator.`);
        break;
    }
    console.log(`Result: ${result}`);
    readline.close();
  });
})();
