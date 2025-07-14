const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  }
});

function enviarEmail(destino, assunto, texto) {
  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: destino,
    subject: assunto,
    text: texto,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log('Erro ao enviar email:', err);
    } else {
      console.log('Email enviado:', info.response);
    }
  });
}

module.exports = enviarEmail;
