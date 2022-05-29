const axios = require('axios');
const ModelController = require('../modelController');
const {Recipe} = require("../../db");
const {Op} = require("sequelize");
const {apiGetTitle, apiGetAll, apiGetById} = require('./apiStringRequest');
const toObject = require('./toObject');
require('dotenv').config();
const {API_KEY} = process.env;
const {Diet} = require('../../db');

class RecipeController extends ModelController {
    constructor(model) {
        super(model);
    }

    getElements = (req, res, next) => {
        let {title} = req.query;
        try {
            if (title) {
                const dbRecipes = this.model.findAll({where: {title: {[Op.like]: `%${title.toLowerCase()}%`}}, include: [{model: Diet, attributes : ['name'], through: {attributes : []} }]});
                const apiRecipes = axios.get(apiGetTitle(title, API_KEY));
                Promise.all([dbRecipes, apiRecipes])
                    .then((results) => {//results[resultados1,resultados2]
                        const [dbResults, apiResults] = results;
                        const response = dbResults.concat(toObject(apiResults.data.results));
                        res.send(response);
                    })
                    .catch(error => error.name);

            } else {
                const dbRecipes = this.model.findAll({include: [{model: Diet, attributes : ['name'], through: {attributes : []} }]});
                const apiRecipes = axios.get(apiGetAll(API_KEY));
                Promise.all([dbRecipes, apiRecipes])
                    .then((results) => {
                        const [dbResults, apiResults] = results;
                        const response = dbResults.concat(toObject(apiResults.data.results));
                        res.send(response);
                    })
                    .catch(error => error.name);
            }

        }catch (e) {
            res.send(e.name);
        }
    };
    getElementById = async (req, res, next) => {
        //Este ruta se usa cuando queremos visualizar el detalle de una receta. Le pasamos el ID de la receta seleccionada,
        //nos trae la info de una receta elegida y la renderiza.
        const {id} = req.params;
        try{
            if (isNaN(id)) {
                const recipe = await this.model.findOne({
                    where : {
                        id
                    },
                    include: [{model: Diet, attributes : ['name'], through: {attributes : []} }]
                });
                res.send(recipe);
            } else {
                const recipe = await axios.get(apiGetById(id, API_KEY));
                res.send(toObject(recipe));
            }
        }catch (e) {
            res.send(e.name);
        }
    };

}

const recipeController = new RecipeController(Recipe);

module.exports = recipeController;
