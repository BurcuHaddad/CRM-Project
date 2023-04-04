const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    
  });

  const mailOptions = {
    from: " Burcu Dev <info@burcuh.dev>",
    to: options.email,
    subject: options.subject,
    text: options.message
}
  //3) Actually send the email
  await transporter.sendMail(mailOptions)
};

module.exports = sendEmail

