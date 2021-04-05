const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const cors = require("cors");
const bcrypt = require('bcrypt');

const User = mongoose.model('User', { 
    firstName: String,
    lastName: String,
    userName: String,
    password: String
});

dotenv.config();

const app = express()
app.use(express.json());
app.use(cors({origin: true, credentials: true}));
const port = 5000

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true} , (err) => {
    if (err) return console.error(err);
    console.log("Connected to MongoDB")
});

app.post('/register', async (req, res) => {

    try{
        const {firstName, lastName, userName, password} = req.body;

        //validation
        if(!firstName || !lastName || !userName || !password) {
            return res.status(400).json({msg: "Please enter all required fields"})
        };

        if(password.length < 6) {
            return res.status(400).json({msg: "Please enter a password with at least 6 characters"})
        };

        //ensure no existing account
        const existingUser = await User.findOne({userName: userName})
        if(existingUser){
            return res.status(400).json({msg: "An account with this email already exists."})
        };

        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({ 
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            password: hashedPassword
        });

    const user = newUser.save();

    res.send(user)

    } catch {
        res.status(500).send();
    }
})

app.post('/login', async (req, res) => {

    try{
        const {userName, password} = req.body;

        //validation
        if(!userName|| !password ) {
            return res.status(400).json({msg: "Please enter all required fields"})
        };

        //ensure existing account
        const existingUser = await User.findOne({userName: userName})
        if(!existingUser){
            return res.status(401).json({msg: "Wrong email or password"})
        };

        const correctPassword = await bcrypt.compare(password, existingUser.password);

        if(!correctPassword)
            return res.status(401).json({msg: "Wrong email or password"})

        res.status(200).send()

    } catch(err){
        res.status(500).send();
    }
   
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})