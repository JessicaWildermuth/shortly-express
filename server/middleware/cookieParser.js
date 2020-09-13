const parseCookies = (req, res, next) => {
  // check if req.header.cookie exists
  var cookieObj = {}
  if (req.headers.cookie) {
    var string = req.headers.cookie
    var array = string.split("; ")
    for (var i = 0; i < array.length; i++) {
      var newArray = array[i].split("=");
      var cookieKey = newArray[0];
      var cookieValue = newArray[1];
      cookieObj[cookieKey] = cookieValue;
    }
  }
  req.cookies = cookieObj;
  next();
};

module.exports = parseCookies;
