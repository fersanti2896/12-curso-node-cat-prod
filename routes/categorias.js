const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares');
const { categoriasAll, categoriaById, categoriaCreate, categoriaUpdate, categoriaDelete } = require('../controller/categoriasController');

const router = Router();

router.get('/', categoriasAll);

/* Categoria por id */
router.get('/:id', categoriaById);

/* Crear categoria por token */
router.post('/', categoriaCreate);

/* Actualiza la categoria por token */
router.put('/:id', categoriaUpdate);

/* Elimina una categoria si es un admin */
router.delete('/:id', categoriaDelete);

module.exports = router;