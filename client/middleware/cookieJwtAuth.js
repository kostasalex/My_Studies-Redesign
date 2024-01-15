const jwt = require("jsonwebtoken");
const {app} = require("../server")
const cookieParser = require("cookie-parser");
app.use(cookieParser());
exports.cookieJwtAuth = (req, res, next) => {
  try {
   
    const user = jwt.verify(req.cookies.token, "secretpass");
    if (user.exp && Date.now() < user.exp * 1000) {
      req.user = user.username;
      next();
      return; // Return to avoid executing the catch block
    }
    // If no valid token was found
    req.user = null; // Or set it to a suitable value
    next();
  } catch (err) {
    console.error(err);
    // Handle errors or clear cookies if needed
    req.user = null; // Or set it to a suitable value
    next();
  }
};
