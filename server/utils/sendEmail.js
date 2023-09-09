const nodeMailer = require("nodemailer");
const SMPT_SERVICE = "gmail";
const SMPT_MAIL = "aveztesting@gmail.com";
const SMPT_PASSWORD = "pvkwliuhsxunzpei";
const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    service: SMPT_SERVICE,
    auth: {
      user: SMPT_MAIL,
      pass: SMPT_PASSWORD,
    },
  });

  const mailOptions = {
    from: SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
