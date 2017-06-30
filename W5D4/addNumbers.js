const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers (sum = 0 , numsLeft, completionCallback){

  if (numsLeft > 0) {
    reader.question('Enter A Number', (res) => {
      const newNum = parseInt(res);
      sum += newNum;
      console.log(sum);
      numsLeft -= 1;
      addNumbers (sum, numsLeft,completionCallback);
    });
  } else {
    completionCallback(sum);
  }

}


addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
