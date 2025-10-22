const prompt = require('prompt-sync')();

function validateName(name) {

  const nameRegex = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
  return nameRegex.test(name);
}

const userInput = prompt('Enter your full name (e.g., John Doe): ');

if (validateName(userInput)) {
  console.log(' Valid name format!');
} else {
  console.log(' Invalid name format. Use "Firstname Lastname" with proper capitalization.');
}
