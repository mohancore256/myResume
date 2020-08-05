const express = require('express');
const path = require("path")
var cors = require('cors');
const bodyParser = require("body-parser");
const mailSend = require('./mailSend');
const app = express(); 
app.use(express.static('www'))
app.use(cors());
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/test', (req, res) =>  {
    let mailOptions = {
        from: 'kmk2java@gmail.com',
        to: 'kasettymohan456@gmail.com',
        subject: 'Texting email service',
        text: 'That was easy!'
      };
    mailSend.sendMail(mailOptions);
    res.send('Hello World!');
});
app.options('/sendMail', cors());
app.post('/sendMail',cors(), (req,res) => {
    //code to perform particular action.
    //To access POST variable use req.body()methods.
    console.log(req.body);
    mailSend.sendMail(req.body);
    res.json({status: 'Success'});
});

app.listen(80, () => console.log(`Example app listening at http://localhost`))