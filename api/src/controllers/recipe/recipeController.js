const axios = require('axios');
const ModelController = require('../index');
const {Recipe} = require("../../db");
const {Op} = require("sequelize");
const {apiGetTitle, apiGetAll, apiGetById} = require('./apiStringRequest');
const toObject = require('./toObject');
require('dotenv').config();
const {API_KEY } = process.env;

class RecipeController extends ModelController{
    constructor(model) {
        super(model);
    }
    getElements = (req, res,next)=>{
        const {title} = req.query;
        if(title){
            const dbRecipes = this.model.findAll({where : {title : {[Op.like]:`%${title}%`}} });
            const apiRecipes = axios.get(apiGetTitle(title,API_KEY));
            Promise.all([dbRecipes,apiRecipes])
                .then((results)=>{
                    const [dbResults, apiResults] = results;
                    const response = dbResults.concat(toObject(apiResults.data.results));
                    res.send(response);
                })
                .catch(error=>next(error));

        }else {
            const dbRecipes = this.model.findAll();
            const apiRecipes = axios.get(apiGetAll(API_KEY));
            Promise.all([dbRecipes,apiRecipes])
                .then((results)=>{
                    const [dbResults, apiResults] = results;
                    const response = dbResults.concat(toObject(apiResults.data.results));
                    res.send(response);
                })
                .catch(error=>next(error));
        }

    };
    getElementById = async (req,res,next)=>{
        //Este ruta se usa cuando queremos visualizar el detalle de una receta. Le pasamos el ID de la receta seleccionada,
        //nos trae la info de una receta elegida y la renderiza.
        const {id} = req.params;
        if(isNaN(id)){
            const recipe =await this.model.findByPk(id);
            res.send(recipe);
        }else{
            const recipe = await axios.get(apiGetById(id,API_KEY));
            res.send(toObject(recipe));
        }
    };

}

const recipeController = new RecipeController(Recipe);

module.exports = recipeController;
