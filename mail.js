var nodemailer = require("nodemailer");

var transport = nodemailer.createTransport("SMTP", {
    host: "smtp.gmail.com", // hostname
    secureConnection: true, // use SSL
    port: 465, // port for secure SMTP
    auth: {
        user: "procpubg@gmail.com",
        pass: "qwer@1234"
    }
});

console.log("SMTP Configured");

var mailOptions = {
    from: 'procpubg@gmail.com', // sender address
    to: 'procpubg@gmail.com', // list of receivers
    subject: 'Report for Test Result', // Subject line
    text: 'Contains the test result for the smoke test in html file', // plaintext body
    attachments: [
        {
            'filename': 'htmlReport.html',
            'filePath': '../allure-results/htmlReport.html',
        }

    ]
};
transport.sendMail(mailOptions, function (error, response) {
    if (error){
        console.log(error);
    } else {
        console.log("Message sent: " + response.message);
    }

});
