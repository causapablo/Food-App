import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
    getAllRecipes,
    getAllDiets,
    resetDetail, filterByDiets
} from "../../redux/actions/actionsCreators";
import { Loading } from "../Loading/Loading";
import "./AllRecipes.css";
import { Link } from "react-router-dom";
import {Recipe} from '../Recipe/Recipe.jsx'


export function AllRecipes() {
    let dispatch = useDispatch();
    let allRecipes = useSelector((state) => state.recipes);
    let errorRender = useSelector((state) => state.errorRender);
    let cache = useSelector(state=>state.cacheFiltrado);

    const [counterRecipes, setCounterRecipes] = useState(1);
    const [recipesPerPage ] = useState(9);

    const lastRecipe = counterRecipes * recipesPerPage; // 1 * 12 = 12
    const firstRecipe = lastRecipe - recipesPerPage; // 12 - 12 = 0
    //Indicador:
    const indexPages = Math.ceil(allRecipes.length / recipesPerPage);

    const recipeData = useSelector((state) =>
        state.recipes ? state.recipes.slice(firstRecipe, lastRecipe) : false
    );


    const back = () => {
        if (counterRecipes !== 1) {
            setCounterRecipes(counterRecipes - 1);
        }
    };

    const next = () => {
        if (counterRecipes !== indexPages) {
            setCounterRecipes(counterRecipes + 1);
        }
    };

    const begin = () => {
        setCounterRecipes(1);
    };

    const end = () => {
        setCounterRecipes(indexPages);
    };

    if (counterRecipes > indexPages) {
        back();
    }

    useEffect(() => {
        if(cache==="allDiets"){
            dispatch(getAllRecipes());
        }else{
            dispatch(filterByDiets(cache))
        }

        dispatch(getAllDiets());
    }, [dispatch]);

    if (errorRender.length === 0) {
        return (
            <div>
                <Loading />
            </div>
        );
    } else {
        return (
            <div>
                <div className="pagination">
                    <button onClick={begin} className="pagination-button">
                        Fist Page
                    </button>
                    <button onClick={back} className="pagination-button a">
                        Previous
                    </button>
                    <p>
                        {counterRecipes} de {indexPages}
                    </p>
                    <button onClick={next} className="pagination-button p">
                        Next
                    </button>
                    <button onClick={end} className="pagination-button">
                        Last Page
                    </button>
                </div>
                <div class="main-recipes-card">
                    {recipeData.length === 0 ? (
                        <p className="sinRecipe"> Oops! We didn't find any recipe</p>
                    ) : (
                        recipeData.map((recipe, index) => {
                            return(
                                <Link key={index} to={`/recipe/${recipe.id}`} class= "linked">
                                    <Recipe key = {index} id = {recipe.id}  image = {recipe.image} title = {recipe.title} healthScore={recipe.healthScore} diets={recipe.diets}/>
                                </Link>
                            )
                        })
                    )}
                </div>

            </div>
        );
    }
}