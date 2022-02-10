const { Router } = require('express');
const router = Router(); 
const {getArticulos, getArticulop, createArticulo, getArticulo, deleteArticulo, updateArticulo} = require('../controllers/articulos.controllers');
const{autorizar, validar} = require('../middlewares')

router.route('/')
    .get(getArticulos)
    .post([autorizar.verifyToken, autorizar.isAdmin], createArticulo);

router.route('/:id')
    .get(getArticulo)
    .delete([autorizar.verifyToken, autorizar.isAdmin], deleteArticulo)
    .put([autorizar.veryfyToken, autorizar.isAdmin], updateArticulo)
    


module.exports = router;