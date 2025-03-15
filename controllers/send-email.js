const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "live.smtp.mailtrap.io",
  port: 587,
  auth: {
    user: "smtp@mailtrap.io",
    pass: "178bfcf7b7f4df8e4fcbf16146184f49",
  },
});

const mail_options = {
  to: "samuelzenebe7@gmail.com",
  subject: "Subject for fsdfsdf",
  html: "<h1>html sent</h1>",
  text: "that wes easy",
};

function sendEmail(req, res) {
  transporter.sendMail(mail_options, (error, info) => {
    if (error) {
      console.log(error);
      res.send({
        error,
      });
    } else {
      console.log("Email is sent ", info);
      res.send({
        info,
      });
    }
  });
}

module.exports = sendEmail;
