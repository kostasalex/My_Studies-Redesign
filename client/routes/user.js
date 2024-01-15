
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { cookieJwtAuth, cookieJwtAuthCheck } = require("../middleware/cookieJwtAuth");
const userSchema = new Schema({
  // Basic Information
  registrationNumber: { type: String },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  fatherName: { type: String, required: true },
  motherName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },

  // Identification Details
  passNumber: { type: String },
  identityNumber: { type: String, required: true, unique: true },
  identityIssuingAuthority: { type: String, required: true },
  identityIssueDate: { type: Date, required: true },
  AMKA: { type: String, required: true, unique: true },

  // Residence Details
  residenceAddress: { type: String, required: true },
  residenceNumber: { type: String, required: true },
  area: { type: String, required: true },
  postalCode: { type: String, required: true },

  // Contact Information
  email: { type: String, required: true },
  mobilePhone: { type: String, required: true },
  landlinePhone: { type: String },

  // Academic Information
  semesterOfFirstRegistration: { type: String },
  academicYearOfRegistration: { type: String },
  registrationDate: { type: Date },
  currentSemester: { type: String },
  username: { type: String },
  password: { type: String }
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
  
      const user_check = await usersCollection.findOne({ identityNumber: req.body.identityNumber });
      if (user_check == null) {
        const user = new User({
          registrationNumber: req.body.registrationNumber,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          fatherName: req.body.fatherName,
          motherName: req.body.motherName,
          dateOfBirth: new Date(req.body.dateOfBirth),
          passNumber: req.body.passNumber,
          identityNumber: req.body.identityNumber,
          identityIssuingAuthority: req.body.identityIssuingAuthority,
          identityIssueDate: new Date(req.body.identityIssueDate),
          AMKA: req.body.AMKA,
          residenceAddress: req.body.residenceAddress,
          residenceNumber: req.body.residenceNumber,
          area: req.body.area,
          postalCode: req.body.postalCode,
          email: req.body.email,
          mobilePhone: req.body.mobilePhone,
          landlinePhone: req.body.landlinePhone,
          semesterOfFirstRegistration: req.body.semesterOfFirstRegistration,
          academicYearOfRegistration: req.body.academicYearOfRegistration,
          registrationDate: new Date(req.body.registrationDate),
          currentSemester: req.body.currentSemester,
          // Other fields from the original user schema
          username: req.body.username,
          password: req.body.password,
          // image: req.body.image[0]
        });
  
        // Insert the new user document into the users collection
        const result = await usersCollection.insertOne(user);
        console.log(`New user created with the following id: ${result.insertedId}`);
  
        res.status(200).send('User created successfully');
      } else {
        res.status(200).send('User with this username already exists');
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

