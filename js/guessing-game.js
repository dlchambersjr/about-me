'use strict';

// Define Question Variables and Array

var question = 1, questionAnswer = 2, correctResponse = 3, wrongResponse = 4,
  questionArray = [
    [1,
      'Do I have two dogs, a cat, and a pet fish named "Gas Station?"',
      false,
      'You got it right! I only have two dogs now.  Their names are Mia and Henderson.  They are sibling Black Lab - Golden Retrievers.',
      'I\'m sorry, that\'s incorrect... I used to have all of those animals, but now I have just two dogs.'],
    [2,
      'Did I once live in the country of Turkey',
      true,
      'You\'re so smart! I lived in the country of Turkey when I was in the second and third grade.  It\'s one of my favorite memories.',
      'Bummer, you missed that one.  I did live in Turkey when I was in the second and third grade.  It was one of my favorite places.  Better luck on the next question.'],
    [3,
      'Have I been married for thirty years?',
      true,
      'Nailed it! I married my amazing wife, Lisa, when I was 18 and we just celebrated our 30th anniversary last April.',
      'You missed that one. I have been married for 30 years, but it feels like I got married yesterday.'],
    [4,
      'Do I have four children?',
      false,
      'Can\'t fool you, can I? I have three children, but they do not live at home anymore.  They are all "Adulting" on their own now.',
      'Oops, not quite... I only have three children.  They are all grown-up and living out of the house.'],
    [5,
      'Did I spend Christmas 2016 in China?',
      true,
      'Wow!  Great answer! I took my wife and daughter to China for three weeks in 2016.  I can\'t wait to go back!',
      'Keep trying. I did go to China for Chirstmas in 2016.  I even got to walk on the Great Wall!'],
    [6,
      'Guess a number between 1 and 10.',
      0,
      'Good Job!  You got it right!  The answer was, in fact, ',
      'Im sorry, you ran out of guesses for this one.  The correct answer is '],
    [7,
      'Can you guess a fruit that I have in my kitchen?',
      ['dates','cherries','oranges','bananas','mangos'],
      'You got one!',
      'I\'m sorry, you\'re out of guesses...']
  ];

// Define Guessing Game Functions

function validateAnswer(userInput,num) {
  // Validate Questions 1 - 5
  console.log ('question number : ', num + 1);
  if (num + 1 < 6) {
    var answerOK = ['yes', 'no', 'y', 'n'];
    console.log('the user input=',userInput);
    while (answerOK.indexOf(userInput) === -1) {
      userInput = prompt(userName + ', please enter only "yes", "no", "y", or "n".').toLowerCase();
      console.log('The user reentered: ', userInput);
    }
    if (userInput === 'y' || userInput === 'yes') {
      userInput = true;
    } else {
      userInput = false;
      return userInput;
    }

  // Validate Question 6
  } else if (num + 1 < 7) {
    console.log('question 6 answer: ',userInput);
    while (isNaN(userInput)) {
      userInput = parseFloat(prompt('Please only enter a number. Try again!'));
    }
    return userInput;

  // Validate Question 7
  } else if (num + 1 < 8) {
    return userInput;
  }
}

function guessingGame() {
  var questionNum = 0;

  // Lab-02 Five Questions
  while (questionNum +1 < 6) {
    var answer = prompt('Question #' + questionArray[questionNum][0] + '\n\n' + questionArray[questionNum][question]).toLowerCase();
    console.log('user eneterd ,', answer);
    answer = validateAnswer(answer,questionNum);
    console.log('validate is returning ',answer);
    console.log('correct answer is ', questionArray[questionNum][questionAnswer]);
    if (answer === questionArray[questionNum][questionAnswer]) {
      alert(questionArray[questionNum][correctResponse]);
      correctQuestions++;
    } else {
      alert(questionArray[questionNum][wrongResponse]);
    }
    questionNum++;
  }

  // Lab-03 Question 6
  var guess = 0;
  questionArray[questionNum][questionAnswer] = Math.floor(Math.random() * 10) + 1;

  alert(userName + ', let\'s play a guessing game now.\n\nYou get four chances to guess a numbe between 1 and 10. Click OK when you are ready to begin.');

  while (guess !== 0) {
    answer = prompt('Question #' + questionArray[questionNum][0] + '\n\n' + questionArray[questionNum][question]).toLowerCase();
    answer = parseFloat(answer);
    answer = validateAnswer(answer,questionArray[questionNum][0]);
    if (answer === questionArray[questionNum][questionAnswer]) {
      alert(questionArray[questionNum][correctResponse]);
      correctQuestions++;
    } else {
      alert(questionArray[questionNum][wrongResponse]);
      guess--;
    }
    questionNum++;

    // Lab-04 Question 7
  }
}
// function questionSix() {
//   alert(userName + ', let\'s play a guessing game.  Click OK when you are ready.');

