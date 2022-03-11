const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "60046b9f51d46e", // generated ethereal user
    pass: "cfdea32fc6bd38", // generated ethereal password
  },
});
