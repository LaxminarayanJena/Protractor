var nodemailer = require("nodemailer");

//npm install nodemailer@0.7.0
var transport = nodemailer.createTransport("SMTP",{
    host:"smtp.gmail.com", //hostname
    secureConnection:true, //use SSL
    port:465, //port for secure SMTP
    auth: {
        user: "heardm16@gmail.com",
        pass: "123heard"
    }
});

console.log("SMTP Configured");

var mailOptions = {
    from: 'heardm16@gmail.com', // sender address
    to: 'seleniumtesterbangalore@gmail.com', // list of receivers
    subject: 'Report for Test Result', // Subject line
	//text: info.body,
    text: 'Contains the test result for the smoke test in html file', // plaintext body
    attachments: [
        {

            'filename': 'samsung.png',
            'filePath': './samsung.png'


        }]
};
transport.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});