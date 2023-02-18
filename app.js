"use strict";
const nodemailer = require("nodemailer");
require("dotenv").config(); 

const sendEmail = async (mailObj) => {
  const { from, recipients, subject, message } = mailObj;

  try {
    // Create a transporter
    let transporter = nodemailer.createTransport({
      host: "smtp-relay.sendinblue.com",
      port: 587,
      auth: {
        user: "ar789maurya@gmail.com",
        pass: process.env. SIB_API_KEY,
      },
    });

    // send mail with defined transport object
    let mailStatus = await transporter.sendMail({
      from: from, // sender address
      to: recipients, // list of recipients
      subject: subject, // Subject line
      text: message, // plain text
    });

    console.log(`Message sent: ${mailStatus.messageId}`);
    return `Message sent: ${mailStatus.messageId}`;
  } catch (error) {
    console.error(error);
    throw new Error(
      `Something went wrong in the sendmail method. Error: ${error.message}`
    );
  }
};

const mailObj = {
  from: "ar789maurya@gmail.com",
  recipients: ["an8182maurya@gmail.com"],
  subject: "Sending email by  Devil",
  message: "This mail sended by Devil ",
};

sendEmail(mailObj).then((res) => {
  console.log(res);
});