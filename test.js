const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync("B4c0/\/", salt);