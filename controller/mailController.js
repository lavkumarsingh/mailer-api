
const mailer = require('../mailer')

exports.index = async function(req, res) {
    res.status(200).send(
    {
        "mailId": "your_mail_id",
        "mailSubject": "your_mail_subject",
        "mailBody": "your_mail_Body",
    }
    )
}

exports.sendMail = async function(req, res) {
    if(!req.body) {
        res.json({ status: 404 })
    }

    mailer.sendMail(req.body.mailId, req.body.mailSubject, req.body.mailBody)
    res.status(200).send('Email Sent Successfully!!!')
}
