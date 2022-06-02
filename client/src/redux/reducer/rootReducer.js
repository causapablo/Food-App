
import {
    CREATE_RECIPE,
    FILTER_BY_DIETS,
    GET_ALL_DIETS,
    GET_ALL_RECIPES, GET_RECIPE_DETAIL,
    ORDER_BY_NAME,
    ORDER_BY_SCORE, SEARCH_BY_TITLE
} from '../actions/actionsCreators';
import recipeDetail from "../../components/RecipeDetail/RecipeDetail";
const initialState = {
    recipes : [],
    recipesCopy : [],
    recipeDetail : [],
    diets : []
};

const rootReducer = (state = initialState,action)=>{
    switch (action.type){
        case GET_ALL_RECIPES : {
            return {
                ...state,
                recipes : action.payload,
                recipesCopy: action.payload
            }
        }
        case GET_ALL_DIETS : {
            return {
                ...state,
                diets: action.payload
            }
        }
        case FILTER_BY_DIETS : {
            let recipes = state.recipesCopy; //recipes = [{title, id,...,diets,..},{title, id,...,diets,..},{title, id,...,diets,..}]
            const filteredRecipes = action.diet === 'all' ? recipes :
                recipes.filter(r=>{
                    let names = r.diets.map(d => d.name);//['keto','vegan','fodmap']
                    if (names.includes(action.diet)){//action.payload
                        return r;
                    };
                });
            return{
                ...state,
                recipes: filteredRecipes
            }
        }
        case ORDER_BY_NAME : {
            const sortedRecipesTitle = action.payload === "Asc" ?
                state.recipes.sort((a,b)=>{
                    if(a.title > b.title) return 1;
                    if(a.title < b.title) return -1;
                    return 0;
                }) : state.recipes.sort((a,b)=>{
                    if(a.title > b.title) return -1;
                    if(a.title < b.title) return 1;
                    return 0;
                });
            return {
                ...state,
                recipes : sortedRecipesTitle
            }

        }
        case ORDER_BY_SCORE : {
            const sortedRecipesScore = action.payload === "Asc" ?
                state.recipes.sort((a,b)=>{
                    if(a.healthScore > b.healthScore) return 1;
                    if(a.healthScore < b.healthScore) return -1;
                    return 0;
                }) : state.recipes.sort((a,b)=>{
                    if(a.healthScore > b.healthScore) return -1;
                    if(a.healthScore < b.healthScore) return 1;
                    return 0;
                });
            return {
                ...state,
                recipes : sortedRecipesScore
            }
        }
        case SEARCH_BY_TITLE : {
            return {
                ...state,
                recipes: action.payload
            }
        }
        case CREATE_RECIPE : {
            return{
                ...state,
                recipes: [...state.recipes, action.payload]
            }
        }
        case GET_RECIPE_DETAIL : {
            return {
                ...state,
                recipeDetail: action.payload
            }
        }
        default : {
            return {...state}
        }
    }
}

export default rootReducer;