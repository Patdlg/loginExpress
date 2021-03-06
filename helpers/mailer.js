const nodemailer = require('nodemailer');
const hbs = require('hbs');
const fs = require('fs');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.gmail,
    pass: process.env.gmailPass
  }
});

exports.sendWelcomeMail = (user) => {
  const data = {
    from: 'Kiubo? 👻 <patrickdlg14@gmail.com>',
    to: user.email,
    subject: 'Probando esta',
    text: `Hola ${user.username} Bienvenido a nuestra ironApp`,
    //html: '<b>Awesome Message</b>'
  }
  transporter.sendMail(data)
    .then(info => console.log(info))
    .catch(error => console.log(error))
}

const welcomeCompile = hbs.compile(fs.readFileSync((__dirname, './views/welcome.hbs'), 'utf8'));

exports.sendTemplate = (user) =>  {
  const data = {
    from: 'Kiubo? 👻 <patrickdlg14@gmail.com@gmail.com>',
    to: user.email,
    subject: 'Probando esta',
    //text: `Hola ${user.username} Bienvenido a nuestra ironApp`,
    html: welcomeCompile(user)
  }
  transporter.sendMail(data)
    .then(info => console.log(info))
    .catch(error => console.log(error))
};