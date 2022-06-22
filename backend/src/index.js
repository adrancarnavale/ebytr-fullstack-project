const bcrypt = require('bcryptjs');

let pass = bcrypt.hashSync('1234');

console.log(pass);
