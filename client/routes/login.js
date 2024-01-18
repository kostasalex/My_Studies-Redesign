const jwt = require("jsonwebtoken");
const crypto = require('crypto');
const { client } = require("../server");
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { userSchema } = require("./user");
function generateRandomPassword(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const passwordArray = [];

  for (let i = 0; i < length; i++) {
    const randomIndex = crypto.randomInt(characters.length);
    passwordArray.push(characters.charAt(randomIndex));
  }

  return passwordArray.join('');
}

const User = mongoose.model('User', userSchema);
const attachRoutes = (app) => {

  app.post("/loginuser", async (req, res) => {
    const { username, password } = req.body;
    console.log(username + " " + password);
    try {
      // Connect to the MongoDB cluster
      await client.connect();

      // Get a reference to the users collection
      const usersCollection = client.db('test').collection('users');
      const user = await usersCollection.findOne({ username: username });
      // console.log("res: " + user.username + " " + user.password);
      if (user == null) {
        res.status(401).send();
      } else {
        if (user.username == username) {
          if (user.password == password) {
            if (user.approved === "no") {
              res.status(402).send();
            } else {
              delete user.password;

              const token = jwt.sign(user, "secretpass", { expiresIn: "1y" });
              res.cookie('token', token);
              // res.cookie("token", token);
              client.close();
              console.log("res: " + user.username + " logged in");
              res.status(200).send(); //regular login

            }

          } else {
            res.status(401).send();
          }
        } else {
          res.status(401).send();
        }
      }


    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }

  });

  app.get('/logout', async (req, res) => {
    res.clearCookie("token");
    return res.redirect("/login");
  });
  
};

module.exports = {
  attachRoutes: attachRoutes
};