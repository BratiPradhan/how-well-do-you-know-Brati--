var readlineSync = require('readline-sync');
var chalk = require('chalk')

var score = 0;

var userName = readlineSync.question('What is your name? ');

console.log(chalk.bgMagenta('Hello ' +userName+ ', Welcome to DO YOU KNOW BRATI? '));


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  console.log(chalk.yellow('You answered ' +userAnswer));

  if(userAnswer.toLowerCase() === answer) {
    console.log(chalk.green('Wow, you know that. That is amazing!!!'));
    score = score +1;
  } else {
    console.log(chalk.magenta('No problem, we can still be friends!!!'))
  }

  console.log(chalk.cyan('Current Score: ' + score));
};

// array of objects
var questions = [
  {
    "question": "Where do I live? ",
    "answer": "bhopal"
  },
  {
    "question": "What is my mother tongue? ",
    "answer": "bengali"
  },
  {
    "question": "Who is my teacher? ",
    "answer": "tanay pratap"
  }
]

// loop
for(var i = 0; i < questions.length; i++) {
   play(questions[i].question, questions[i].answer);
}

// final score
  if(score === questions.length){
    console.log(chalk.green('Final Score: ' + score));
    console.log(`Wow, you know me quit much. That's interesting!!!`)
  } else {
    console.log(chalk.magenta('Final Score: ' + score));
  }

console.log(chalk.bgMagenta("Thank You for playing DO YOU KNOW BRATI? "))