const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service : "gmail",
  auth: {
    user: process.env.email,
    pass: process.env.password,
  },
});

const mailOptions = {
from: process.env.email,
  to: "ftybndnan@gmail.com",
  subject: "Hello ✔",
  text: "Hello world?",
  html: "<b>Hello world?</b>",
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    return console.error("Error:", err);
  }
  console.log("Message sent:", info);
});
