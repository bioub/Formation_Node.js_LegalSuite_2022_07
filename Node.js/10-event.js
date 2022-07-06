const { EventEmitter } = require('events');

class UserService extends EventEmitter {
  login() {}
  register(user) {
    // TODO write in database
    this.emit('register', user);
  }
}

// Projet A
const userServiceA = new UserService();
userServiceA.on('register', (user) => {
  console.log('send mail ' + user.username);
});

// Projet B
const userServiceB = new UserService();
userServiceB.on('register', (user) => {
  console.log('send sms ' + user.username);
});




// on/addListener écouter un event
// once écouter un event une seule fois
// off/removeListener


// Projet A
userServiceA.register({ username: 'romain' });
userServiceA.register({ username: 'toto' });


// Projet B
userServiceB.register({ username: 'romain' });
userServiceB.register({ username: 'toto' });
