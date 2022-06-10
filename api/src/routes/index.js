const {Router} = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const recipeController = require('../controllers/recipe/recipeController');
const dietsController = require('../controllers/diet/dietsController')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/recipes',recipeController.getElements);
router.get('/recipes/:id',recipeController.getElementById);
router.get('/diets',dietsController.getElements);
router.post('/recipes', recipeController.postElement);

module.exports = router;
