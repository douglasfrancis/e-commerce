const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express()
app.use(express.json());
app.use(cors());
const port = 5000

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true} , (err) => {
    if (err) return console.error(err);
    console.log("Connected to MongoDB")
});

const User = mongoose.model('User', { 
    firstName: String,
    lastName: String,
    userName: String,
    password: String
});


app.post('/register', (req, res) => {

    const newUser = new User({ 
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        password: req.body.password
     });
    newUser.save().then(() => res.send(newUser));    
  
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})