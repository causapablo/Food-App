const {Recipe} = require("../db");
const {v4: uuidv4} = require("uuid");
 const {Op} = require("sequelize");


class ModelController {
    constructor(model) {
        this.model = model;
    }
    getElements = (req, res)=>{
        //Vamos a traer la info de la API.
        const {title} = req.query;
        //if(name) me devuelve un listado con las recetas que contengan ese nombre.
        //Podriamos crear un archivo que exporte una funcion que haga la busqueda, tanto de la api como de la base de datos
        //y devuelva el listado de las recetas.title : {[Op.like]: `%${title}%`
        // console.log(title);
        if(title){
            this.model.findAll({where : {title : {[Op.like]:`%${title}%`}} })
                .then(result=>res.send(result))
                .catch(error=>res.send(error));
        }else {
            this.model.findAll()
                .then(result=>res.send(result))
                .catch(error=>res.send(error));
        }

    };
    getElementById = (req,res,next)=>{
        //Este ruta se usa cuando queremos visualizar el detalle de una receta. Le pasamos el ID de la receta seleccionada,
        //nos trae la info de una receta elegida y la renderiza.
        const {id} = req.params;
        return this.model.findByPk(id)
            .then(item => res.send(item))
            .catch(error => next(error))
    };
    postElement = async (req, res) => {
        const body = req.body;
        //console.log("BODY----->", JSON.stringify({name}))
        //if (!title || !summary || !healthScore || !analyzedInstructions) return res.status(404).send("Falta enviar datos obligatorios");

        try {
            let newElement;
            if(this.model===Recipe){
                 newElement = await this.model.create({...body, id: uuidv4()})
            }else{
                 newElement = await this.model.create(body);
            }
            // newElement = await this.model.create({name});
            //console.log(body.toJSON());
            res.status(201).send(newElement);
        } catch (e) {
            res.status(404).send("Error en alguno de los datos provistos")
        }
    };
}
module.exports = ModelController;