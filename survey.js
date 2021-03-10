const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = {};

rl.question('What is your name? ', namee => {
  answers.userName = namee;

  rl.question('Do you do any hobbies? ', element => {
    answers.hobbies = element;
    
    rl.question('What music do you listen to while doing the hobby? ', element => {
      answers.music = element;
      
      rl.question('What is your favourite food? ', element => {
        answers.food = element;
        rl.question('What yur favourite sport to play? ', element => {
          answers.sports = element;
          console.log(`${answers.userName} really enjoys listening to ${answers.music} while doing ${answers.hobbies}. Their favourite food is ${answers.food} and enjoys playing ${element}.`);
          rl.close();
      
        });
      });
    });
  });
});
