require('dotenv').config();
const express = require('express');
const cors = require('cors')
require("./Database/Config")

const User = require('./Models/UserSchema');

const app = express();

app.use(express.json())
app.use(cors())

app.post('/register', async (req, res)=>{
    const user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result)
})

app.post('/login', async (req, res) =>{

    if(req.body.email && req.body.password){
        let user = await User.findOne(req.body).select("-password");
        if(user){
            res.send(user);
        }else{
            res.send(result = "Data Not Found");
        }
    }else{
        res.send(result = "Data Not Found");
    }
})

app.get('/', (req, res)=>{
    res.send('Api is running')

})

app.listen(5000, ()=>{
    console.log("api is runnig")
})