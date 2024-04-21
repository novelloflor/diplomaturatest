var express = require('express');
var router = express.Router();
var recetasModel = require('../../models/recetasModel');


//listar las recetas
router.get('/', async function(req, res, next) {

  var recetas = await recetasModel.getRecetas();

  res.render('admin/recetas', {
    layout: 'admin/layout',
    persona: req.session.nombre,
    recetas
  });
});


router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {              //agregar.hbs
    layout: 'admin/layout'
  })
});

//AGREGAR RECETA

router.post('/agregar', async (req, res, next) => {
  try{
    if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != ""){
      await recetasModel.insertReceta(req.body);
      res.redirect('/admin/recetas')
    } else{
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      })
    }
  } catch (error){
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se cargo la receta'
    })
  }
})


//ELIMINAR RECETA
router.get('/eliminar/:id', async (req, res, next) => {
  const id = req.params.id;
  await recetasModel.deleteRecetaById(id);
  res.redirect('/admin/recetas');
});


//MODIFICAR RECETA
router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;
  console.log(req.params.id);

  var receta = await recetasModel.getRecetaById(id);

  res.render('admin/modificar', {
    layout: 'admin/layout',
    receta
  })
});

router.post('/modificar', async (req, res, next) => {
  try{
    var obj = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo
    }
    console.log(obj)

    await recetasModel.modificarRecetaById(obj, req.body.id);
    res.redirect('/admin/recetas');

  } catch (error){
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modifico la receta'
    })
  }
})

module.exports = router;