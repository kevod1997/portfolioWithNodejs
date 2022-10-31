import { Router } from "express";

const router = Router();
// const nodemailer = require('nodemailer')
 
//  router.post('/send-email', (req,res)=> {
//     const transporter = nodemailer.createTransport({
//         host: 'smtp.ethereal.email',
//         port: 587,
//         auth: {
//             user: 'edgardo70@ethereal.email',
//             pass: 'aUzxajna9CfdfQQN8A'
//         }
//     });
//     const mailOptions = {
//         from: 'Remitente',
//         to: 'kevindefalco@hotmail.com',
//         subject: 'Enviado desde nodemail',
//         text: 'Hola mundo'
//     }

//     transporter.sendMail(mailOptions, (error, info)=>{
//         if(error){
//             res.status(500).send(error.message);
//         }else{
//             console.log('email enviado');
//             res.status(200).jsonp(req.body)
//         }
//     })
//  })


router.get("/", (req, res) => res.render("index", {title: 'Primer sitio con Node'}));

router.get("/about", (req, res) => res.render("about", {title: 'About me'}));

router.get("/contact", (req, res) => res.render("contact", {title: 'Contact Page'}));

export default router;
