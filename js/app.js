'use strict';

// Get the user's name
var userName = prompt('Hi there, what is your name?');

console.log('User was asked their name and they responded: ' + userName);

// Ask them five questions about myself - set the correct question counter to 0
var correctQuestions = 0;

alert('Hello ' + userName + ', thank you for visiting my "About Me" page. Before you see the page, I\'m going to ask you some questions to see how much you know about me already. These are all yes/no questions, so feel free to answer with y/n or yes/no.');

// Question #1
var answerOne = prompt('Question #1, ' + userName + ': Do I have two dogs, a cat, and a pet fish named "Gas Station?"').toLowerCase();

if (answerOne === 'n' || answerOne === 'no') {
  alert('You got it right, ' + userName +'!  I only have two dogs now.  Their names are Mia and Henderson.  They are sibling Black Lab - Golden Retrievers');
  correctQuestions ++;
  console.log('user was asked about my pets and respnded with ' + answerOne + '. They currently have ' + correctQuestions + 'questions correct.');
} else {
  alert('I\'m sorry, ' + userName + '. I used to have all of those animals, but now I have just two dogs.');
  console.log('user was asked about my pets and responded with ' + answerOne + '. They currently have ' + correctQuestions + ' questions correct.');
}

// Question #2
var answerTwo = prompt('Question #2, ' + userName + ': Did I once live in the country of Turkey').toLowerCase();

if (answerTwo === 'y' || answerTwo === 'yes') {
  alert('You\'re so smart, ' + userName + '! I lived in the country of Turkey when I was in the second and third grade.  It\'s one of my favorite memories.');
  correctQuestions ++;
  console.log('the user was asked about living in Turkey and they answered ' + answerTwo + '. They now have ' + correctQuestions + ' correct');
} else {
  alert('Bummer, ' + userName + '. You missed that one.  I did live in Turkey when I was in the second and third grade.  It was one of my favorite places.  Better luck on the next question.');
  console.log('the user was asked about living in Turkey and they answered ' + answerTwo + '. They now have ' + correctQuestions + ' questions correct');
}

// Question #3
var answerThree = prompt('OK, ' + userName +'... here is Question #3: Have I been married for thirty years?').toLowerCase();

if (answerThree === 'y' || answerThree === 'yes') {
  alert('Nailed it, ' + userName + '! I married my amazing wife, Lisa, when I was 18 and we just celebrated our 30th anniversary last April.');
  correctQuestions ++;
  console.log('the user was asked about how long I have been married and answered ' + answerThree + '. They now have ' + correctQuestions + ' correct');
} else {
  alert('You missed that one, ' + userName + '. I have been married for 30 years, but it feels like I got married yesterday.');
  console.log('the user was asked about how long I have been married and answered ' + answerThree + '. They now have ' + correctQuestions + ' questions correct');
}

// Question #4
var answerFour = prompt('Almost done.  Here is Question #4, ' + userName + ': Do I have four children?').toLowerCase();

if (answerFour === 'n' || answerFour === 'no') {
  alert('Can\'t fool you, ' + userName +'!  You got it correct!  I have three children, but they do not live at home anymore.  They are all "Adulting" on their own now.');
  correctQuestions ++;
  console.log('user was asked about my children and respnded with ' + answerFour + '. They currently have ' + correctQuestions + 'questions correct.');
} else {
  alert('Oops, you missed it ' + userName + '... I only have three children.  They are all grown-up and living out of the house.');
  console.log('user was asked about my children and respnded with ' + answerFour + '. They currently have ' + correctQuestions + ' questions correct.');
}

// Questions #5
var answerFive = prompt('Last one!  Question #5: Did I spend Christmas 2016 in China?').toLowerCase();

if (answerFive === 'y' || answerFive === 'yes') {
  alert('Wow!  Great answer, ' + userName + '! I took my wife and daughter to China for three weeks in 2016.  I can\'t wait to go back!');
  correctQuestions ++;
  console.log('the user was asked about My trip to China and answered ' + answerFive + '. They now have ' + correctQuestions + ' correct');
} else {
  alert('You missed that one, ' + userName + '. I did go to China for Chirstmas in 2016.  I even got to walk on the Great Wall!');
  console.log('the user was asked about My trip to China and answered ' + answerFive + '. They now have ' + correctQuestions + ' questions correct');
}

// Show the user the results of the quiz
alert('Thanks for taking the quiz, ' + userName + '!  You got ' + correctQuestions + ' out of 5 questions correct. Please enjoy the page now.');

// Lab-03 WORK:  Add question six to ask user to guess a number.  Give them exactly four tries to guess.
alert(userName + ', let\'s play a guessing game.  Click OK when you are ready.');

