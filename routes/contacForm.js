const express = require('express')
const router = express.Router();

const nodemailer = require("nodemailer");

router.post('/', (req, res) => {
    
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message

    console.log(name, email, message);

    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: 'bhargavjaldu868860@gmail.com',
            pass: 'zvntwxdthsnyghzo'
        }
      });
      
      var mailOptions = {
        from: email,
        to: 'bhargavjaldu868860@gmail.com',
        subject: 'Sending Email using Node.js',
        text: message
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });


    res.json({ message: "success" })
})

module.exports = router;

// zvntwxdthsnyghzo