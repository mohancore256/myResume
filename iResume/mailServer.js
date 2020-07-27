const express = require('express')
const bodyParser = require("body-parser");
const mailSend = require('./mailSend')
const app = express()

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', (req, res) =>  {
    let mailOptions = {
        from: 'kmk2java@gmail.com',
        to: 'kasettymohan456@gmail.com',
        subject: 'Texting email service',
        text: 'That was easy!'
      };
    mailSend.sendMail(mailOptions);
    res.send('Hello World!');
});
app.post('/sendMail',(req,res) => {
    //code to perform particular action.
    //To access POST variable use req.body()methods.
    console.log(req.body);
    mailSend.sendMail(req.body);
    res.send('Mail Sent Successfully');
});

app.listen(3000, () => console.log(`Example app listening at http://localhost:3000`))