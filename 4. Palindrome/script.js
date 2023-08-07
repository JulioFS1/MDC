const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Type a word and i will say if it is or not a palindrome: `, palavra => {

  function checkPalindrome(input) {
    var result = '';
    var i = input.length - 1;
    while (i >= 0) {
          result = result + input[i--];
      }
      
    if(result === palavra) {
      console.log(`${palavra} is a palindrome!`);
    } else {
      console.log(`${palavra} is not a palindrome!`);
    }
  }

  checkPalindrome(palavra);
  readline.close();
});


