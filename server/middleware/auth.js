const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  // if (Object.keys(req.cookie).length === 0) {
  //   models.Session.create()
  //     .then((resultOfCreate))
  // }
  next()
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

