require('dotenv').config();

function apiGetTitle(title,API_KEY){
    return `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${title}&number=50&addRecipeInformation=true`;
}
function apiGetAll(API_KEY){
    return `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=50&addRecipeInformation=true`;
}
function apiGetById(id,API_KEY){
    return `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&includeNutrition=false`
}
module.exports = {apiGetTitle, apiGetAll, apiGetById};
