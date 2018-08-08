'use strict';

// Get the user's name
var userName = prompt('Hi there, what is your name?');

console.log('User was asked their name and they responded: ' + userName);

// Ask them five questions about myself - set the correct question counter to 0
var correctQuestions = 0

alert('Hello ' + userName + ', thank you for visiting my \"About Me\" page. Before you see the page, I\'m going to ask you some questions to see how much you know about me already. These are all yes/no questions, so feel free to answer with y/n or yes/no.');

// Question #1
var answerOne = prompt('Question #1, ' + userName + ': Do I have two dogs, a cat, and a pet fish named \"Gas Station?\"').toLowerCase();

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
    alert('Can\'t fool you, ' + userName +'!  You got it correct!  I have three children, but they do not live at home anymore.  They are all \"Adulting\" on their own now.');
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
alert('Thanks for taking the quiz, ' + userName + '!  You got ' + correctQuestions + ' out of 5 questions correct. Please enjoy the page now.')