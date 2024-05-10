var express = require('express');
var router = express.Router();
var recetasModel = require('./../models/recetasModel');
var cloudinary = require('cloudinary').v2;

var nodemailer = require('nodemailer');

router.get('/recetas', async function(req, res, next) {

    let recetas = await recetasModel.getRecetas();
  
    recetas = recetas.map(receta => {
      if (receta.img_id) {
        const imagen = cloudinary.url(receta.img_id, {
          width: 960,
          height: 200,
          crop: 'fill'
        });
        return {
          ...receta,
          imagen
        }
      } else {
        return {
          ...receta,
          imagen: ''
        }
      }
    });
  
    res.json(recetas);
});

router.post('/contacto', async (req, res) => {
    const mail = {
      to: 'novelloflor@gmail.com',
      subject: 'Contacto web',
      html: `${req.body.nombre} se contacto a traves de la web y quiere mas información a este correo : ${req.body.email} <br>
      Además, hizo el siguiente comentario : ${req.body.mensaje} <br> Su tel es : ${req.body.telefono}`
    }

    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    await transport.sendMail(mail)

    res.status(201).json({
      error: false,
      message: 'Mensaje enviado'
    });

});


module.exports = router;