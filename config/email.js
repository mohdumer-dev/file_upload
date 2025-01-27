import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "venturevilla.in@gmail.com", // Your Gmail address
    pass: "qmpltgsxoflstjea",         // Your app password
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
  text: `Your =Cloud is below `,
  html: `<b> Your cloud Link is here vist it  <a href="${link}">${link}</a> </b>
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