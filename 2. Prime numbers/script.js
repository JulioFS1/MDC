const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Enter a number, and I will say if it is a prime number o not: `, numero => {
  
  parseFloat(numero);

  function checkPrime(num) {
    let primo = true;

    for (let j = 2; j <= Math.sqrt(num); j++) {
      if (num % j === 0) {
        primo = false;
        break;
      }
    }

    if (primo) {
      return `${num} is prime!`;
    } else {
      return `${num} is not prime!`
    }
  };

firstTen = () => {
  let arr = [2];
  let i = 3;

  while (arr.length < 10) {
    let primo = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        primo = false;
        break;
      }
    }

    if (primo) {
      arr.push(i);
    }

    i++; 
  }

  return arr;
};

  console.log(checkPrime(numero));
  console.log("These are the first ten prime numbers: " + firstTen());
  readline.close();
});


