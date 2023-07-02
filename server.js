const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/register',{
    useNewUrlParser : true
});

const db = mongoose.connection;
db.on('error',()=> {
    console.log("error in connection");
})

db.once('open',()=> {
    console.log("Connected");
})

// body parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());


// VIEW ENGINE
app.set('view engine', 'ejs')
app.use(express.static('public'))


const home = require('./routers/home');
app.use('/',home);


app.listen(5000,()=>{
    console.log(`Server is running`)
})