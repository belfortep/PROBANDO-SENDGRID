const express = require('express');
const app = express();
const dotenv = require('dotenv');
const sgMail = require('@sendgrid/mail');
dotenv.config();


const sendMail = (to, subject, text, html) =>{

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const msg = {
        to,
        from: process.env.SENDGRID_EMAIL, 
        subject,
        text,
        html
    }

    sgMail
        .send(msg)
        .then(() => {
            console.log('Enviado')
        })
        .catch((err) => {
            console.error(err)
        })

}


