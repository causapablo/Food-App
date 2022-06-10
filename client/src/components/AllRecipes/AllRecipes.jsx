import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
    getAllRecipes,
    getAllDiets,
    filterByDiets, resetDetail
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

    const [counterPage, setCounterPage] = useState(1);
    const recipesPerPage = 9;

    const lastRecipe = counterPage * recipesPerPage; // 1 * 9 = 9
    const firstRecipe = lastRecipe - recipesPerPage; // 9 - 9 = 0
    //Indicador:
    const indexPages = Math.ceil(allRecipes.length / recipesPerPage);

    const recipeData = useSelector((state) =>
        state.recipes ? state.recipes.slice(firstRecipe, lastRecipe) : false
    );


    const back = () => {
        if (counterPage !== 1) {
            setCounterPage(counterPage - 1);
        }
    };

    const next = () => {
        if (counterPage !== indexPages) {
            setCounterPage(counterPage + 1);
        }
    };

    const begin = () => {
        setCounterPage(1);
    };

    const end = () => {
        setCounterPage(indexPages);
    };

    if (counterPage > indexPages) {
        back();
    }

    useEffect(() => {
        if(cache==="allDiets"){
            dispatch(getAllRecipes());
        }else{
            dispatch(filterByDiets(cache))
        }
        dispatch(resetDetail())
        dispatch(getAllDiets());
    }, [cache, dispatch]);

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
                        {counterPage} de {indexPages}
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