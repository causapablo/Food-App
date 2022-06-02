import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getRecipeDetail} from "../../redux/actions/actionsCreators";


let RecipeDetail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const detail = useSelector((state) => state.recipeDetail);
    useEffect(() => {
        dispatch(getRecipeDetail(id));
    }, [dispatch, id]);
    console.log(detail);
    return (
        <div>
            {

                    <div>
                        <h1>{detail.title}</h1>
                        <div>
                            <img src={detail.image} alt='img not found'
                                 width="500px" height="400px"/>
                        </div>
                        <div>

                            <h3>Healthy-Food level: {detail.healthScore}</h3>
                            <h3>Step-by-step:</h3>
                            <p>{detail.analyzedInstructions}</p>
                            <h3>Summary:</h3><p>{detail.summary}</p>
                            <h3>Diet types:</h3><ul>{detail.diets ? detail.diets.map((d,index) => <li key={index}>{d.name}</li>) : <p>Loading</p>}</ul>
                        </div>
                    </div>
            }
        </div>
    );
}

export default RecipeDetail;