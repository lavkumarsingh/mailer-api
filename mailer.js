const nodemailer = require("nodemailer")
require('dotenv').config()

exports.sendMail = async function(mailId, mailSubject, mailBody) {
    
    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    let mailDetails = {
        from: process.env.EMAIL,
        to: mailId,
        subject: mailSubject,
        text: mailBody
    };

    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log(err)
        } else {
            console.log('Email sent successfully')
        }
    });
}