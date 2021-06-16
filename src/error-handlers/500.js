'use strict';

module.exports = (err, req, res, next) => {
  res.status(500).send('500 internal server error');
  next();
}