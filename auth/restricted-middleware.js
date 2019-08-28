const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/users-model.js');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, 'heybro', (err, decodedToken) => {
      if (err) {
        //BadToken
        res.staus(401).json({ message: 'Hey man it just isnt working' });
      } else {
        //decodedToken!
        req.decodedJwt = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({ message: 'welp!' });
  }
};
