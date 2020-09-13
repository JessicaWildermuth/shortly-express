const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
//if the req.cookie hash matches a session hash
 //it has a shortly cookies
  if (req.cookies.shortlyid !== undefined) {
    //see if the session has a hash that matches the cookie hash
    models.Sessions.get({hash: req.cookies.shortly})
      .then((data) => {
        if (!data.userId) {
          models.Users.get({username: req.body.user})
          .then((userdata) => {
            req.session = {user: {username: userdata.username}, userId: userdata.id};
            next();
          });
        }
      })
      .catch((err) => {
        next();
      })
  } else {
    models.Sessions.create()
      .then((data) => {
        //we want to keep track of the data.insert id information that was stored in the sessions table
        var sessionId = data.insertId;

        //we need to know the hash to set the cookie info on req object
        //the way to hash info is to do a get request from the sessions table using the data.insertID
        models.Sessions.get({id: sessionId})
          .then(sessionData => {
            //sessionsData is an object that has property names based ont he fields of the sessions table so sessionsData.hash should be our hash
            //Once we have the hash, use unique hash to set cookie to response header
            req.session = sessionData;
            res.cookie('shortlyid', sessionData.hash);
            next();
          })
          .catch((err) => {
            next();
          });
        next();
      })
      .catch((error) => {
        next();
      });
  }
};
    // if (req.cookie.shortly) (hash)

    // Getting session from hash (correct session or err)
    // once we see that a user's cookie matches session ^^
    // Then we see if sessions hash data has user data associated with it
    // if it doesnt, we set userID to this request's user
    // if it matches, req.session = {userdata with hash}


    //there are cookies
    //we have a res.cookie that should have a property of shortly with a value of a hash


/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

