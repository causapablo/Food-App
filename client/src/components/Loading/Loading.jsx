import React from "react";
import LoadingRecipe from "../../assets/Loading Recipe.png";
import "./Loading.css";
export function Loading() {
    return (
        <div class="loader-container">
            <div className="progress">
                <div className="color"></div>
            </div>
        </div>
    );
}