import React, {useEffect, useState} from 'react';
import {
    getAllRecipes,
    getAllDiets,
    filterByDiets,
    orderByScore,
    orderByName
} from "../../redux/actions/actionsCreators";
import {useDispatch, useSelector} from "react-redux";
import RecipeCard from "../RecipeCard/RecipeCard";
import Paginate from "../Paginate/Paginate";
import SearchBar from "../SearchBar/SearchBar";
import OrderByName from "../Filters/OrderByName";
import OrderByScore from "../Filters/OrderByScore";
import FilterByDiet from "../Filters/FilterByDiet";


function Home() {
    const dispatch = useDispatch();
    const recipes = useSelector(state=> state.recipes);
    const diets = useSelector(state=>state.diets);
    const [tomas, setTomas] = useState(true)

    const [currentPage, setCurrentPage] = useState(1);    // pagina que ira cambiando
    const [recipesPerPage, setRecipesPerPage] = useState(9); // self-explanatory
    const lastRecipe = recipesPerPage * currentPage; //9     // indice ultima receta renderizada
    const firstRecipe = lastRecipe - recipesPerPage; //0         // indice primera receta renderizada
    const currentRecipes = recipes.slice(firstRecipe, lastRecipe); // las 9 recetas que se iran mostrando en cda pág


    useEffect(()=>{
        dispatch(getAllRecipes());
        dispatch(getAllDiets());
        console.log(recipes);
    },[dispatch]);

    const paginate = (number) => {
        setCurrentPage(number)
    };
    function handleFilterByDiets(e) {
        console.log(e.target.value);
        dispatch(filterByDiets(e.target.value))
    };
    function handleOrderByName(e) {
        dispatch(orderByName(e.target.value));

        tomas ? setTomas(false) : setTomas(true);
    };
    function handleOrderByScore(e) {
        dispatch(orderByScore(e.target.value))
        tomas ? setTomas(false) : setTomas(true)
    };
    function returnToFirstPage() {
        setCurrentPage(1)
    };


    return (
        <div>
            {/*{*/}
            {/*    recipes.map((recipe,index)=>(*/}
            {/*        <RecipeCard key = {index} id = {recipe.id}  image = {recipe.image} title = {recipe.title}*/}
            {/*        healthScore = {recipe.healthScore} diets = {recipe.diets}*/}
            {/*        />*/}
            {/*    ))*/}
            {/*}*/}
            <div>
                <SearchBar returnToFirstPage={returnToFirstPage} />
                <OrderByName handleOrderByName={handleOrderByName}/>
                <OrderByScore handleOrderByScore={handleOrderByScore}/>
                <FilterByDiet handleFilterByDiets={handleFilterByDiets} diets={diets}/>

            </div>
            <div>
                <Paginate
                    recipesPerPage={recipesPerPage}
                    recipes={recipes?.length}
                    paginate={paginate}
                    currentPage={currentPage}
                />
                <div>
                    {
                        currentRecipes && currentRecipes.map((recipe,index) => {
                            return (
                                <RecipeCard key = {index} id = {recipe.id}  image = {recipe.image} title = {recipe.title}
                                            healthScore = {recipe.healthScore} diets = {recipe.diets}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;