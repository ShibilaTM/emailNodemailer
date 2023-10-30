const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter =nodemailer.createTransport({
    service:"gmail",
    host:"smtp.gmail.com",
    port:587,
    secure:false,
    auth:{
       user:process.env.USER,
       pass:process.env.APP_PASSWORD
    },
});
const mailOptions={
    from:{
        name:'ichu',
        address:"ichu123sachu@gmail.com"
    },
    to:["shibilaang@gmail.com"],
    subject:"Nodemailer",
    text:"Hai !!!! Sending mail from Nodejs",
    
}

const sendMail= async(transporter,mailOptions)=>{
    try {
        await transporter.sendMail(mailOptions)
        console.log('Email has been send')
    } catch (error) {
        console.error(error)
    }
}
sendMail(transporter,mailOptions)