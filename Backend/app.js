const express = require('express');
require('dotenv').config()
const { default: mongoose } = require('mongoose');
var cors = require('cors')
const app = express();
const port = 8000; 



// Middleware to parse JSON requests
app.use(express.json(),cors());

//connecting MongoDB
mongoose.connect('mongodb://localhost:27017/SocialMedia', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));


// Example route
app.get('/', (req, res) => {
  res.send('Hello, this is your Express app!');
});

//user route

const userRoute = require('./routes/userRoute')
app.use('/user', userRoute, cors())

const postRoute = require('./routes/postRoute')
app.use('/post', postRoute, cors())

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});