const nodemailer = require('nodemailer');
require('dotenv').config(); 


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});


async function enviarEmail(emailDestino, assunto, mensagem) {
  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: emailDestino,
    subject: assunto,
    text: mensagem,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email enviado: ' + info.response);
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    throw error; //ver no controller
  }
}

module.exports = enviarEmail;
