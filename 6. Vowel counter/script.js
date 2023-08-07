const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a sentence and I will give to you how many vowls it has: ', (sentence) => {

function countVog(frase) {
  const vog = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let letra of frase.toLowerCase()) {
    if (vog.includes(letra)) {
      count++;
    }
  }

  return count;
}

  console.log(`The number of vowels in your sentence is: ` + countVog(sentence));
  rl.close();
});

