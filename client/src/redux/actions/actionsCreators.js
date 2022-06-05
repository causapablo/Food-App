import axios from "axios";

export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const GET_ALL_DIETS = "GET_ALL_DIETS";
export const FILTER_BY_DIETS = "FILTER_BY_DIETS";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_SCORE = "ORDER_BY_SCORE";
export const SEARCH_BY_TITLE = "SEARCH_BY_TITLE";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const GET_RECIPE_DETAIL = "GET_RECIPE_DETAIL";
export const LOADING = "LOADING";
export const RESET_DETAIL = "RESET_DETAIL";


export const getAllRecipes = () => {

    return async (dispatch) => {
        try {
            dispatch(loading());
            let recipes = await axios('http://localhost:3001/recipes');
            return dispatch({
                type: GET_ALL_RECIPES,
                payload: recipes.data
            })
        } catch (e) {
            console.log(e)
        }
    }
};
export const getAllDiets = () => {
    return async (dispatch) => {
        try {

            let diets = await axios('http://localhost:3001/diets');
            return dispatch({
                type: GET_ALL_DIETS,
                payload: diets.data
            })
        } catch (e) {
            console.log(e)
        }
    }
};
export const filterByDiets = (diet) => {
    return {
        type: FILTER_BY_DIETS,
        diet
    }
};
export const loading = (value)=>{
    return{
        type : LOADING,
        payload : value
    }
}
export const orderByName = (payload) => {
    return {
        type: ORDER_BY_NAME,
        payload
    }
};
export const orderByScore = (payload) => {
    return {
        type: ORDER_BY_SCORE,
        payload
    }
};
export const searchByTitle = (title) => {

    return async (dispatch) => {
        try {
            let recipesByTitle = await axios.get(`http://localhost:3001/recipes?title=${title}`);
            return dispatch({type: SEARCH_BY_TITLE, payload: recipesByTitle.data});
        } catch (e) {
            console.log(e);
        }
    };
};
export const createRecipe = (recipe) => {
    return async (dispatch) => {
        try {
            let newRecipe = await axios.post('http://localhost:3001/recipes', recipe);
            return dispatch({type: CREATE_RECIPE, payload: newRecipe.data})
        } catch (e) {
            console.log(e);
        }
    }
};
export const getRecipeDetail = (id) => {

    return async (dispatch) => {

        try {
            dispatch(loading());
            let recipe = await axios.get(`http://localhost:3001/recipes/${id}`);
            return dispatch({type: GET_RECIPE_DETAIL, payload: recipe.data})
        } catch (e) {
            console.log(e);
        }
    }

};
export function resetDetail() {
    return {
        type: RESET_DETAIL,
    };
}
