const nodemailer = require('nodemailer');

//email trans
const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: process.env.EMAIL_USERNAME, 
        pass: process.env.EMAIL_PASSWORD,
    },
});

//seend an email
exports.sendEmail = async (to, subject, text, html) => {
    const mailOptions = {
        from: process.env.EMAIL_USERNAME, //sender
        to: to, //accepter
        subject: subject, // 
        text: text,
        html: html, // HTML body
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return info;
    } catch (error) {
        console.error('Error sending email: ', error);
        throw error; 
    }
};
