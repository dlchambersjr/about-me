'use strict';

// Get the user's name
var userName = prompt('Hi there, what is your name?');

alert('Thank you for visiting my \"About Me\" page. I\'m going to ask you some questions about me.  THese are all yes/no questions, so feel free to answer with y/n or yes/no.');

// Ask them five questions

var answerOne = prompt('Do I have any pets?').toLowerCase();

if (answerOne === 'y' || answerOne === 'yes') {
    alert('You got it right');
    } else {
        alert('You got it wrong');
    };