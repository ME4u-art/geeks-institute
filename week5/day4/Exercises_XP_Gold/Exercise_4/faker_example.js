const { faker } = require('@faker-js/faker');
const prompt = require('prompt-sync')();

const users = [];

function addFakeUser() {
  const user = {
    name: faker.person.fullName(),
    address: faker.location.streetAddress(),
    country: faker.location.country()
  };
  users.push(user);
  console.log('Fake user added:', user);
}

function addRealUser() {
  const name = prompt('Enter your name: ');
  const address = prompt('Enter your street address: ');
  const country = prompt('Enter your country: ');

  const user = { name, address, country };
  users.push(user);
  console.log('Real user added:', user);
}

module.exports = { addFakeUser, addRealUser, users };
