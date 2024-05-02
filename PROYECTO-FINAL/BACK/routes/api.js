var express = require('express');
var router = express.Router();
var recetasModel = require('./../models/recetasModel');
var cloudinary = require('cloudinary').v2;

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
          ...recetas,
          imagen
        }
      } else {
        return {
          ...recetas,
          imagen: ''
        }
      }
    });
  
    res.json(recetas);
});

module.exports = router;