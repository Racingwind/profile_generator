const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  rl.question('What do you like to do on your free time? ', (activity) => {
    rl.question('What is your favorite snack? ', (snack) => {
      rl.question('What is your favorite music genre? ', (music) => {
        
        rl.close();
      });        
    });
  });
});