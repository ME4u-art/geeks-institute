const { addFakeUser, addRealUser, users } = require('./faker-example');


addFakeUser();
addFakeUser();


addRealUser();

console.log('All users:', users);
