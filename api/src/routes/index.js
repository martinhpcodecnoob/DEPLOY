const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getNewsCategoryRouter = require('./getCategorias')
const getSearchRouter = require('./getSearch')
const getIdCategoryRoutes = require('./getIdCategory')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/categorynew',getNewsCategoryRouter)
router.use('/categorynew',getSearchRouter)
router.use('/categorynew',getIdCategoryRoutes)

module.exports = router;
