// const axios = require('axios');
const {Diet} = require("../../db");
// const toObject = require('../recipe/toObject');
let postDiets = async (endPointGet) => {
    // let diets = [];
    // let recipes = await axios.get(endPointGet);//Esto devuelve un arreglo de objetos.
    // let rep = toObject(recipes.data.results);
    //
    // rep.forEach(r=>{
    //     r.diets.forEach(r=>{
    //         diets.push(r);
    //     })
    // });
    // diets = [...new Set(diets)].sort();
    let diets = [
        'dairy free',
        'fodmap friendly',
        'gluten free',
        'ketogenic',
        'lacto ovo vegetarian',
        'paleolithic',
        'pescatarian',
        'primal',
        'vegan',
        'whole 30'
    ]

    try {
        diets.forEach(d => {
            if (d) {
                Diet.create({name: d});
            }
        });
        console.log("Diets loaded");
    } catch (e) {
        console.log(e)
    }


}

module.exports = postDiets;