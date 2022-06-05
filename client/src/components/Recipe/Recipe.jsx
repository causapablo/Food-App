import React from "react";
import "./Recipes.css";

export function Recipe({image, title, healthScore, diets}) {
    return (
        <div class="card-recipe-container">
            <div>
                <img
                    class="recipe-img"
                    src={image}
                    alt="Recipe"
                />
            </div>
            <h2 class="recipe-title">{title}</h2>
            <h3 className="recipe-title"> Health Score : {healthScore}</h3>
            <div>
                <h4 class="recipe-diets">
                    {
                        diets && diets.map((diet, index) => {
                            return <div key={index}>{diet.name}</div>
                        })
                    }
                </h4>
            </div>
        </div>
    );
}

// import React from "react";
// import {Link} from "react-router-dom";
//
// const Recipe = (props)=>{
//     return(
//         <div>
//             <img src={props.image} alt={props.title}/>
//             <h3>{props.title}</h3>
//             <h3>Health Score: {props.healthScore}</h3>
//             <h3>Diet Types</h3>
//             <ul>{
//                 props.diets.map((diet,index)=>{
//                     return <li key={index}>{diet.name}</li>
//                 })
//             }</ul>
//             <Link to={`/recipe/${props.id}`}>Details of Recipe</Link>
//         </div>
//     )
// }
// export default Recipe;