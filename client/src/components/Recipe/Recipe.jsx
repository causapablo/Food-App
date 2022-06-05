import React from "react";
import {Link} from "react-router-dom";

const RecipeCard = (props)=>{
    return(
        <div>
            <img src={props.image} alt={props.title}/>

            <h3>{props.title}</h3>
            <h3>Health Score: {props.healthScore}</h3>
            <h3>Diet Types</h3>
            <ul>{
                props.diets.map((diet,index)=>{
                    return <li key={index}>{diet.name}</li>
                })
            }</ul>
            <Link to={`/recipe/${props.id}`}>Details of Recipe</Link>
        </div>
    )
}
export default RecipeCard;