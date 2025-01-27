import nodemailer from 'nodemailer'
import env from 'dotenv'
env.config()

const transporter = nodemailer.createTransport({
  service:process.env.MAIL_SERVICE ,
  auth: {
    user:process.env.MAIL_ID , // Your Gmail address
    pass:process.env.MAIL_PASS,         // Your app password
  },
  tls: {
    rejectUnauthorized: false, // Accept self-signed certificates
  },
});

const mailOption = (email, link) => ({
  from: {
    name: "Harkirat",
    address: "company100xdevs@gmail.com", 
  },
  to: email, 
  subject: "Your cloud Link",
  text: `Your Cloud is below `,
  html: `<b> Your cloud Link is here vist it <br>  ${link} </b>
  `,
});

const sendMail = async (email, link) => {
  try {
    const info = await transporter.sendMail(mailOption(email, link));
    console.log("Email sent: %s", info.messageId);
  } catch (err) {
    console.error("Error sending email:", err);
  }
};

export default sendMail