var guess = 1, actualMiles = 280;

while (guess <= 4) {
  var miles = parseFloat(prompt('GUESS #' + guess + '\n\n' + userName + ' can you tell me how the number of miles I drove my car last week?'));
  console.log ('miles is', miles);
  while (isNaN(miles)) {
    miles = parseFloat(prompt(userName + ', you need to enter a number. Please try GUESS #' + guess + ' again. \n\nCan you tell me the number of miles I drove my car last week?'));
  }
  console.log ('guess #', guess);
  if (miles === actualMiles) {
    alert('Congratulations ' + userName + '! \n\nYou got it right!');
    console.log ('user guessed ' + miles + 'break the cycle... guess is now ' + guess);
    break;
  }
  console.log('guess before missed = ' + guess);
  if (miles < actualMiles) {
    alert('I\'m sorry, ' + userName + ', your guess is too low.  Try again, please.');
    console.log('the user guessed ' + miles + ' and guess is at ' + guess);
  } else if (guess <= 4 && miles > actualMiles) {
    alert('I\'m sorry, ' + userName + ', your guess was to high.  Please try again.');
    console.log('the user guessed ' + miles);
  }
  if (guess === 4) {
    alert('I\'m sorry, ' + userName + ', unfortunately, that was your last guess.  The correct answer was ' + actualMiles +' miles');
  }
  guess ++;
}
// lab-03 Work: Add question 7 to have user guess multiple items that are contained in the array

// define my arrays
var fruitList = ['dates','cherries','oranges','bananas','mangos'], fruitTracker = [], matchedFruit = [], missedFruit = [];

alert(userName + ', I\'m really glad you like guessing games as much as I do! \n\nThis time you will get six attempts to guess what types of fruit I have in my kitchen.  Click OK when you are ready.');

// establish the loop to let the user answer 6 times.
for (var attempt = 1; attempt <= fruitList.length + 1; attempt ++) {
  var fruitGuess = prompt('ATTEMPT #' + attempt + '\n\nGuess a fruit please, ' + userName + '.').toLowerCase(); // get the guess
  // check for no input or repeat correct answer
  while (fruitGuess === '' || fruitTracker.includes(fruitList.indexOf(fruitGuess))) {
    console.log('user entered null or repeat');
    fruitGuess = prompt(userName + ', You can not leave the answer blank or re-enter a fruit you have gotten correct. Please try again. \n\nPlease guess a fruit found in my kitchen.').toLowerCase();
  }
  // Console logs info
  console.log ('attempt #', attempt);
  console.log('Guessed fruit=', fruitGuess);
  console.log('previous fruit',fruitTracker.includes(fruitList.indexOf(fruitGuess)));
  console.log('did the user match-',fruitList.includes(fruitGuess));
  //check the answer
  if (fruitList.includes(fruitGuess)) {
    fruitTracker.push(fruitList.indexOf(fruitGuess));
    alert('Good Job ' + userName + '!\n\n You have identified ' + fruitTracker.length + ' of the ' + fruitList.length + ' fruit in my ktichen.');
    console.log('number of matched fruit=', fruitTracker.length);
  } else {
    alert('I do not have any ' + fruitGuess + ' in my kitchen, ' + userName +'\n\nYou have named ' + fruitTracker.length + ' of ' + fruitList.length +' fruit correctly.');
    console.log('number of matched fruit=', fruitTracker.length);
  }
  if (fruitTracker.length === fruitList.length && attempt <= fruitList.length) {
    alert ('You\'re AMAZING, ' + userName + '!\n\nYou guessed all the fruit before running out of guesses!\nClick OK to see your specific results.');
    break;
  } else if (attempt > fruitList.length) {
    alert(userName + ', you used up your guesses.\nClick OK to see your specific results.');
    break;
  }
}
//create result arrays
for (var i = 0; i <= fruitList.length; i++) {
  if (fruitList[fruitTracker[i]] !== undefined && fruitList.includes(fruitList[fruitTracker[i]])){
    matchedFruit.push(fruitList[fruitTracker[i]]);
    console.log('i=',i,'matched: ',matchedFruit.toString());
  } else {
    missedFruit.push(fruitList[i]);
    console.log('i=',i,'missed: ',missedFruit.toString());
  }
}
console.log('matched: ',matchedFruit.toString());
console.log('missed: ',missedFruit.toString());

// present results to user.
alert(userName + ', you identified ' + fruitTracker.length + ' of the ' + fruitList.length +' fruit in my kitchen.  It took you ' + attempt + ' attempts.\n\nYou named the following fruit: ' + matchedFruit.toString() +'\n\nYou missed: ' + missedFruit.toString() +'\n\nTHANKS FOR PLAYING!');