//   var guess = 1, actualMiles = 280;

//   while (guess <= 4) {
//     var miles = parseFloat(prompt('GUESS #' + guess + '\n\n' + userName + ' can you tell me how the number of miles I drove my car last week?'));
//     console.log ('miles is', miles);
//     while (isNaN(miles)) {
//       miles = parseFloat(prompt(userName + ', you need to enter a number. Please try GUESS #' + guess + ' again. \n\nCan you tell me the number of miles I drove my car last week?'));
//     }
//     console.log ('guess #', guess);
//     if (miles === actualMiles) {
//       alert('Congratulations ' + userName + '! \n\nYou got it right!');
//       console.log ('user guessed ' + miles + 'break the cycle... guess is now ' + guess);
//       correctQuestions++;
//       guess = 5;
//     }
//     console.log('guess before missed = ' + guess);
//     if (miles < actualMiles) {
//       alert('I\'m sorry, ' + userName + ', your guess is too low.  Try again, please.');
//       console.log('the user guessed ' + miles + ' and guess is at ' + guess);
//     } else if (guess <= 4 && miles > actualMiles) {
//       alert('I\'m sorry, ' + userName + ', your guess was to high.  Please try again.');
//       console.log('the user guessed ' + miles);
//     }
//     if (guess === 4) {
//       alert('I\'m sorry, ' + userName + ', unfortunately, that was your last guess.  The correct answer was ' + actualMiles +' miles');
//     }
//     guess ++;
//   }
// }

// function questionSeven() {
//   var fruitList = ['dates','cherries','oranges','bananas','mangos'], fruitGuess, attempt = 6;

//   alert(userName + ', I\'m really glad you like guessing games as much as I do! \n\nThis time you will get six attempts to guess a type of fruit I have in my kitchen.  Click OK when you are ready.');

//   while (attempt !== 0) {
//     fruitGuess = prompt('You have ' + attempt + ' of 6 attempts remaining.\n\nGuess a fruit please, ' + userName + '.').toLowerCase(); // get the guess
//     console.log ('Remaining attempts #', attempt);
//     console.log('Guessed fruit=', fruitGuess);
//     console.log('did the user match-',fruitList.includes(fruitGuess));
//     if (fruitList.includes(fruitGuess)) {
//       var matchedFruit = [fruitList.splice(fruitList.indexOf(fruitGuess),1)];
//       alert('Good Job ' + userName + '!\n\n You have figured out that I have ' + fruitGuess + ' in my kitchen.');
//       correctQuestions++;
//       attempt = 0;
//     } else {
//       alert('I do not have any ' + fruitGuess + ' in my kitchen, ' + userName +'\n\nPlease try again');
//       attempt --;
//     }
//   }

//   // present results to user.
//   if (fruitList.length === 5) {
//     alert(userName + ', you identified no fruit in my kitchen.\n\nYou could have guessed: ' + fruitList +'\n\nTHANKS FOR PLAYING!');
//   } else {
//     alert(userName + ', you identified ' + matchedFruit + ' in my kitchen.\n\nYou could have also guessed: ' + fruitList +'\n\nTHANKS FOR PLAYING!');
//   }
// }


// Get the user's name
var userName = prompt('Thanks for stopping by! My name is David.\n\nWhat is your name?');

console.log('User was asked their name and they responded: ' + userName);

// Play the guessing game


// Ask them five questions about myself - set the correct question counter to 0
var correctQuestions = 0;

alert('Now that you\'ve seen the page, ' + userName + ', I\'m going to ask you some questions to see how much you learned.\n\nThese are all yes/no questions, so feel free to answer with y/n or yes/no.');

// Ask the first five questions
guessingGame(correctQuestions);

// // Lab-03 WORK:

// // Question #6
// questionSix();

// // Question #7

// // define my array of fruits, the fruit guess, and set the number of attmepts
// questionSeven();

// Show the user the results of the quiz
//   alert('Thanks for taking the quiz, ' + userName + '!  You got ' + correctQuestions + ' out of 7 questions correct.')