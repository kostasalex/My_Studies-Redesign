//// Database
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb://127.0.0.1:27017/?retryWrites=true&w=majority";
//const uri = "mongodb://localhost:27017/rento";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
console.log('start');
const fs = require('fs');
 const https = require('https');
const options = {
  key: fs.readFileSync('private.key'),
  cert: fs.readFileSync('certificate.crt')
};
const express = require('express');
const app = express();
const cors = require('cors');
let alert = require('alert');
module.exports = {
  client: client,
  app: app
};







// Enable all CORS requests
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const setupUserRoute = require("./routes/user");
setupUserRoute.attachRoutes(app);

const setupLoginRoute = require("./routes/login");
setupLoginRoute.attachRoutes(app);

const {uploadf,path, attachRoutes} = require("./routes/file");
attachRoutes(app);



app.use(express.static('public', {
  setHeaders: (res, path, stat) => {
    if (path.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
   
  }
}));





////// token

const cookieParser = require("cookie-parser");
app.use(
    express.urlencoded({
      extended: true,
    })
);
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'dist')));
// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
const server = https.createServer(options,app);

server.listen(4010, () => {
  console.log('Server is running on port 4010 with SSL');
});