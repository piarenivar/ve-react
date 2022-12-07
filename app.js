const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(express.json());
app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
const port = process.env.PORT || 3000;

const sendEmail = (options) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587, secure: !1,
        auth: { user: process.env.NODEMAILER_USER, pass: process.env.NODEMAILER_PASS }
    })
    transporter.sendMail(options, (err, info) => {
        if (err) {
            console.log(err);
            return;
        }
    })
};

const EmailSender = ({ fname, lname, tel, email, state, subject, message }) => {
    const options = {
        from: '"Valencia Estructuristas" <ve.site.dev@gmail.com>',
        to: "proyectos@valenciaestructuristas.com, ve.site.dev@gmail.com",
        subject: "Nueva Solicitud",
        html: `
        <div style="display:flex;justify-content:space-between;height:32rem;width:40rem;background:linear-gradient(to right, rgb(0,0,0,.16)10rem,rgb(0,0,0,.08)10rem);margin:1rem auto 0;">
  <img src="https://i.imgur.com/fpPchZu.png" alt="" style="height:2rem;width:8rem;margin:1rem 0 0 1rem;">
  <div style="padding:1rem 2rem;height:32rem;width:30rem;">
    <h3>Nueva Solicitud<h3>
                <h4>Detalles</h4>
                <p style="margin-left:2rem">Nombre: <strong>${fname} ${lname}</strong></p>
                <p style="margin-left:2rem">Número de teléfono: <strong>${tel}</strong></p>
                <p style="margin-left:2rem">Email: <strong>${email}</strong></p>
                <p style="margin-left:2rem">Estado: <strong>${state}</strong></p>
                <p style="margin-left:2rem">Asunto: <strong>${subject}</strong></p>
                <h4>Mensaje:</h4>
                <p style="margin-left:2rem">${message}</p>
  </div>
</div>`
    };

    sendEmail(options)
};

app.listen(port, () => {
    console.log(`Server has started running on port ${port}.`);
});

app.get('/', (req, res) => {
    console.log('Server has received http request.');
});

app.post('/exito', async (req, res) => {
    try {
        const { fname, lname, tel, email, state, subject, message } = req.body
        EmailSender({ fname, lname, tel, email, state, subject, message });
        res.json({ msg: 'Your message has been sent successfully' });
    } catch (error) {
        res.status(404).json({ msg: "Error" });
    }
})