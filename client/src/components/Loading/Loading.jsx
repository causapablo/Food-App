import React from "react";
import LoadingRecipe from "../../assets/Loading Recipe.png";
import "./Loading.css";
export function Loading() {
    return (
        <div class="loader-container">
            <img class="loading-img" src={LoadingRecipe} alt="loaging" />
        </div>
    );
}