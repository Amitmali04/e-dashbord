const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send('Api is runnind')
})

app.listen(5000, ()=>{
    console.log("api is runnig")
})