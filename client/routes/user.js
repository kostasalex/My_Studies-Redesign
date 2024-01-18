
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { cookieJwtAuth, cookieJwtAuthCheck } = require("../middleware/cookieJwtAuth");
const userSchema = new Schema({
  // Basic Information
  registrationNumber: { type: String },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String },
  password: { type: String },
  role: { type: Boolean }
});

const User = mongoose.model('User', userSchema);
//module.exports = mongoose.model('User', userSchema);
const { uploadf, path } = require("./file");
const { client } = require("../server");



const { transporter } = require("../email/email");
const crypto = require('crypto');

function generateRandomPassword(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const passwordArray = [];

  for (let i = 0; i < length; i++) {
    const randomIndex = crypto.randomInt(characters.length);
    passwordArray.push(characters.charAt(randomIndex));
  }

  return passwordArray.join('');
}






const attachRoutes = (app) => {
  // Define route to handle user creation
  app.post('/adduser', uploadf.single('image'), async (req, res) => {
    try {
      // Connect to the MongoDB cluster
      await client.connect();
  
      // Get a reference to the users collection
      const usersCollection = client.db('mystudies').collection('users');
  
  
        const user = new User({
          registrationNumber: req.body.registrationNumber,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          username: req.body.username,
          password: req.body.password,
          role: req.body.role
          // image: req.body.image[0]
        });
  
        // Insert the new user document into the users collection
        const result = await usersCollection.insertOne(user);
        console.log(`New user created with the following id: ${result.insertedId}`);
  
        if(user.role == true){
         
          res.status(200).send('User created successfully'); //student
        } else
        {
        
          res.status(201).send('User created successfully'); //teacher
        }
     
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    } finally {
      // Close the connection to the MongoDB cluster
      await client.close();
    }
  });
  


  // Change Phofile Image for user
  app.post('/changeprofileimage', cookieJwtAuth, uploadf.single('image'), async (req, res) => {
    try {
      // Connect to MongoDB
      await client.connect();
      // Get a reference to the users collection
      const usersCollection = client.db('test').collection('users');

      // Update the user document in the database
      const result = await usersCollection.updateOne(
        { username: req.user },
        {
          $set: {
            image: req.body.image,
          }
        }
      );

      if (result.modifiedCount === 1) {
        res.status(200).send('Profile Image updated successfully');
      } else {
        res.status(404).send('User not found');
      }

      client.close();
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred');
    }
  });

  // Define route to handle retrieving user data
  app.get('/getuser', cookieJwtAuth, async (req, res) => {
    try {
      // Connect to the MongoDB cluster
      await client.connect();
      // Get a reference to the users collection
      const usersCollection = client.db('test').collection('users');

      // Find the user by username
      const user = await usersCollection.findOne({ username: req.user });

      if (user) {
        // Send the user data as a response
        delete user.password;
        res.status(200).json(user);
      } else {
        res.status(404).send('User not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    } finally {
      // Close the connection to the MongoDB cluster
      await client.close();
    }
  });

  app.get('/getuserpublic/:userid', async (req, res) => {
    try {
      // Connect to the MongoDB cluster
      await client.connect();
      // Get a reference to the users collection
      const usersCollection = client.db('test').collection('users');
      const rentCollection = client.db('test').collection('rent');

      // Find the user by username
      const user = await usersCollection.findOne({ username: req.params.userid });
      // Find the rents that specific user has
      const rents = await rentCollection.find({ owner_id: req.params.userid }).toArray();

      if (user) {
        // Send the user data as a response
        delete user.password;
        delete user.approved;
        user.rentcount = rents.length;
        res.status(200).json(user);
      } else {
        res.status(404).send('User not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    } finally {
      // Close the connection to the MongoDB cluster
      await client.close();
    }
  });


  app.get('/getuserpubliccookie',cookieJwtAuth, async (req, res) => {
    try {
      // Connect to the MongoDB cluster
      await client.connect();
      console.log(req.user);
      // Get a reference to the users collection
      const usersCollection = client.db('test').collection('users');
      const rentCollection = client.db('test').collection('rent');

      // Find the user by username
      const user = await usersCollection.findOne({ username: req.user });
      let rents ="";
      let t_rent_count = 0;
        // Send the user data as a response
        if(user){
        
       rents = await rentCollection.find({ owner_id: req.user }).toArray(); 
       t_rent_count = rents.length;
        } 
       
        res.status(200).json({username: req.user, rentcount: t_rent_count});
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    } finally {
      // Close the connection to the MongoDB cluster
      await client.close();
    }
  });


  app.post('/updateuser', cookieJwtAuth, async (req, res) => {
    try {
      const { firstName, lastName, email, phone } = req.body;

      // Connect to MongoDB
      await client.connect();
      // Get a reference to the users collection
      const usersCollection = client.db('test').collection('users');

      // Update the user document in the database
      const result = await usersCollection.updateOne(
        { username: req.user },
        {
          $set: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone
          }
        }
      );

      if (result.modifiedCount === 1) {
        res.status(200).send('User updated successfully');
      } else {
        res.status(404).send('User not found');
      }

      client.close();
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred');
    }
  });

  //change user pass
  app.post('/changepassword', cookieJwtAuth, async (req, res) => {

    const { oldpassword, newpassword, newnewpassword } = req.body;
    try {
      // Connect to the MongoDB cluster
      await client.connect();

      // Get a reference to the users collection
      const usersCollection = client.db('test').collection('users');

      // Find the user by username
      const user2 = await usersCollection.findOne({ username: req.user });
      // console.log(req.body.oldpassword);
      if (user2.password == oldpassword) {
        if (newpassword == newnewpassword) {
          // change password


          const result = await usersCollection.updateOne(
            { username: req.user },
            {
              $set: {
                password: newpassword,
              }
            }
          );

          if (result.modifiedCount === 1) {
            res.status(200).send('User updated successfully');
          } else {
            res.status(404).send('User not found');
          }
        } else {
          res.status(404).send('New password do not match !');
        }
      } else {
        res.status(404).send('Old Password is wrong');
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    } finally {
      // Close the connection to the MongoDB cluster
      await client.close();
    }
  });


  // contact us
  app.get('/contactuser', async (req, res) => {
    try {
      const { first_name, last_name, email_from, email_to, phone, message, subject } = req.query;
      // Connect to MongoDB
      await client.connect();
      // console.log(first_name, last_name, email_from, email_to, phone, message, subject);
      const mailOptions = {
        from: 'Rento Company <rento@panosgio.org>',
        to: email_to,
        subject: 'You have new message from user : ' + first_name + " " + last_name,
        text: "First name : " + first_name + "\n" +
          "Last name : " + last_name + "\n" +
          "E-mail : " + email_from + "\n" +
          "Phone : " + phone + "\n" +
          "Subject : " + subject + "\n" +
          "Message : " + message,
      };
      // Send the email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error occurred while sending email:', error.message);
        } else {
          console.log('Message ID:', info.messageId);
        }
      });
      res.status(200).send('E-mail Sent!');

      client.close();
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred');
    }
  });



}

module.exports = {
  attachRoutes: attachRoutes
};

