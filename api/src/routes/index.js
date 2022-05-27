const {Router} = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const recipeController = require('../controllers/recipe/recipeController');
const typeController = require('../controllers/diet/typeController')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/recipes',recipeController.getElements);
router.get('/recipes/:id',recipeController.getElementById);
router.get('/types',typeController.getElements);
router.post('/recipe', recipeController.postElement)
router.post('/types', typeController.postElement)
module.exports = router;
