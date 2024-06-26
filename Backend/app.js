const express = require('express');
require('dotenv').config()
const mongoose = require('mongoose');
var cors = require('cors')
const app = express();
const port = 8000; 

// Middleware to parse JSON requests
app.use(express.json(),cors());

//connecting MongoDB

// mongoose.connect('mongodb://localhost:27017/SocialMedia', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected...'))
//   .catch(err => console.log(err));
  
  mongoose.connect("mongodb://0.0.0.0:27017/SocialMedia")
  .then(()=>{
      console.log("mongodb connected");
  })
  .catch(()=>{
      console.log('failed');
  })
// Example route
app.get('/', (req, res) => {
  res.send('Hello, this is your Express app!');
});

//user route

const userRoute = require('./routes/userRoute')
app.use('/user', userRoute, cors())

const postRoute = require('./routes/postRoute')
app.use('/post', postRoute, cors())

const commentRoute = require('./routes/commentRoute')
app.use('/comment', commentRoute, cors() )

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});